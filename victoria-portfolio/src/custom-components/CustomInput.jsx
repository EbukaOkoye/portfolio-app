/* eslint-disable react/prop-types */
const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={`bg-lightDark w-full p-3 placeholder:text-mainGrey text-mainGrey my-3 ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
