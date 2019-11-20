export const localStorageFormatted = {
  get(name) {
    return JSON.parse(localStorage.getItem(name));
  },
  set(name, value) {
    localStorage.setItem(
      name,
      typeof value === 'string' ? value : JSON.stringify(value)
    );
  },
};
