import utils from './utils/index.js';

const el = document.getElementById('test');
window.addEventListener('scroll', () => {
    console.log(utils.elementInViewport(el))
});

console.log({
    contains: utils.classes.contains(el, ['test', 'demo']),
    textRemove: utils.text.remove('Test için test yapan testçiler test yaptılar', 'test')
});
