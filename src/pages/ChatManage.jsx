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

const ChatManage = () => {
  return (
    <div className="w-full h-auto">
      {/* Header */}

      <header className="w-[1099px] h-[41px] absolute justify-between items-end inline-flex mt-9" style={{ marginLeft : "300px" }}>
  <div className="w-[206px] h-[41px] relative">
    <div className="w-[41px] h-[41px] left-0 top-0 absolute bg-yellow-100 rounded-full" />
    <div className="left-[16px] top-[8px] absolute text-zinc-700 text-xl font-semibold font-['Inter']">Chats Management</div>
  </div>
  <div className="justify-start items-center gap-10 flex">
    <div className="h-10 p-2 bg-white rounded-lg border border-stone-200 justify-start items-center gap-2 flex">
      <div className="w-6 h-6 relative" />
      <div className="text-center text-gray-500 text-xs font-semibold font-['Inter']">Search</div>
    </div>
    <div className="justify-start items-center gap-3 flex">
      <div className="flex-col justify-start items-end inline-flex">
        <div className="text-center text-zinc-700 text-sm font-semibold font-['Inter']">Hello, Admin213</div>
        <div className="text-center text-gray-500 text-[10px] font-semibold font-['Inter']">Host</div>
      </div>
      <img className="w-10 h-10 rounded-full border-2 border-slate-200" src="https://via.placeholder.com/40x40" />
    </div> 

    
  </div>
</header>

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

      {/* Chat List */}
      <chatlist className="w-[320px] h-[600px] bg-white rounded-xl border-stone-200 border-2 border-brown-500 absolute items-end mt-300 top-24" style={{ marginLeft: "300px" }}>
<div className="div font-bold ml-5 mt-5 mb-2">Chat Box</div>

<textarea className="text-zinc-700   text-balance text-sl ml-5 mt-5 w-[280px] h-[25px] pl-[25px] mb-1 rounded-lg bg-slate-100 items-start gap-5 border border-brown font-semibold font-['Inter']" placeholder="Search"></textarea>


<div className="ml-5 mt-5 rounded-sm w-[280px] h-[60px] pl-[25px] pr-12 py-2.5 bg-slate-200 justify-start items-start gap-5 inline-flex border border-blue-700 hover:bg-blue-600">
    <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-zinc-300 rounded-full" />
        <div className="left-[12px] top-[11px] absolute text-black text-sm font-medium font-['Inter']">R1</div>
    </div>
  
    <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-neutral-800 text-sm font-medium font-['Inter']">Room 101</div>
        <div className="text-neutral-800 text-sm font-normal font-['Inter']">Van Anh: xin chao ban</div>
    </div>
</div>
  
<div className="ml-5 mt-2 w-[280px] h-[60px] pl-[25px] pr-12 py-2.5 bg-white justify-start items-start gap-5 inline-flex border border-brown hover:bg-blue-100">
    <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-300 rounded-full" />
        <div className="left-[12px] top-[11px] absolute text-black text-sm font-medium font-['Inter']">R1</div>
    </div>
    <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-zinc-700 text-sm font-medium font-['Inter']">Room 101</div>
        <div className="text-zinc-700 text-sm font-normal font-['Inter']">Van Anh: xin chao ban</div>
    </div>
</div>

<div className="ml-5 mt-2 w-[280px] h-[60px] pl-[25px] pr-12 py-2.5 bg-white justify-start items-start gap-5 inline-flex border border-brown hover:bg-blue-100">
    <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-300 rounded-full" />
        <div className="left-[12px] top-[11px] absolute text-black text-sm font-medium font-['Inter']">R1</div>
    </div>
    <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-zinc-700 text-sm font-medium font-['Inter']">Room 101</div>
        <div className="text-zinc-700 text-sm font-normal font-['Inter']">Van Anh: xin chao ban</div>
    </div>
</div>
 
<div className="ml-5 mt-2 w-[280px] h-[60px] pl-[25px] pr-12 py-2.5 bg-white justify-start items-start gap-5 inline-flex border border-brown hover:bg-blue-100">
    <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-300 rounded-full" />
        <div className="left-[12px] top-[11px] absolute text-black text-sm font-medium font-['Inter']">R1</div>
    </div>
    <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-zinc-700 text-sm font-medium font-['Inter']">Room 101</div>
        <div className="text-zinc-700 text-sm font-normal font-['Inter']">Van Anh: xin chao ban</div>
    </div>
</div>

<div className="ml-5 mt-2 w-[280px] h-[60px] pl-[25px] pr-12 py-2.5 bg-white justify-start items-start gap-5 inline-flex border border-brown hover:bg-blue-100">
    <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-300 rounded-full" />
        <div className="left-[12px] top-[11px] absolute text-black text-sm font-medium font-['Inter']">R1</div>
    </div>
    <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-zinc-700 text-sm font-medium font-['Inter']">Room 101</div>
        <div className="text-zinc-700 text-sm font-normal font-['Inter']">Van Anh: xin chao ban</div>
    </div>
    
</div>

      
</chatlist> 

      {/* Main Content */}
      <div className="w-[calc(100% - 120px)] bg-white">
      <div className="w-[790px] h-[722px] mt-5 bg-white rounded-[10px] top-20 right-11 mr-5  float-left absolute">
      <div className="iframe-container">
      <iframe
        title="Dialogflow Chatbot"
        width="788"
        height="630"
        src="https://console.dialogflow.com/api-client/demo/embedded/72a34a9d-7097-499f-9fa4-601e437f3cd7"
      ></iframe>
    </div> 
</div>
      
    </div>
    </div>

  )
}

export default ChatManage