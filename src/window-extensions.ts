// window-extensions.ts
declare global {
    interface Window {
        CESIUM_BASE_URL: string;
    }
}
  
export {}; // This is necessary to make it a module with isolated scope
  