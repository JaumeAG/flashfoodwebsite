import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parsear el body de la solicitud
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error al parsear el JSON:', parseError);
      return NextResponse.json(
        { error: 'Formato de datos inválido' },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor proporciona un email válido' },
        { status: 400 }
      );
    }

    // Configuración del servidor SMTP desde variables de entorno
    const smtpConfig = {
      host: process.env.SMTP_HOST || 'flashfoodapp.es',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465', // true para puerto 465, false para otros
      auth: {
        user: process.env.SMTP_USER || 'noreply@flashfoodapp.es',
        pass: process.env.SMTP_PASS,
      },
      // Opciones adicionales para mejor compatibilidad
      tls: {
        rejectUnauthorized: false, // Permite certificados auto-firmados
      },
    };

    // Verificar que todas las variables de entorno están configuradas
    if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error('Configuración SMTP incompleta. Verifica las variables de entorno:');
      console.error('- SMTP_HOST:', smtpConfig.host ? '✓' : '✗', smtpConfig.host || 'NO CONFIGURADO');
      console.error('- SMTP_PORT:', smtpConfig.port || '✗', smtpConfig.port || 'NO CONFIGURADO');
      console.error('- SMTP_SECURE:', smtpConfig.secure);
      console.error('- SMTP_USER:', smtpConfig.auth.user ? '✓' : '✗', smtpConfig.auth.user || 'NO CONFIGURADO');
      console.error('- SMTP_PASS:', smtpConfig.auth.pass ? '✓ (configurada)' : '✗', 'NO CONFIGURADA');
      
      return NextResponse.json(
        { error: 'Error de configuración del servidor de email. Verifica las variables de entorno.' },
        { status: 500 }
      );
    }

    console.log('Intentando conectar con SMTP:', {
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      user: smtpConfig.auth.user,
    });

    // Crear transporter de nodemailer
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verificar conexión con el servidor SMTP
    try {
      await transporter.verify();
      console.log('✓ Conexión SMTP verificada correctamente');
    } catch (verifyError: any) {
      console.error('✗ Error al verificar conexión SMTP:');
      console.error('Código:', verifyError.code);
      console.error('Comando:', verifyError.command);
      console.error('Mensaje:', verifyError.message);
      
      // Mensaje de error más detallado para ayudar en la depuración
      let errorMessage = 'Error de conexión con el servidor de email';
      if (verifyError.code === 'ECONNREFUSED') {
        errorMessage = 'No se pudo conectar al servidor SMTP. Verifica SMTP_HOST y SMTP_PORT.';
      } else if (verifyError.code === 'EAUTH') {
        errorMessage = 'Error de autenticación. Verifica SMTP_USER y SMTP_PASS.';
      } else if (verifyError.code === 'ETIMEDOUT') {
        errorMessage = 'Timeout al conectar con el servidor SMTP.';
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@flashfoodapp.es',
      to: process.env.SMTP_TO || 'info@flashfoodapp.es',
      replyTo: email, // Responder directamente al usuario
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E4512F;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #E4512F;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de FlashFood.
          </p>
        </div>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de FlashFood.
      `.trim(),
    };

    // Enviar el email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('✓ Email enviado correctamente:', info.messageId);
      console.log('✓ Email enviado a:', mailOptions.to);

      return NextResponse.json(
        { message: 'Mensaje enviado correctamente. Te responderemos pronto.' },
        { status: 200 }
      );
    } catch (sendError: any) {
      console.error('✗ Error al enviar el email:');
      console.error('Código:', sendError.code);
      console.error('Mensaje:', sendError.message);
      console.error('Comando:', sendError.command);
      
      let errorMessage = 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo más tarde.';
      if (sendError.code === 'EAUTH') {
        errorMessage = 'Error de autenticación con el servidor de email.';
      } else if (sendError.response) {
        errorMessage = `Error del servidor SMTP: ${sendError.response}`;
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('✗ Error general al procesar el formulario:');
    console.error('Tipo:', typeof error);
    console.error('Error:', error);
    console.error('Mensaje:', error?.message);
    console.error('Stack:', error?.stack);
    
    // Mensaje de error más útil
    let errorMessage = 'Hubo un error al procesar tu solicitud. Por favor intenta de nuevo más tarde.';
    
    // Verificar si es un error específico de nodemailer o configuración
    if (error?.message?.includes('SMTP')) {
      errorMessage = 'Error de configuración SMTP. Verifica las variables de entorno en .env.local';
    } else if (error?.code === 'MODULE_NOT_FOUND') {
      errorMessage = 'Error: Módulo no encontrado. Ejecuta: npm install nodemailer @types/nodemailer';
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    );
  }
}

