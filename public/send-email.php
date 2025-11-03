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

// Configuración de email
$from_email = 'noreply@flashfoodapp.es';
$to_email = 'info@flashfoodapp.es'; // Email destino

// Configurar headers del email
$headers = "From: FlashFood <$from_email>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

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

// Enviar email usando la función nativa mail() de PHP
$success = mail($to_email, $subject, $email_body, $headers);

if ($success) {
    echo json_encode([
        'message' => 'Mensaje enviado correctamente. Te responderemos pronto.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Hubo un error al enviar el email. Por favor intenta de nuevo más tarde.'
    ]);
}
?>

