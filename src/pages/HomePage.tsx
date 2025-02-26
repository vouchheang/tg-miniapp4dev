import { useEffect, useState } from "react";

interface TelegramWebAppUser {
  id: number;
  first_name: string;
  last_name: string;
  language_code: string;
  allows_write_to_pm: boolean;
  photo_url: string;
}

const HomePage = () => {
  const initData = window.Telegram.WebApp.initData;
  const userInfo: TelegramWebAppUser | undefined =
    window.Telegram.WebApp.initDataUnsafe.user;
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.Telegram.WebApp.expand();
  }, []);

  const sendMessage = () => {
    setLoading(true);
    setMessage("...");

    setTimeout(() => {
      if (initData) {
        const data = initData || "Unable to get initData!";
        window.Telegram.WebApp.sendData(data);
        window.Telegram.WebApp.sendData("Hello From Mini App...");
        navigator.clipboard.writeText(data);
        setMessage(data);
      } else {
        console.error("Telegram WebApp not found.");
        setMessage("Telegram Web App Init Data was not found.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center p-4 h-screen w-screen">
      {userInfo && (
        <img
          src={userInfo.photo_url}
          width={100}
          height={100}
          className="rounded-full"
          alt="Profile Pic"
        />
      )}
      <h1 className="text-xl font-bold">Mini App</h1>
      <button
        disabled={loading}
        className="mt-4 py-2 px-4 bg-amber-400 hover:bg-amber-600 text-gray-950 hover:text-white rounded cursor-pointer"
        onClick={sendMessage}
      >
        {loading ? "Loading..." : "Get Data"}
      </button>
      <span className="py-2 text-gray-500">Get data & copy to clipboard.</span>
      {message && (
        <div className="p-4 m-4 border border-amber-300 rounded-2xl text-white max-w-screen">
          {message}
        </div>
      )}
    </div>
  );
};

export default HomePage;
