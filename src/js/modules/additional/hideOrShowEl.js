
// Hide  &  Show  El/Elms With classList.add() / classList.remove()
function hideElmsWithClass(elmsArr, cssClass) {
    elmsArr.forEach( el => {
        el.classList.remove(cssClass)
    });  
}
function showElWithClass(elmsArr, cssClass ,idx = 0) {
    elmsArr[idx].classList.add(cssClass);
}


// Hide/Show  El/Elms  With:  style.display = 'none'/'block'
function hideElmsWithStyleDisplay(elmsArr) {
    elmsArr.forEach( el => {
        el.style.display = 'none';
    });  
}
function showElWithStyleDisplay(elmsArr, displayType, idx = 0 ) {
    elmsArr[idx].style.display = displayType; // !!! Syntax  &  !!! display Understanding
}

export {hideElmsWithClass , showElWithClass};
export {hideElmsWithStyleDisplay, showElWithStyleDisplay};