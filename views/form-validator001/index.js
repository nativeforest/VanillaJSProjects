 var init=function(){
     
    const form= document.getElementById('form');
    const username= document.getElementById('username');
    const email= document.getElementById('email');
    const password= document.getElementById('password');
    const password2= document.getElementById('password2');

    function checkRequired (inputArr){
        inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showValidation(input,`${getFieldName(input)} is required`,false)
        }else{
            showValidation(input,'',true)
        }
        })

    }
    function showValidation(input,message,success){
        const formControl= input.parentElement;
        const small =formControl.querySelector('small')
        small.innerHTML=message;
        success===true?formControl.className='form-control success':formControl.className='form-control error';     
    }

    function getFieldName(input){
        const name =input.id.charAt(0).toUpperCase() + input.id.slice(1)
        return name
    }
    function isValidEmail(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function checkEmail(input){
         isValidEmail(input.value) ===false?
         showValidation(input,`${getFieldName(input)} is not valid `,false):
         showValidation(email,"",true)   

    }

    function checkLength(input,min,max){
        if(input.value.length<min){
            showValidation(input,`${getFieldName(input)} must be at least `,false)
        }else if (input.value.length>max){
            showValidation(input,`${getFieldName(input)} must be less than`,false)
        }else{
            showValidation(input,'',true)
        }
    }
    function checkPasswordMatch(password,password2){
        password.value !== password2.value?
        showValidation(password2,`${getFieldName(password2)} Does not match`,false):
        showValidation(password2,"",true)
    }
    
    /// EVENT LISTENER
    form.addEventListener('submit',function(e){
        e.preventDefault();
        checkRequired([username,email,password,password2]);
        checkLength(username,6,20);
        checkLength(password,8,29);
        checkEmail(email)
        checkPasswordMatch(password,password2)
    });

 }

 init();