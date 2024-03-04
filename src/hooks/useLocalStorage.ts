import { useState } from 'react';

// Define a custom hook for managing state in local storage
const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, (value: T) => void] => {
  // Get the initial value from local storage, if available
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  // Initialize state with the initial value
  const [value, setValue] = useState<T>(initial);

  // Update local storage when the state changes
  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateLocalStorage];
};

export default useLocalStorage;
