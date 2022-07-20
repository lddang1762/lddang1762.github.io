import emailjs from "@emailjs/browser";

export interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const sendEmail = (data: FormInputs) => {
  const params = {
    name: data.name,
    email: data.email,
    message: data.message,
  };
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
      params,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
    )
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
};

export default sendEmail;
