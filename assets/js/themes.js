const theme = document.querySelector('#set_theme');

theme.addEventListener('input', () => {
    // console.log(theme.value);
    if(theme.value == 1) {
        changeOnThemeOne();
    }
    
    if(theme.value == 2) {
        changeOnThemeTwo();
    }
    
    if(theme.value == 3) {
        changeOnThemeThree();
    }
});


// THEME 01 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

const changeOnThemeOne = () => {
    const body = document.querySelector('body');
    body.classList.add('bg-1');
    body.classList.remove('bg-2');
    body.classList.remove('bg-3');

    const title = document.querySelector('.title');
    title.classList.add('title');
    title.classList.remove('title-2');
    title.classList.remove('title-3');

    const display = document.querySelector('.display');
    display.classList.add('display');
    display.classList.remove('display-bg-2');
    display.classList.remove('display-bg-3');

    const btnContainer = document.querySelector('.btn-container');
    btnContainer.classList.add('btn-container');
    btnContainer.classList.remove('btn-container-3');
    btnContainer.classList.remove('btn-container-2');

    const btn = document.querySelectorAll('.btn');
    btn.forEach((bt) => {
        bt.classList.add('btn');
        bt.classList.remove('btn-2');
        bt.classList.remove('btn-3');
    });

    const del = document.querySelector('.del');
    del.classList.add('del');
    del.classList.remove('del-2');
    del.classList.remove('del-3');

    const reset = document.querySelector('.reset');
    reset.classList.add('reset');
    reset.classList.remove('reset-2');
    reset.classList.remove('reset-3');

    const equals = document.querySelector('.equals');
    equals.classList.add('equals');
    equals.classList.remove('equals-2');
    equals.classList.remove('equals-3');

    const attribution = document.querySelector('.attribution');
    attribution.classList.add('attribution');
    attribution.classList.remove('attribution-2');
    attribution.classList.remove('attribution-3');

};

// THEME 02 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

const changeOnThemeTwo = () => {
    const body = document.querySelector('body');
    body.classList.add('bg-2');
    body.classList.remove('bg-1');
    body.classList.remove('bg-3');

    const title = document.querySelector('.title');
    setClass(title, 'title-2',  'title-3');

    const display = document.querySelector('.display');
    setClass(display, 'display-bg-2', 'display-bg-3');
    
    const btnContainer = document.querySelector('.btn-container');
    setClass(btnContainer, 'btn-container-2', 'btn-container-3');

    const btn = document.querySelectorAll('.btn');
    btn.forEach(bt => setClass(bt, 'btn-2', 'btn-3'));

    const del = document.querySelector('.del');
    setClass(del, 'del-2', 'del-3');

    const reset = document.querySelector('.reset');
    setClass(reset, 'reset-2', 'reset-3');
 
    const equals = document.querySelector('.equals');
    setClass(equals, 'equals-2', 'equals-3');

    const attribution = document.querySelector('.attribution');
    setClass(attribution, 'attribution-2', 'attribution-3');

};


// THEME 03 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

const changeOnThemeThree = () => {
    const body = document.querySelector('body');
    body.classList.add('bg-3');
    body.classList.remove('bg-1');
    body.classList.remove('bg-2');

    const title = document.querySelector('.title');
    setClass(title, 'title-3',  'title-2');

    const display = document.querySelector('.display');
    setClass(display, 'display-bg-3', 'display-bg-2');

    const btnContainer = document.querySelector('.btn-container');
    setClass(btnContainer, 'btn-container-3', 'btn-container-2');

    const btn = document.querySelectorAll('.btn');
    btn.forEach(bt => setClass(bt, 'btn-3', 'btn-2'));

    const del = document.querySelector('.del');
    setClass(del, 'del-3', 'del-2');

    const reset = document.querySelector('.reset');
    setClass(reset, 'reset-3', 'reset-2');

    const equals = document.querySelector('.equals');
    setClass(equals, 'equals-3', 'equals-2');

    const attribution = document.querySelector('.attribution');
    setClass(attribution, 'attribution-3', 'attribution-2');
  
};

const setClass = (element, classOn, classOff) => {
    element.classList.add(classOn);
    element.classList.remove(classOff);
};
