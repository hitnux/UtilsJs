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

const utils = {
    text,
    cookie,
    classes,
    isDevice,
    uniquify,
    elementInViewport,
    arNumberConverter
}

export default utils;
