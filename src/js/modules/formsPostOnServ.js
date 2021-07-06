////////    FORMS  (L 5)     ///////////
import prevLettInp from './additional/prevLettInp';

const formsPostOnServ = ( balconStateObj ) => {
    console.log("formsPostOnServ.js Connected...");

    const formsArr  = document.querySelectorAll('form'),
          inputsArr = document.querySelectorAll('input'); // Only For:  Clear Form Inputs
    //

    const messages = {
        loading : 'Data is Loading...',
        success : 'Successfully Loaded !',
        error   : 'An Errrrror Ocured !!!!'
    };

    // PREVENT INPUT LETTERS IN PHONE FIELD
    prevLettInp('input[name="user_phone"]'); // !!!

    // POST DATA f()
    const postData = async( url, data) => {
        // Loading Message (On prev Created Div)
        document.querySelector('.messageDiv').textContent = messages.loading;

        let result = await fetch( url, 
            {
                method: 'POST',
                body: data
            });
        return await result.text();
    }


    formsArr.forEach( formItem => {
        formItem.addEventListener( 'submit', (e) => {  // !!! 'submit'  —>  e.preventDefault();
            e.preventDefault();

            // MESSAGE EL <div> CREATION
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('messageDiv');
            formItem.appendChild(messageDiv);

            // MAKE FormData OBJ
            const formData = new FormData(formItem);

            // IF( Puched Balcon Calculator Final Btn) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if( formItem.getAttribute('data-calc') === "calcEnd") { // !!!!!  FORM data-atrib  !!!!!
                console.log('CALCULATOR ENF BTN PRESSED...');

                for (let key in balconStateObj) {
                    formData.append(key , balconStateObj[key]);
                }
            }
            
            // POST Data (FormData Obj) On Server
            postData('assets/server.php' , formData)
            .then( res => {
                console.log(res);
                messageDiv.textContent = messages.success;
            })
            .catch( () => { messageDiv.textContent = messages.error })
            .finally( () => {
                inputsArr.forEach( input => {
                    input.value = ''; // Clear Form Inputs
                })
                setTimeout( () => {
                    messageDiv.remove();
                }, 3000);
            })
    
        })
    })

}

export default formsPostOnServ;