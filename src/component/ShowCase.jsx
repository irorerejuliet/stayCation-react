

const ShowCase = () => {
  return (
    <section className="md:flex flex-row justify-between items-center my-16">
      <div className="md:w-[514px] w-[400px]">
        <h1 className="font-bold md:text-[2.625rem] text-[2rem]  pt-24 text-[#183369]">
          Forget Your Main Work, Start Holiday Now!
        </h1>
        <p className="font-light text-lg text-tertiary md:w-[514px] w-[380px]">
          We provide you what you need to enjoy your holiday with family. Time
          to make another memorable moments.
        </p>
        <button className="bg-secondary text-white py-2 px-3 rounded-[4px] my-10">
          Show Me Now
        </button>
        <div className="md:flex flex-row justify-between">
          <div className="md:py-0 py-2">
            <img src="/images/ic_traveler.svg" alt="ic_traveler-icon" />
            <p className="font-medium text-lg leading-[30.6px]">
              80,409
              <span className="font-light text-lg leading-[30.6px]">
                traveler
              </span>
            </p>
          </div>
          <div className="md:py-0 py-2">
            <img src="/images/location=icon.svg" alt="location-icon" />
            <p className="font-medium text-lg leading-[30.6px]">
              1,492
              <span className="font-light text-lg leading-[30.6px]">
                cities
              </span>
            </p>
          </div>
          <div className="md:py-0 py-2">
            <img
              src="/images/camera-img.svg"
              alt="camera-img"
              className="[559px]"
            />
            <p className="font-medium text-lg leading-[30.6px]">
              862
              <span className="font-light text-lg leading-[30.6px]">
                treasures
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <img src="/images/banner.svg" alt="banner-img" />
      </div>
    </section>
  );
}

export default ShowCase
