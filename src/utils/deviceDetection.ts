
// Device detection utility

export const isIOS = (): boolean => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

export const isAndroid = (): boolean => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android/.test(userAgent);
};

export const getAppStoreLink = (): string => {
  if (isIOS()) {
    return "https://apps.apple.com/us/app/direito-premium/id6451451647";
  } else {
    // Default to Android or fallback to Android if device is not recognized
    return "https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0";
  }
};
