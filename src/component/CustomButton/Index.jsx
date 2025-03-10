/* eslint-disable react/prop-types */





const CustomButton = ({children, className, ...res}) => {
  return (
    <button
      className={`font-medium text-lg text-tertiary bg-[#F5F6F8]
     roundded-[4px] py-3 px-20 mx-auto text-center w-[300px] ${className}`}
      {...res}
    >
      {children}
    </button>
  );
}

export default CustomButton
