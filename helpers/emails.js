import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: proces.env.EMAIL_HOST,
        port: proces.env.EMAIL_PORT,
        auth: {
            user: proces.env.EMAIL_USER,
            pass: proces.env.EMAIL_PASSWORD,
        },
    });

    const info = await transport.sendMail({
        from: "UpTask - Administrador de proyectos <cuentas@uptask.com>",
        to: email,
        subject: "UpTask - Confirma tú cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola ${nombre} Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>`,
    });
};

export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: proces.env.EMAIL_HOST,
        port: proces.env.EMAIL_PORT,
        auth: {
            user: proces.env.EMAIL_USER,
            pass: proces.env.EMAIL_PASSWORD,
        },
    });

    const info = await transport.sendMail({
        from: "UpTask - Administrador de proyectos <cuentas@uptask.com>",
        to: email,
        subject: "UpTask - Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola ${nombre} has solicitado reestablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:</p>
        <a href="${process.env.FRONTEND_URL}/nuevo-password/${token}">Reestablecer password</a>`,
    });
};
