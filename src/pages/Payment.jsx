/* eslint-disable react/no-unknown-property */
import PaymentInstructions from "../component/PaymentInstructions";
import Logo from "../component/layouts/Logo";
import { PaymentInputs } from "../constant/PaymentInput";
import CustomInput from "../component/CustomInput/Index";
import CustomButton from "../component/CustomButton/Index";
const Payment = () => {
  return (
    <>
      <header className="py-5 border border-gray-400">
        <nav className="flex justify-center container max-w-[1141px]  mx-auto ">
          <Logo />
        </nav>
      </header>

      <main className=" container max-w-[1141px] mx-auto px-5">
        <section className="py-10">
          <img
            className="text-center m-auto py-10"
            src="/images/stepper (3).svg"
            alt="steps"
          />
          <div className="text-center m-auto py-10">
            <h2 className="font-semibold text-[2.625rem]">Payment</h2>
            <p className="font-light text-lg text-tertiary">
              Kindly follow the instruction below
            </p>
          </div>
          <div className="md:flex flex-row justify-center gap-24 items-center">
            <PaymentInstructions />
            <form action="">
              {PaymentInputs.map((input) => (
                <CustomInput key={input.id} {...input} />
              ))}
            </form>
          </div>
          <div className="flex flex-col  m-auto py-32 space-y-5">
            <CustomButton>Cancel</CustomButton>
          </div>
        </section>
      </main>
    </>
  );
};

export default Payment;
