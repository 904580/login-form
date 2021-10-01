const userName= document.querySelector("#userName")
const password= document.querySelector("#password")
const repassword= document.querySelector("#passwordMatch")
const email= document.querySelector("#email")

function CheckRequired(arrInputs)
{
    arrInputs.forEach(function(input){

        if(input.value.trim()==="")
        {
            ShowError(input, input.name + " is required")
        }
        else
        {
            ShowSuccess(input)
        }

    })


}

function CheckEmail(input)
{
    if(input.value.includes('@'))
    {
        ShowSuccess(input);
    }
    else{
        ShowError(input, input.name + " is not valid.");
    }
    
}

function CheckLength(input, min, max){
    if(input.value.length<min){
        ShowError(input, input.name + ` must be atleast ${min} characters.`)
    }
    else if(input.value.length>max){
        ShowError(input, input.name + ` must be less than ${max} characters.`)
    }
    else{
        ShowSuccess(input)
    }
}

function CheckPasswordsMatch(pass, repass)
{
    if(pass.value!== repass.value || repass.value.trim()==="")
    {
        ShowError(repass, "Passwords do not match");
    }
    else
    {
        ShowSuccess(repass)
    }

}

function ShowError(input, message){
    const formContent= input.parentElement;
    formContent.className= "form-content error"
    const small = formContent.querySelector("small");
    small.textContent= message;

}

function ShowSuccess(input){
    const formContent= input.parentElement;
    formContent.className="form-content success"        
}

form.addEventListener('submit', function(e){
    e.preventDefault();
   CheckRequired([userName,email,password,repassword]);
   CheckEmail(email);
   CheckLength(userName, 4, 20)
   CheckLength(password, 6,12)
   CheckPasswordsMatch(password, repassword)
})

userName.addEventListener('blur', function(){
    CheckRequired([userName])
    CheckLength(userName, 4, 20)
}
)

password.addEventListener('blur', function(){
    CheckPasswordsMatch(password, repassword)
    CheckRequired([password])
    CheckLength(password, 4, 20)
    
}
)

repassword.addEventListener('blur', function(){
    CheckPasswordsMatch(password, repassword)
    CheckRequired([repassword])
    CheckLength(repassword, 4, 20)
    
}
)