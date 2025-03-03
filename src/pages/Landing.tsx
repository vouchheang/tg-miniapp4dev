import { useState } from "react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home page",
    "Branch",
    "Membership plan",
    "Membership info",
    "Promotions",
    "Coupons",
    "Workout plan",
  ];

  return (
    <div className="bg-indigo-200 min-h-screen max-w-md mx-auto">
      {/* Main Card */}
      <div className="bg-white mx-4 rounded-lg overflow-hidden flex flex-col min-h-screen">
        {/* Hero Section with Background Elements */}
        <div className="relative px-6 pt-6 pb-4 flex-grow">
          {/* Background Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/4" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full translate-x-1/4" />
          
          {/* Header with Menu */}
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h1 className="text-green-800 text-4xl font-bold leading-tight">
                LET'S<br />WORK<br />OUT
              </h1>
              <p className="text-green-800 mt-3 text-lg">Together</p>
            </div>
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
              <div className="absolute top-16 right-4 bg-green-800 text-white rounded-md shadow-lg w-48 z-20">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 hover:bg-green-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Illustration Section */}
          <img src="./public/image.png" alt="Workout illustration" className="mt-8" />
        </div>

        {/* Call To Action Button */}
        <div className="px-4 pb-4">
          <button className="bg-green-700 text-white w-full py-3 rounded-md font-medium">
            Claim Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;  