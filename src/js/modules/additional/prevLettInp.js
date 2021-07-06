 // PREVENT INPUT LETTERS IN PHONE FIELD

const prevLettInp = (elArrSelector) => {

    const elArr = document.querySelectorAll(elArrSelector);

    elArr.forEach( inptField => {
        inptField.addEventListener('input' , () => {
            inptField.value = inptField.value.replace( /\D/ , '' );
        })  
    })
}

export default prevLettInp;