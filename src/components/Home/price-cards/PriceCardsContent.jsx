function PriceCardsContent({
  main_title,
  description,
  timing,
  location,
  instructor,
  price,
  img,
}) {
  return (
    <div
      className="bg-[#A9A9A9] w-full h-fit max-w-[400px] p-4 rounded-3xl my-5"
    >
      <div>
        <img
          src={img}
          alt="img"
          className="h-[150px] w-full rounded-3xl bg-no-repeat object-cover object-center"
        />
      </div>
      <div className="text-white flex flex-col gap-2 pt-2">
        <h1 className="font-bold">{main_title}</h1>
        <p className="text-xs">{description}</p>
        <h3 className="text-xs">Timing: {timing}</h3>
        <h3 className="text-xs">Location: {location}</h3>
        <h3 className="text-xs">Instructor: {instructor}</h3>
      </div>
      <div className="pt-3 flex items-center justify-between gap-3">
        <button className="bg-white text-black py-2 px-3 rounded-2xl text-xs">
          Sign up
        </button>
        <h2 className="text-white font-bold">{price} GEL</h2>
      </div>
    </div>
  );
}

export default PriceCardsContent;
