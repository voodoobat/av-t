export const useStorage = (key, data) => {
  if (data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  return JSON.parse(localStorage.getItem(key))
}
