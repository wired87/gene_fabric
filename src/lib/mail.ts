import nodemailer from "nodemailer";
import {MailT} from "@/types/contact";

export async function sendMail(
  {
     email,
     name,
     subject,
     message,
      phone,
      preferredServices,
      time
   }: MailT
) {

  const { NEXT_PUBLIC_GMAIL, NEXT_PUBLIC_GOOGLE_APP_PW, NEXT_PUBLIC_BUSINESS_E_PW, NEXT_PUBLIC_BUSINESS_EMAIL } = process.env;
  console.log(`EMAIL ${NEXT_PUBLIC_GMAIL}`);

  const transport = nodemailer.createTransport({
    host: 'smtps.udag.de',
    port: 465,
    secure: true,
    auth: {
      user: NEXT_PUBLIC_BUSINESS_EMAIL,
      pass: NEXT_PUBLIC_BUSINESS_E_PW,
    },
  });
  console.log("transport created:", transport)
  try {
    const testResult = await transport.verify();
    console.log("Verify transport result:", testResult);
  } catch (e) {
    console.error("Error occurred while verify:", e);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: NEXT_PUBLIC_GOOGLE_APP_PW,
      to: [NEXT_PUBLIC_GMAIL],
      subject: subject,
      text: `
      Subject: ${subject} \n
      Message: ${message} \n
      Email: ${email} \n
      Name: ${name} \n
      Phone: ${phone} \n
      Services: ${preferredServices} \n
      Time: ${time} \n
      `
    });
    console.log(sendResult);
    return sendResult;
  } catch (error) {
    console.log(error);
    return `ERROR OCCURRED WHILE SEND MAIL:${error}`
  }
}

/*

export function compileWelcomeTemplate(name: string, url: string) {
  const template = handlebars.compile(welcomeTemplate);
  const htmlBody = template({
    name: name,
    url: url,
  });
  return htmlBody;
}

*/