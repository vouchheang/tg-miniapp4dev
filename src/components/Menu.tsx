import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home page", path: "/" },
    { name: "Branch", path: "/branch" },
    { name: "Membership plan", path: "/membership-plan" },
    { name: "Membership info", path: "/membership-info" },
    { name: "Promotions", path: "/promotion" },
    { name: "Coupons", path: "/coupons" },
    { name: "Workout plan", path: "/workout-plan" },
  ];

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="bg-green-700 text-white p-2 rounded-md focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-green-800 text-white rounded-md shadow-lg w-48 z-20">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false); // Close menu after clicking
              }}
              className="block w-full text-left px-4 py-2 hover:bg-green-700"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
