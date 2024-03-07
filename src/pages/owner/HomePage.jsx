import { Home, Zap, CreditCard, User, BedDouble, MessagesSquare, Bell, FilePen, LogOut, Bolt, HelpCircle } from 'lucide-react';

const listMenu = [
  {
    name: "Home Page",
    path: "/",
    icon: <Home size={24} />
  },
  {
    name: "Utilities",
    path: "/utilities",
    icon: <Zap size={24} />
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <CreditCard size={24} />
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: <User size={24} />
  },
  {
    name: "Room Management",
    path: "/room-management",
    icon: <BedDouble size={24} />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <MessagesSquare size={24} />
  },
  {
    name: "Notification",
    path: "/notification",
    icon: <Bell size={24} />
  }
];

const accountList = [
  {
    name: "Profile",
    path: "/profile",
    icon: <FilePen size={24} />
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <Bolt size={24} />
  },
  {
    name: "Logout",
    path: "/profile",
    icon: <LogOut size={24} />
  },
]

const HomePage = () => {
  return (
    <div className="w-full h-auto">
      {/* Sidebar */}
      <div className="w-[250px] h-full py-9 px-6 bg-gradient-to-b from-[#3C4448] to-[#202021]">
        <div className="mb-14 flex items-center gap-3">
          <Home size={40} />
          <div>
            <h1 className="text-white text-xl font-bold">VILAHOUSE</h1>
            <p className="text-[#D0E6EA] text-sm">Ten phong tro</p>
          </div>
        </div>
        {/* Menu */}
        <nav className="flex flex-col gap-2 items-start mb-5">
          {listMenu.map((item) => (
            <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>
        
        <h4 className="uppercase text-white text-xs font-bold mb-4">Account</h4>
        <nav className="flex flex-col gap-2 items-start mb-8">
          {accountList.map((item) => (
            <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>

        <div className="bg-[#F6F6BD] w-full rounded-[20px] p-6">
          <div className="w-9 h-9 flex items-center justify-center bg-[#3C4448] rounded-md text-[#F6F6BD] mb-5">
            <HelpCircle color='#F6F6BD' size={24} />
          </div>
          <p className="text-[#3C4448] text-xs font-medium">Need help?</p>
          <p className="text-[#3C4448] text-sm mb-3">Contact us</p>
          <button className="w-full bg-[#3C4448] text-[#F6F6BD]">Contact</button>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-[calc(100% - 120px)] bg-white"></div>
    </div>
  )
}

export default HomePage