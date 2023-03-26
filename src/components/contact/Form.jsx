const Form = () => {
  return (
    <div className="pt-10 pb-8">
      <div className="flex-col gap-4 flex-align-center sm:flex-row">
        <div className="flex-1 w-full">
          <p>First Name</p>
          <input
            type="text"
            className="w-full input"
            placeholder="First Name.."
          />
        </div>
        <div className="flex-1 w-full">
          <p>Last Name</p>
          <input
            type="text"
            className="w-full input"
            placeholder="Last Name.."
          />
        </div>
      </div>
      <div className="mt-4">
        <p>Email Address</p>
        <input
          type="text"
          className="w-full input"
          placeholder="Email Address.."
        />
      </div>
      <div className="mt-4">
        <p>Message</p>
        <textarea
          rows={4}
          className="w-full input"
          placeholder="Message.."
        ></textarea>
      </div>
      <div className="mt-4 flex-center-center">
        <button className="btn btn-primary">submit</button>
      </div>
    </div>
  );
};

export default Form;
