 var init=function(){
    const form= document.getElementById('form');
    const username= document.getElementById('username');
    const email= document.getElementById('email');
    const password= document.getElementById('password');
    const password2= document.getElementById('password2');


    function showValidation(input,message,success){
        const formControl= input.parentElement;
        const small =formControl.querySelector('small')
        small.innerHTML=message;
        success===true?formControl.className='form-control success':formControl.className='form-control error';     
    }

    function isValidEmail(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    

    form.addEventListener('submit',function(e){
        e.preventDefault();

        if(username.value===''){
            showValidation(username,"username is required",false)
        }else{
            showValidation(username,"",true)

        }

        if(isValidEmail(email.value) ===false){
            showValidation(email,"email is required",false)
        }else{
            showValidation(email,"",true)

        }
        
        if(password.value==='' || password.value !== password2.value){
            showValidation(password2,"password should be equal",false)
            showValidation(password,"password should be equal",false)
        }else{
            showValidation(password2,"",true)
            showValidation(password,"",true)

        }

    });

 }

 init();