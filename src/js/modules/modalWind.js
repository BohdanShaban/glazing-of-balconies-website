////////    MODAL  WINDOWS  (L 3)     ///////////

const modalWind = () => {
    console.log("modalWind.js Connected...");

    // OPEN / CLOSE  Modal Wind
    const openModalWind = (modal) => {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');  // BootStrap class
        //document.body.style.overflow = 'hidden';
    }
    const closeModalWind = (modal) => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // BootStrap class
        //document.body.style.overflow = '';
    }
    const showModalByTime = ( modalSelector, time ) => {
        const modal   = document.querySelector( modalSelector);
        setTimeout( () => { openModalWind(modal) }, time );
    }

    
    function bindModalWind( trigersSelector, modalSelector, closeSelector, outsideClickClose = true  ) {

        const openTrigs = document.querySelectorAll( trigersSelector),
              modal   = document.querySelector( modalSelector),
              closeTrigs   = document.querySelector( closeSelector ),
              // CLOSE ALL MODAL WINDS
              allModal = document.querySelectorAll('[data-modal]');
        //
        
        openTrigs.forEach( triger => {
            triger.addEventListener( 'click' , (e) => {
                if (e.target ) {  e.preventDefault(); } // ???  e.preventDefault()

                // CLOSE ALL MODAL WINDS
                //allModal.forEach( window => { window.style.display = 'none'; })
                allModal.forEach( window => { closeModalWind(window)});

    
                openModalWind(modal);
            })
        })

        closeTrigs.addEventListener( 'click' , (e) => {
            // ???
            if (e.target ) {  e.preventDefault(); } // ???  e.preventDefault()
            // CLOSE ALL MODAL WINDS
            //allModal.forEach( window => { window.style.display = 'none'; })
            allModal.forEach( window => { closeModalWind(window)});

            closeModalWind(modal);
        })

        // By Click Outside of Mod Win  ->  Close It
        modal.addEventListener( 'click' , (e) => {
            if (e.target === modal && outsideClickClose) { 
                closeModalWind(modal); 
                // CLOSE ALL MODAL WINDS
                //allModal.forEach( window => { window.style.display = 'none'; })
                allModal.forEach( window => { closeModalWind(window)});
            }
        })
        
    }
    
    bindModalWind( '.popup_engineer_btn',  '.popup_engineer',  '.popup_engineer .popup_close' );
    bindModalWind( '.phone_link',  '.popup',  '.popup .popup_close' );
    //showModalByTime( '.popup',  60000 );

    // CALCULATOR POPUP  (L 6)
    bindModalWind( '.popup_calc_btn',  '.popup_calc',  '.popup_calc_close' ); // popup_calc_profile Opens
    bindModalWind( '.popup_calc_button',  '.popup_calc_profile',  '.popup_calc_profile_close', false ); // popup_calc_end 
    bindModalWind( '.popup_calc_profile_button',  '.popup_calc_end',  '.popup_calc_end_close', false );
}

export default modalWind;