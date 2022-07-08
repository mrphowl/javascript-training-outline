/**
 * JS-201: The DOM
 * 
 * Working wih Classes
 */
/* eslint no-console: 0 */

const pic = document.querySelector('.nice');
console.log('--img.nice', pic.classList);
pic.classList.add('open');
console.log('--img.nice add open', pic.classList);
pic.classList.remove('cool');
console.log('--img.nice rem cool', pic.classList);
pic.classList.toggle('round');
console.log('--img.nice add round', pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

const fxClass = [
    'round',
    'rotate-1turn',
    'rotate-20deg',
    'rotate-2kdeg',
    'rotate1-scale2'
];

/**
 * Pick a class from fxClass and return it with the last chosen class.
 *
 * Yey, private variable!
 * 
 * @returns string
 */
function randomEffects() {
    let currentEffect = '';

    return function applyNew() {
        let newEffect = '';
        // Using do-while to prevent the same choice as the currentEffect
        do {
            // pick any one item from fxClass as the new effect
            const idx = Math.floor(Math.random() * fxClass.length);
            newEffect = fxClass[idx];
        } while(newEffect === currentEffect);
        // we will return the old and new class after we...
        const effects = [currentEffect, newEffect];
        // ...set newEffect as the new currentEffect
        currentEffect = newEffect;
        return effects;
    };
}

const effect = randomEffects();

function toggleEffect() {
    let [oldClass, newCLass] = effect();

    // use the contains method to check if the element has a specific class
    if(oldClass && pic.classList.contains(oldClass)) {
        // we have a class to remove from pic
        pic.classList.remove(oldClass);
    }

    pic.classList.toggle(newCLass);
}

function removeAllEffects() {
    pic.classList.remove(...fxClass);
}

// button controls
const randomBtn = document.querySelector('.btn-random');
randomBtn.addEventListener('click', toggleEffect);

const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', removeAllEffects);