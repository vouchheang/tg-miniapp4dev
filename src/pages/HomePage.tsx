import { useEffect } from "react";

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

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.expand();
    }
  }, []);

  const sendMessage = () => {
    if (initData) {
      window.Telegram.WebApp.sendData(initData || "Unable to get initData!");
    } else {
      console.error("Telegram WebApp not found.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
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
        className="mt-4 py-2 px-4 bg-amber-400 hover:bg-amber-600 text-gray-950 hover:text-white rounded cursor-pointer"
        onClick={sendMessage}
      >
        Send Init Data
      </button>
    </div>
  );
};

export default HomePage;
