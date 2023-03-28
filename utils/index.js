"use strict";

import cookie from './cookie.js';
import classes from './classes.js';
import elementInViewport from './elementInViewport.js';
import text from './text.js';

const isDevice = (breakpoint) => {
    return window.matchMedia(`(min-width: ${breakpoint})`).matches;
}

const uniquify = (array) => {
    const obj = {};

    array.forEach((a) => {
        obj[`${a}`] = a;
    });

    return Object.values(obj);
};

const numbersByLang = {
  ar: "٠١٢٣٤٥٦٧٨٩".split(""),
  en: "0123456789".split(""),
  numberReg: /[^(\d*.,)?\d+$]/g,
};

const arNumberConverter = (strNum: string) => {
  const { ar, en, numberReg } = numbersByLang;
  return strNum.replace(numberReg, (x) => en[ar.indexOf(x)]).replace(numberReg, "");
};

const objectMerger = (o1: any, o2: any) => {
  const obj = { ...o1, ...o2 };

  Object.keys(o1).forEach((k1: string) => {
    Object.keys(o2).forEach((k2: string) => {
      if (k1 === k2) {
        if (typeof o1[k1] === "object")
          obj[k1] = {
            ...o1[k1],
            ...o2[k1],
          };
      }
    });
  });

  return obj;
};

const utils = {
    text,
    cookie,
    classes,
    isDevice,
    uniquify,
    elementInViewport,
    arNumberConverter,
    objectMerger
}

export default utils;
