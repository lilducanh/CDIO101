const ButtonAction = ({ name, onClick }) => {
  return (
    <button 
      className="w-20 rounded bg-[#3C4448] border border-[#606C72] py-3 text-white text-base font-semibold hover:bg-brown"
      onClick={onClick} // Thêm sự kiện onClick vào button
    >
      {name}
    </button>
  )
}

export default ButtonAction;


