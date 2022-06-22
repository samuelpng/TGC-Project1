document.querySelector('#form-btn')
.addEventListener('click',function(){
    let isNameEmpty = false;
    let isEmailInvalid = false;
    let isMessageTooShort = false

    let userName = document.querySelector('#form-name').value;
    let email = document.querySelector('#form-email').value;
    let message = document.querySelector('#form-message').value;

    if (userName === ""){
        isNameEmpty = true;
    }

    if (!email.includes('@') == false || !email.includes('.')){
        isEmailInvalid = true;
    }

    if (message.length < 5){
        isMessageTooShort = true
    }


    if (isNameEmpty){
        document.querySelector('#nameError').innerHTML = "Name is required"
    }else{
        document.querySelector('#nameError').innerHTML = ""
    }
    if (isEmailInvalid){
        document.querySelector('#emailError').innerHTML = "Please provide a valid email address"
    }else{
        document.querySelector('#emailError').innerHTML = ""
    }
    if (isMessageTooShort){
        document.querySelector('#messageError').innerHTML = "Your message must be at least 5 characters long"
    }else{
        document.querySelector('#messageError').innerHTML = ""
    }

})

formIcon = document.querySelector('#form-icon')
formIcon.addEventListener('click', function(){
    document.querySelector("#form-container").style.display = "block"
})

formClose = document.querySelector('#close-form')
formClose.addEventListener('click',function(){
    document.querySelector("#form-container").style.display = "none"
})