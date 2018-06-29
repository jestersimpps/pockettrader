/*! Built with http://stenciljs.com */
const { h } = window.App;

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    const classObj = {};
    getClassList(classes).forEach(classString => {
        classObj[classString] = true;
        if (mode) {
            classObj[`${classString}-${mode}`] = true;
            if (color) {
                classObj[`${classString}-${color}`] = true;
                classObj[`${classString}-${mode}-${color}`] = true;
            }
        }
    });
    return classObj;
}
/**
 * Get the classes from a class list and return them as an object
 */
function getElementClassMap(classList) {
    const classObj = {};
    for (let i = 0; i < classList.length; i++) {
        classObj[classList[i]] = true;
    }
    return classObj;
}
/**
 * Get the classes based on the button type
 * e.g. alert-button, action-sheet-button
 */
function getButtonClassMap(buttonType, mode) {
    if (!buttonType) {
        return {};
    }
    return {
        [buttonType]: true,
        [`${buttonType}-${mode}`]: true
    };
}
function getClassList(classes) {
    if (classes) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
}
async function openURL(win, url, ev, direction) {
    if (url && url[0] !== '#' && url.indexOf('://') === -1) {
        const router = win.document.querySelector('ion-router');
        if (router) {
            ev && ev.preventDefault();
            await router.componentOnReady();
            return router.push(url, direction);
        }
    }
    return Promise.resolve();
}

export { createThemedClasses as a, getElementClassMap as b, openURL as c, getButtonClassMap as d };
