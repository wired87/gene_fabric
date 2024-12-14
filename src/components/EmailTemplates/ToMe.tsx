import React from "react";
import {MailT} from "@/types/contact";



export  const EmailTemplate: React.FC<MailT> = (
  {
    name,
    email,
    subject,
    phone, // Optional
    message,
    preferredServices, // Array for multiple checkboxes
    time
  }
) => {


  return(
    <>
      <p>
        Name: {name}
      </p><br/><p>
        email: {email}
      </p><br/><p>
        subject: {subject}
      </p><br/><p>
        phone: {phone}
      </p><br/><p>
        message: {message}
      </p>
        <br/>
      {preferredServices.map((item, i) => (
        <div key={i}><p>{item}</p><br/></div>
      ))}
        <p>
        time: {time}
      </p>
    </>
  )
}