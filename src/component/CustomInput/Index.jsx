/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { FaRegEye,  FaEyeSlash  } from "react-icons/fa6";


const CustomInput = ({type, name, className, label, placeholder}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col py-3  font-normal">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        className={`border border-none bg-[#F5F6F8] py-2 px-4 ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {show ? <FaRegEye /> : <FaEyeSlash />}
    </div>
  );
}

export default CustomInput
