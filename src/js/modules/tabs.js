////////    TABS  (L 4)     ///////////
import {hideElmsWithClass, showElWithClass} from './additional/hideOrShowEl';
import {hideElmsWithStyleDisplay, showElWithStyleDisplay} from './additional/hideOrShowEl';


const tabs = ( tabsParSel, tabsSel, contentSel, activeClass, displayType = 'block') => {
    console.log("tabs.js Connected...");

    const tabsPar = document.querySelector(tabsParSel),
          tabsArr = document.querySelectorAll(tabsSel),
          contentArr = document.querySelectorAll(contentSel);
    //

    // Hide/Show  El/Elms  With:  style.display = 'none'/'block'
    hideElmsWithStyleDisplay(contentArr);
    showElWithStyleDisplay(contentArr , displayType);
    // Hide  &  Show  El/Elms With classList.add() / classList.remove()
    hideElmsWithClass(tabsArr, activeClass);
    showElWithClass(tabsArr, activeClass);


    // PARENT EVENT LISTENER DELEGATING
    tabsPar.addEventListener( 'click' , (e) => {
        const target = e.target;
        if( target && target.classList.contains(tabsSel.replace( /\./ , '' )) || // !!! Understanding
            target.parentNode.classList.contains(tabsSel.replace( /\./ , '' ))) { // !!! Understanding
                tabsArr.forEach( (tab, idx) => { // !!! Syntax
                    if( target == tab || target.parentNode == tab) {

                        hideElmsWithStyleDisplay(contentArr);
                        hideElmsWithClass(tabsArr, activeClass);
                        showElWithStyleDisplay(contentArr, displayType, idx );
                        showElWithClass(tabsArr, activeClass, idx);
                    }
                });
            }
    });
};

export default tabs;