export const readStorage = (key, fallback) => {
  if (typeof window === "undefined") return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const writeStorage = (key, value) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(key, JSON.stringify(value));
};

export const toggleInArray = (items, item) =>
  items.includes(item)
    ? items.filter((entry) => entry !== item)
    : [...items, item];
