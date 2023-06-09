import { TFilterParams } from '../OneSection/types';

export function getNewRoomsParams(
  currentParams: URLSearchParams,
  btn: string,
): URLSearchParams {
  const key = 'rooms';
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
    if (
      searchParams.has(`${params[i]}_min`) ||
      searchParams.has(`${params[i]}_max`)
    ) {
      return true;
    }
  }

  return false;
}

export function getTextForShowBtn(n: number): string {
  if (n === 0) return `Нет предложений`;

  // предложение - 1, 21, 31, ... 101, ...
  if (n % 10 === 1 && n % 100 !== 11) return `Показать ${n} предложение`;

  // предложения - 2-4, 22-24, ..., 102-104, ...
  if (n % 10 >= 2 && n % 10 <= 4) return `Показать ${n} предложения`;

  // other cases: предложений - 5-20, 25-30, ..., 100, ...
  return `Показать ${n} предложений`;
}

export function getWithoutSpaces(str: string): string {
  return str
    .split('')
    .filter((el) => el !== ' ')
    .join('');
}
