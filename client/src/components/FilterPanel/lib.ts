import { urlKeyRooms } from '../../const/const';
import { TFilterParams } from '../../types/types';

export function getNewRoomsParams(
  currentParams: URLSearchParams,
  btn: string,
): URLSearchParams {
  const key = urlKeyRooms;
  const urlParams = currentParams;
  const urlParamsValue = urlParams.get(key);

  // if no "rooms" in params
  if (urlParamsValue === null) {
    urlParams.set(key, btn);
    return urlParams;
  }

  // if this btn into "rooms" params
  if (urlParamsValue.includes(btn)) {
    const newParams = urlParamsValue.split('.').filter((el) => el !== btn);
    urlParams.delete(key);
    // if it was not the last param in "rooms"
    if (newParams.length !== 0) {
      urlParams.set(key, newParams.sort().join('.'));
    }
  } else {
    // if this btn no into "rooms" params
    const newParams = urlParamsValue.split('.');
    newParams.push(btn);
    newParams.sort();
    urlParams.set(key, newParams.join('.'));
  }

  return urlParams;
}

export function getNewMinMaxParams(
  currentParams: URLSearchParams,
  newValue: string,
  paramKey: string,
): URLSearchParams {
  const urlParamsObj = currentParams;
  const urlParamsKey = paramKey;

  // if value empty - delete key
  if (newValue === '') {
    urlParamsObj.delete(urlParamsKey);
    return urlParamsObj;
  }

  // in other cases add or update newValue
  urlParamsObj.set(urlParamsKey, newValue);
  return urlParamsObj;
}

export function hasExtendedFilterParams(
  searchParams: URLSearchParams,
  params: TFilterParams[],
): boolean {
  for (let i = 0; i < params.length; i += 1) {
    if (searchParams.has(`${params[i]}_min`) || searchParams.has(`${params[i]}_max`)) {
      return true;
    }
  }

  return false;
}
