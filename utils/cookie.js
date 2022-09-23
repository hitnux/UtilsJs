const cookie = {
    get: (key, decoded = true) => {
        var result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie);
        if (result)
            return decoded ? decodeURIComponent(result[1]) : result[1];
        return null;
    },
    set: (key, value, options) => {
        if (arguments.length > 1 && String(value) !== "[object Object]") {
            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=',
                options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }
    },
    remove: (key) => {
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

export default cookie;