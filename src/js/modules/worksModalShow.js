////////    WORKS IMAGES SHOW IN CREATED MODAL  (L 9)     ///////////

function worksShowInModal( ) {

    console.log('worksShowInModal.js Script Connedted...');

    // FOR ADD EvntListn 'click'
    const worksSection = document.querySelector('.works');

    // CREATE MODAL -> APPEND IT TO MAIN SECTION -> FLEX INLINE STYLES
    const createdWorkModal = document.createElement('div');
    createdWorkModal.classList.add('popup');
    worksSection.appendChild(createdWorkModal); // !!! APPEND IN MAIN SECTION

    // Inline Styles
    createdWorkModal.style.justifyContent = 'center'; // By Horizontal
    createdWorkModal.style.alignItems = 'center';     // By Wertical
    // .justifyContent & .alignItems NEEDS .display 'flex'
    createdWorkModal.style.display = 'none'; // Initaly Hidden / Invisible

    const crtedWorkImg = document.createElement('img');
    createdWorkModal.appendChild(crtedWorkImg);

    // Evnt Delegating -> click Somwere inside of Works Section
    worksSection.addEventListener( 'click' , (e) => {
        e.preventDefault();
        const target = e.target;

        // Click on Some Image (of 8)
        if( target && target.classList.contains('preview') ) {
            
            createdWorkModal.style.display = 'flex'; // Make It Visible
            const path = target.parentNode.getAttribute('href');
            crtedWorkImg.setAttribute('src', path);

            document.body.style.overflow = 'hidden'; // Scroll Off
        }
        // Click OutSide of Modal
        if( target && target.matches('div.popup') ) {
            createdWorkModal.style.display = 'none';
            document.body.style.overflow = ''; // Scroll On
        }
    })
}

export default worksShowInModal;
