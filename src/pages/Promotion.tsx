import React from "react";
const promotions = [
  {
    title: "START TRAINING TODAY",
    description:
      "Get 20% OFF on 6-month & 12-month memberships + 10% OFF on personal training sessions.",
    validUntil: "March 31, 2025",
    image: "/hulkgym.jpg", // Ensure this image is in the public folder
  },
  {
    title: "START TRAINING TODAY",
    description:
      "Get 20% OFF on 6-month & 12-month memberships + 10% OFF on personal training sessions.",
    validUntil: "March 31, 2025",
    image: "/hulkgym.jpg",
  },
  {
    title: "START TRAINING TODAY",
    description:
      "Get 20% OFF on 6-month & 12-month memberships + 10% OFF on personal training sessions.",
    validUntil: "March 31, 2025",
    image: "/hulkgym.jpg",
  },
  {
    title: "START TRAINING TODAY",
    description:
      "Get 20% OFF on 6-month & 12-month memberships + 10% OFF on personal training sessions.",
    validUntil: "March 31, 2025",
    image: "/hulkgym.jpg",
  },
];

const Promotion = () => {
  return (
    <div className="bg-white min-h-screen max-w-md mx-auto p-4">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <h1 className="text-green-700 text-4xl font-bold">Promotion</h1>
      </div>

      {/* Promotion Cards */}
      <div className="space-y-4">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="bg-green-500 rounded-xl shadow-md overflow-hidden"
          >
            <div className="flex p-4">
              {/* Text Content */}
              <div className="w-2/3 text-left pr-2">
                <h2 className="text-white text-base font-bold">
                  <span className="block">START</span>
                  <span className="text-green-300 block">TRAINING</span> 
                  <span className="block">TODAY</span>
                </h2>
                <p className="text-white text-xs mt-2 leading-tight">
                  {promo.description}
                </p>
                <div className="mt-3">
                  <span className="text-xs text-white font-light">
                    Valid Until: {promo.validUntil}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="w-1/3">
                <img
                  src={promo.image}
                  alt="Hulk Gym Promotion"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;