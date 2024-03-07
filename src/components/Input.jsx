const Input = ({ name, placeholder, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phoneNumber" className="text-sm font-medium text-[#3C4448]">{name}</label>
      <div className="relative px-3 py-[10px] pl-11 border border-[#3C4448] rounded-md w-[320px]">
        {icon}
        <input type="text" id="phoneNumber" className="w-full outline-none" placeholder={placeholder} />
      </div>
    </div>
  )
}

export default Input