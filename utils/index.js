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

const utils = {
    text,
    cookie,
    classes,
    isDevice,
    uniquify,
    elementInViewport
}

export { cookie, text, classes, isDevice, uniquify, elementInViewport };
export default utils;