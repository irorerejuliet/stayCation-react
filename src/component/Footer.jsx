

const Footer = () => {
  return (
    <footer className="mt-10 m-auto max-w-[1141px] md:px-0 px-5">
      <div className="md:flex flex-row justify-between items-center">
        <div className="w-[292px]">
          <img src="/images/Staycation..svg" alt="logo" className="py-5" />
          <p className="font-light text-lg leading-[27px] ">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div>
          <h4 className="font-normal text-lg text-[#152C5B] py-5">
            For Beginners
          </h4>
          <ul className="font-light text-base text-tertiary leading-6">
            <li>New Account</li>
            <li>Book a Room</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h4 className="font-normal text-lg text-[#152C5B] py-5">
            Explore Us
          </h4>
          <ul className="font-light text-base text-tertiary leading-6">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-normal text-lg text-[#152C5B] py-5">
            Getting Touch
          </h4>
          <ul className="font-light text-base text-tertiary leading-6">
            <li>support@stayctation.id</li>
            <li>021 - 2208 - 1996</li>
            <li>Staycation Oy, Jakarta</li>
          </ul>
        </div>
      </div>
      <h4 className="font-light text-base text-tertiary text-center pt-24 pb-8">
        Copyright 2019 . All rights reserved . Staycation
      </h4>
    </footer>
  );
}

export default Footer
