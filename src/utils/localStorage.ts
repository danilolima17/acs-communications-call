export const localStorageAvailable = typeof Storage !== 'undefined';

export const LocalStorageKeys = {
  DisplayName: 'DisplayName',
  Theme: 'AzureCommunicationUI_Theme'
};

export const getDisplayNameFromLocalStorage = () => {
  if (!localStorageAvailable) return null;
  return window.localStorage.getItem(LocalStorageKeys.DisplayName);
};

export const saveDisplayNameToLocalStorage = (displayName: string) : void => {
  if (!localStorageAvailable) return;
  window.localStorage.setItem(LocalStorageKeys.DisplayName, displayName);
};

export const getThemeFromLocalStorage = (scopeId: string) : string | null => {
  if (!localStorageAvailable) return null;
  return window.localStorage.getItem(LocalStorageKeys.Theme + '_' + scopeId);
};

export const saveThemeToLocalStorage = (theme: string, scopeId: string) : void => {
  if (!localStorageAvailable) return;
  window.localStorage.setItem(LocalStorageKeys.Theme + '_' + scopeId, theme);
}; 