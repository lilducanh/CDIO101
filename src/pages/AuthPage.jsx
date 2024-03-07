import { Home, Phone, Lock } from 'lucide-react';
import Input from '../components/Input';
import ButtonAction from '../components/ButtonAction';
import { useState } from 'react';

const AuthPage = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full bg-[#3C4448] relative flex justify-center items-center">
        {/* Shape */}
        <div className="w-[525px] h-[525px] rounded-full bg-[#F6F6BD] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="flex items-center flex-col">
          <Home size={160} color='#E7E3E2' />
          <h1 className="text-white text-4xl font-bold mb-5">VILAHOUSE</h1>
          <p className="text-center uppercase text-white text-xs max-w-[340px] w-full mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu.</p>
          {/* Image */}
          <div className="flex gap-3">
            <div className="flex flex-col items-end gap-3">
              <img className='w-40 h-40 object-cover rounded-md' src="./imageTest.jpg" alt="" />
              <img className='w-[100px] h-[100px] object-cover rounded-md' src="./imageTest.jpg" alt="" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <img className='w-[100px] h-[100px] object-cover rounded-md' src="./imageTest.jpg" alt="" />
              <img className='w-40 h-40 object-cover rounded-md' src="./imageTest.jpg" alt="" />
            </div>
          </div>
        </div>
        <p className='absolute bottom-4 left-4 text-white font-medium'>© 2023 VILAHOUSE. All rights reserved.</p>
      </div>
      <div className="bg-white w-1/2 flex flex-col items-center justify-center">
        <div className="p-1 bg-[#D9D9D9] flex rounded-xl">
          <button className={`px-10 py-3 rounded-lg text-[#3C4448] font-bold hover:bg-[#3C4448] hover:text-[#F6F6BD] ${isActive ? "bg-[#3C4448] text-[#F6F6BD]" : ""}`}>OWNER</button>
          <button className="px-10 py-3 rounded-lg text-[#3C4448] font-bold hover:bg-[#3C4448] hover:text-[#F6F6BD]">USER</button>
        </div>

        <h1 className="text-[32px] text-[#3C4448] mt-6 font-bold">LOGIN</h1>
        <form className='flex flex-col items-center gap-4 mt-10'>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-sm font-medium text-[#3C4448]">Phone number</label>
            <div className="relative px-3 py-[10px] pl-11 border border-[#3C4448] rounded-md w-[320px]">
              <Phone size={20} color='#3C4448' className='absolute left-3 top-3' />
              <input type="text" id="phoneNumber" className="w-full" placeholder="+84 98xxxxxxxx" />
            </div>
          </div>
          <Input name="Password" placeholder="123123123" icon={<Lock size={20} color='#3C4448' className='absolute left-3 top-3' />} />
          <div className="w-full flex justify-between items-center font-medium">
            <div className="flex justify-center gap-1">
              <input type="checkbox" />
              <span className='text-[#3C4448] text-xs'>Remember me</span>
            </div>
            <a href="#" className='text-[#3C4448] text-xs'>Forgot password?</a>
          </div>
          <ButtonAction name="Sign In" />
        </form>
        <p className="mt-5 text-sm font-medium text-[#3C4448]">Don’t you have an account? <a href="#" className="text-[#606C72] font-semibold">Signup</a></p>
      </div>
    </div>
  )
}

export default AuthPage