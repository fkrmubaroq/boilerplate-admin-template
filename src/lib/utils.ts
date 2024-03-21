import classNames from "classnames";
export function cn(...className: classNames.ArgumentArray) {
  return classNames(className);
}


export function sleep(timeout: number) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function convertObjToDataSelection(obj: Record<string | number, string>, swap = false) {
  return Object.keys(obj).map(key => ({ id: swap ? obj[key] : key, text: swap ? key : obj[key] }));
}
export function convertArrToDataSelection(arr: string[]) {
  return arr.map(item => ({ id: item, text: item }));
}


export function copyToClipboard(text:string) {
  const elInput = document.createElement("input");
  elInput.id = "copy-clipboard";
  elInput.value = text;

  document.body.append(elInput);
  const copyText = document.getElementById(elInput.id) as HTMLInputElement; 
  if (!copyText) return;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById(elInput.id)?.remove();
  return copyText.value;

} 


export const getCumulativePathSegments = (path: string) => {
  return path
    .split("/")
    .filter(Boolean) // Drop empty strings caused by the splitting
    .reduce(
      (segments, segment) => {
        const previous = segments[segments.length - 1];
        segments.push(`${previous}${segment}/`);
        return segments;
      },
      ["/"]
    )
};

export function downloadFileUrl(url: string, fileName:string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function selectedFileName(inputEl: HTMLInputElement) {
  const split = inputEl.value.split(".");
  const endRangeFileName = (split: string[]) => {
    let count = 0;
    for (let i = 0; i < split.length - 1; i++) {
      count += split[i].length;
    }
    return count;
  }
  const end = endRangeFileName(split);
  inputEl.focus();
  inputEl.setSelectionRange(0,end)
  
}


export function objectDataToQueryBind({
  data,
  allValues,
  separator,
}: {
  data: any;
  allValues?: string;
  separator: string;
}) {
  let query = "";
  Object.keys(data).forEach((key, i) => {
    if (i === Object.keys(data).length - 1) {
      query += ` ${key}=${allValues ? allValues : `'${data[key]}'`}`;
      return;
    }
    query += `${key}=${allValues ? allValues : `'${data[key]}'`} ${
      separator || ","
    } `;
  });
  return query;
}



export function printString(str: string, count: number, separator: string = "?") {
  let tmp = "";
  for (let x = 1; x <= count; x++) {
    tmp += `${str} ${x === count ? "" : separator} `;
  }
  return tmp;
}


export const debounce = (fn: Function, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
};