const text = {
    remove: (t, key) => {
        return t.replaceAll(key, '').replaceAll('  ', ' ');
    }
}

export default text;