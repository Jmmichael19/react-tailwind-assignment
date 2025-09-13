import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      <div className="flex items-center gap-4">
        <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white"
        />

        <div>
          <h2 className="font-bold text-lg">John Michael N. Pugales</h2>
          <p>Zone 17, Fatima, Abuno, Iligan CIty</p>
          <p>johnmichaelpugales202300355@email.com</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
