export {}; // Ensures it doesn't interfere with module scope

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData?: string;
        initDataUnsafe: Record<string, any>;
        sendData: (data: string) => void;
        close: () => void;
        expand: () => void;
        isExpanded: boolean;
        showAlert: (message: string) => void;
      };
    };
  }
}
