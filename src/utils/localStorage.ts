export const getLocalStorageItem = (key: string): string | null => {
    try {
      const value = localStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting localStorage item: ${key}`, error);
      return null;
    }
  };
  
  export const setLocalStorageItem = (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage item: ${key}`, error);
    }
  };
  