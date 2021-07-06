////////    CALCULATOR POPUP  (L 7)     ///////////
import {hideElmsWithClass, showElWithClass} from './additional/hideOrShowEl';
import {hideElmsWithStyleDisplay, showElWithStyleDisplay} from './additional/hideOrShowEl';
import prevLettInp from './additional/prevLettInp';

const makeObjFromCalculModals = (state) => {
    console.log("makeObjFromModals.js Connected...");

    const balconIconsForm = document.querySelectorAll('.balcon_icons_img'),
          balconWidth = document.querySelectorAll('#width'),
          balconHeight = document.querySelectorAll('#height'),
          balconCheckBoxProfile = document.querySelectorAll('.checkbox'),
          balconTypeSelct = document.querySelectorAll('#view_type');
    //
    prevLettInp('#width');
    prevLettInp('#height');

    const bindEventListener = (elmsArr , eventType , keyToCreate) => {
        elmsArr.forEach( (el, idx) => {

            el.addEventListener( eventType , () => {

                switch (el.nodeName) {
                    case 'SPAN' :
                        //console.log('SPAN');
                        
                        state[keyToCreate] = idx;
                        break;

                    case 'INPUT' :
                        //console.log('INPUT');

                        // Which One :  CHECKBOX or INPUT FIELD ???
                        if (el.getAttribute('type') === 'checkbox') {
                            //console.log('CHECK BOX');
                            state[keyToCreate] = el.getAttribute('data-profile');
                            // ???
                            elmsArr.forEach( (box, j) => {
                                box.checked = false;
                                if (idx == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[keyToCreate] = el.value;
                        }
                        break;

                    case 'SELECT' :
                        state[keyToCreate] = el.value;
                        break;
                }

                
    
                console.log(state);
            });
        })
    }

    bindEventListener( balconIconsForm, 'click' , 'balconForm' );
    bindEventListener( balconWidth, 'input' , 'balconWidth' );
    bindEventListener( balconHeight, 'input' , 'balconHeigth' );
    bindEventListener( balconCheckBoxProfile, 'change' , 'balconProfile' );
    bindEventListener( balconTypeSelct, 'change' , 'balconType' );
    
}

export default makeObjFromCalculModals;