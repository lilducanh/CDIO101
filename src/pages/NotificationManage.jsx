import React, { useState } from 'react';
import { Home, Zap, CreditCard, User, BedDouble, MessagesSquare, Bell, FilePen, LogOut, Bolt, HelpCircle } from 'lucide-react';
import avatar from '../img/avatar.png';
import bookmark from '../img/bookmark.png';
import edit from '../img/edit.png';
import remove from '../img/remove.png';
import book from '../img/book.png';

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
];

const NotificationManage = () => {
  const [newNotification, setNewNotification] = useState('');
  
  const [notificationList, setNotificationList] = useState([
    {
      user: "Nguyen Duc Anh",
      time: "12:40AM",
      date: "Feb 13 2024",
      content: "Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder."
    },
    {
      user: "Nguyen Duc Anh",
      time: "12:40AM",
      date: "Feb 13 2024",
      content: "Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder."
    },
  ]);

  const [inputError, setInputError] = useState(false);

  const handleSendClick = () => {
    if (!newNotification.trim()) {
      setInputError(true);
      return; 
    }

    const newNotificationItem = {
      user: "Duc Anh",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      content: newNotification
    };

    setNotificationList((prevList) => [ newNotificationItem,...prevList]);
    setNewNotification(''); // nhap xong roi se xoa chuoi rong
    setInputError(false);
  };
  const handleRemoveClick = (index) => {
    const updatedNotificationList = [...notificationList];
    updatedNotificationList.splice(index,1);
    setNotificationList(updatedNotificationList);
  };
  return (
    <div className="w-full h-auto df">
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
      <div className="w-[calc(100% - 120px)] bg-white container">
        {/* Header Notification */}
        <div className="header_ntf">
          <div className="header_ntf_logo">
            Notification Management
          </div>
          <div className="header_ntf_info">
            <div className="header_ntf_search">
              <input type="text" placeholder='&#128269; Search' style={{ '::placeholder': { color: 'gray' } }} />
            </div>
            <div className="header_ntf_avatar">
              <div className="header_ntf_name">
                Hello, Admin213
                <p>Host</p>
              </div>
              <div className="header_ntf_img">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="wrapper">
          <div className="list">
            <div className="noti_content">
              <p>Notification</p>
              <div className="create">
                <div className="create_title">
                  Create new notification
                </div>
                <div className="create_input">
                  <textarea
                    value={newNotification}
                    onChange={(e) => setNewNotification(e.target.value)}
                    placeholder='Type your message here'
                    rows='4'
                    cols='50'
                  ></textarea>
                </div>
                <div className="create_btn">
                  <p>
                    This notification will be sent to all users
                  </p>
                  <div className="create_btn_send" onClick={handleSendClick}>
                    Send
                  </div>
                </div>
                {inputError && (
                  <p className="err">Please enter a valid notification.</p>
                )}
              </div>
            </div>
            <h2>
              Notification List
            </h2>
            {notificationList.map((item, index) => (
              <div key={index} className="list_content">
                <div className="list_box">
                  <div className="list_content_title">
                    <img src={bookmark} alt="" />
                  </div>
                  <div className="list_content_title">
                   {item.user}
                  </div>
                  <div className="list_content_title">
                  {item.time}
                  </div>
                  <div className="list_content_title">
                  {item.date}
                  </div>
                  <div className="list_content_title">
                    <img src={edit} alt="" />
                  </div>
                </div>
                <div className="list_box_title">
                  <p>{item.content}</p>
                  <img src={remove} alt="" onClick={() => handleRemoveClick(index)}/>
                </div>
              </div>
            ))}
          </div>
          <div className="team">
            <div className="team_title">
              <img src={book} alt="" />
              <p>TERMS AND RULE</p>
            </div>
            <div className="team_des">
              <div className="team_box"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="team_des">
              <div className="team_box"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="team_des">
              <div className="team_box"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="team_des">
              <div className="team_box"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationManage;
