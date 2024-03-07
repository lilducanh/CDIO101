import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/owner/HomePage";
import AuthPage from "./pages/AuthPage";
import NotificationManage from "./pages/NotificationManage";  
import ChatManage from "./pages/ChatManage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/notification" element={<NotificationManage />} />
        <Route path="/chat" element ={<ChatManage />} />
      </Routes>
    </>
  )
}

export default App
