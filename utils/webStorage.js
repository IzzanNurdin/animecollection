export function setSessionStorage(key, value) {
  window.sessionStorage.setItem(key, value);
}

export function getSessionStorage(key) {
  return window.sessionStorage.getItem(key);
}

export function removeSessionStorage(key) {
  window.sessionStorage.removeItem(key);
}

export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function removeLocalStorage(key) {
  window.localStorage.removeItem(key);
}
