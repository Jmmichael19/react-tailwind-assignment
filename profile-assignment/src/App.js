import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import ProfileContent from "./ProfileContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
