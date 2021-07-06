import './slider';
import modalWind from './modules/modalWind';
import tabs from './modules/tabs';
import formsPostOnServ from './modules/formsPostOnServ';
import makeObjFromCalculModals from './modules/makeObjFromModals';
import timer from './modules/timer';
import worksShowInModal from './modules/worksModalShow';




window.addEventListener( 'DOMContentLoaded' , () => {

    console.log("main.js Connected...");

    let balconStateObj = {};

    // MODULE FUNCTIONS CALLING
    modalWind();

    tabs( '.glazing_slider' , '.glazing_block' , '.glazing_content' , 'active' ); // !!!  LayOut Understanging
    tabs( '.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click' ); // !!!
    // CALCULATOR POPUP  (L 6)
    tabs( '.balcon_icons' , '.balcon_icons_img' , '.big_img > img' , 'do_image_more', 'inline-block' ); // !!!

    makeObjFromCalculModals(balconStateObj);
    formsPostOnServ(balconStateObj);  
    
    timer('#days', '#hours', '#minutes', '#seconds', '2021-11-31');

    worksShowInModal();

}) // window.addEventListener( 'DOMContentLoaded' END

