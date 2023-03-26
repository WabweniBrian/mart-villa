const CTA = () => {
  return (
    <div className="relative mt-8 h-[300px]">
      <img src="/images/property (14).jpg" alt="" className="w-full h-full" />
      <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-6 bg-black/50">
        <h1 className="heading !text-slate-100">find your dream house</h1>
        <h1 className="text-slate-100">$2, 999</h1>
        <button className="mt-3 btn btn-primary">shop now</button>
      </div>
    </div>
  );
};

export default CTA;
