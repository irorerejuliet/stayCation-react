import { Link } from "react-router"


const Complete = () => {
  return (
   <>
   <header className="py-5 border border-gray-400">
    <nav className="flex justify-center container max-w-[1141px]  mx-auto ">
        <a href=""><img src="/images/Staycation..svg" alt="logo"/></a>
    </nav>
   </header> 

   <main  className=" container max-w-[1141px]  mx-auto px-5">
    <section className="py-10">
        <img className="text-center m-auto py-10" src="/images/stepper (2).svg" alt="steps" />
        <div  className="text-center m-auto py-10">
            <h2 className="font-semibold md:text-[2.625rem] text-[1.625rem]">Transaction Completed!</h2>
        </div>
        <div className="">
             <div className=" w-[420px]">
                    <img src="/images/il_succes 1.svg" alt="il_succes" />
            </div>
            <p className="font-light font-poppins text-lg text-tertiary text-center m-auto w-[382px]">We will inform you via email later 
            once this transaction has been accepted</p>
        </div>
        <div className="text-center py-20">
            <Link to="/"> <button className="font-medium text-lg text-white bg-secondary  roundded-[4px] py-3 px-20 ">Back to Home</button>
            </Link>
        </div>
    </section>
   </main>
   </>
  )
}

export default Complete
