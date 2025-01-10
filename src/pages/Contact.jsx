import { ContactInfo, Form, Map } from "../components/contact";

const Contact = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <Map />
      <ContactInfo />
      <Form />
    </div>
  );
};

export default Contact;
