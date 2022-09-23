const elementInViewport = (el, ago) => {
    const rect = el.getBoundingClientRect();
    const height = el.offsetHeight;
    const width = el.offsetWidth;

    return rect.top >= -height
        && rect.left >= -width
        && (rect.right <= (window.innerWidth || document.documentElement.clientWidth) + width)
        && (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height)
        && (ago ? rect.top + el.offsetHeight <= ago : true)
};

export default elementInViewport;