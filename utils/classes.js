const classes = {
    list: (classNames) => {
        if (typeof classNames === 'string') {
            classNames = classNames.split(' ');
        }

        if (!Array.isArray(classNames)) {
            return
        }

        return classNames;
    },
    add: (el, classNames) => {
        classes.list(classNames)?.forEach((c) => {
            el.classList.add(c);
        });
    },
    remove: (el, classNames) => {
        classes.list(classNames)?.forEach((c) => {
            el.classList.remove(c);
        });
    },
    contains: (el, classNames) => {
        return classes.list(classNames)?.map((c) => {
            const res = {};
            res[c] = el.classList.contains(c)
            return res
        });
    }
};

export default classes;