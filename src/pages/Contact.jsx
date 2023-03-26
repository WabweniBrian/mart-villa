import { ContactInfo, Form, Map } from "../components/contact";

const Contact = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <Map />
      <ContactInfo />
      <Form />
    </div>
  );
};

export default Contact;
