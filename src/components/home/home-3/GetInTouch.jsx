const GetInTouch = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full flex-1 basis-[18rem]">
          <img
            src="/images/property (39).jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 basis-[18rem] bg-secondary py-6 !text-slate-200">
          <div className="max-w-[350px] w-full mx-auto bg-[#0a5076] p-3 rounded-lg">
            <h1 className="text-lg font-semibold">Get in touch</h1>
            <p>
              For more inquiries or deals, just conatct us using the form below,
              we will contact you back!
            </p>
            <div className="mt-4">
              <input
                type="text"
                className="w-full px-2 py-1 border-none rounded-md outline-none bg-secondary"
                placeholder="Your name.."
              />
              <input
                type="text"
                className="w-full px-2 py-1 mt-3 border-none rounded-md outline-none bg-secondary"
                placeholder="Your email.."
              />
              <textarea
                type="text"
                className="w-full p-2 mt-3 border-none rounded-md outline-none bg-secondary"
                rows={3}
                placeholder="Your message.."
              ></textarea>
              <button className="w-full mt-4 btn btn-primary">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
