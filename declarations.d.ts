interface TawkAPI {
  // You can add methods and properties of Tawk_API here
  // For example:
  // load: (tawkKey: string, ...args: any[]) => void;
  setAttributes: (data: any) => void;
  addEvent: (eventName: string, data: any) => void;
}

declare global {
  interface Window {
    Tawk_API: TawkAPI;
  }
}
