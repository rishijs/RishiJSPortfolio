import * as React from 'react';

interface EmailTemplateProps {
  fullname: string,
  message: string,
  email: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  message,
  email
}) => (
  <div>
    <a>Hi its {fullname},</a>
    <br/>
    <br/>
    <a>{message}</a>
    <br/>
    <br/>
    <a>My email is: {email}</a>
  </div>
);