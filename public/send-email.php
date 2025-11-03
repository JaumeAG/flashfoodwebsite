<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'error' => 'Método no permitido',
        'method' => $_SERVER['REQUEST_METHOD'],
        'allowed' => 'POST'
    ]);
    exit;
}

// Obtener datos del POST
$data = json_decode(file_get_contents('php://input'), true);

// Validar campos requeridos
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Por favor completa todos los campos requeridos']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : 'No proporcionado';
$message = htmlspecialchars($data['message']);

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Por favor proporciona un email válido']);
    exit;
}

// Configuración SMTP
$smtp_host = 'flashfoodapp.es';
$smtp_port = 465; // Puerto SSL
$smtp_user = 'noreply@flashfoodapp.es';
$smtp_pass = 'flashfood_2026!*';
$from_email = 'noreply@flashfoodapp.es';
$to_email = 'info@flashfoodapp.es'; // Email destino

// Asunto
$subject = "Nuevo mensaje de contacto de $name";

// Cuerpo del email (HTML)
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
</head>
<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <h2 style='color: #E4512F;'>Nuevo mensaje de contacto</h2>
    <div style='background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;'>
        <p style='margin: 10px 0;'><strong>Nombre:</strong> $name</p>
        <p style='margin: 10px 0;'><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
        <p style='margin: 10px 0;'><strong>Teléfono:</strong> $phone</p>
    </div>
    <div style='margin: 20px 0;'>
        <h3 style='color: #E4512F;'>Mensaje:</h3>
        <p style='white-space: pre-wrap; line-height: 1.6;'>$message</p>
    </div>
    <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;'>
    <p style='color: #6b7280; font-size: 12px;'>
        Este mensaje fue enviado desde el formulario de contacto de FlashFood.
    </p>
</body>
</html>
";

// Función para leer respuesta SMTP
function readSMTP($socket) {
    $response = '';
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        if (substr($line, 3, 1) == ' ') {
            break;
        }
    }
    return $response;
}

// Función para enviar email vía SMTP con autenticación
function sendSMTP($host, $port, $username, $password, $from, $to, $subject, $body, $replyTo = null) {
    // Preparar headers del mensaje
    $headers = "From: FlashFood <$from>\r\n";
    if ($replyTo) {
        $headers .= "Reply-To: $replyTo\r\n";
    }
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Subject: $subject\r\n";
    
    // Construir el mensaje completo
    $message = $headers . "\r\n" . $body;
    
    // Conectar al servidor SMTP
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);
    
    $socket = stream_socket_client(
        "ssl://$host:$port",
        $errno,
        $errstr,
        30,
        STREAM_CLIENT_CONNECT,
        $context
    );
    
    if (!$socket) {
        return ['success' => false, 'error' => "Error de conexión: $errstr ($errno)"];
    }
    
    // Leer respuesta inicial (220)
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code != '220') {
        fclose($socket);
        return ['success' => false, 'error' => "Error del servidor: $response"];
    }
    
    // EHLO
    fwrite($socket, "EHLO $host\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code[0] != '2') {
        fclose($socket);
        return ['success' => false, 'error' => "Error EHLO: $response"];
    }
    
    // AUTH LOGIN
    fwrite($socket, "AUTH LOGIN\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "Error AUTH LOGIN: $response"];
    }
    
    // Enviar usuario (base64)
    fwrite($socket, base64_encode($username) . "\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "Error usuario: $response"];
    }
    
    // Enviar contraseña (base64)
    fwrite($socket, base64_encode($password) . "\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code != '235') {
        fclose($socket);
        return ['success' => false, 'error' => "Error de autenticación: $response"];
    }
    
    // MAIL FROM
    fwrite($socket, "MAIL FROM:<$from>\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code[0] != '2') {
        fclose($socket);
        return ['success' => false, 'error' => "Error MAIL FROM: $response"];
    }
    
    // RCPT TO
    fwrite($socket, "RCPT TO:<$to>\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code[0] != '2') {
        fclose($socket);
        return ['success' => false, 'error' => "Error RCPT TO: $response"];
    }
    
    // DATA
    fwrite($socket, "DATA\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code != '354') {
        fclose($socket);
        return ['success' => false, 'error' => "Error DATA: $response"];
    }
    
    // Enviar mensaje
    fwrite($socket, $message);
    fwrite($socket, "\r\n.\r\n");
    $response = readSMTP($socket);
    $code = substr($response, 0, 3);
    if ($code[0] != '2') {
        fclose($socket);
        return ['success' => false, 'error' => "Error enviando mensaje: $response"];
    }
    
    // QUIT
    fwrite($socket, "QUIT\r\n");
    readSMTP($socket);
    
    fclose($socket);
    return ['success' => true];
}

// Enviar email usando SMTP con autenticación
$replyTo = "$name <$email>";
$result = sendSMTP($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from_email, $to_email, $subject, $email_body, $replyTo);

if ($result['success']) {
    echo json_encode([
        'message' => 'Mensaje enviado correctamente. Te responderemos pronto.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Hubo un error al enviar el email: ' . ($result['error'] ?? 'Error desconocido')
    ]);
}
?>

