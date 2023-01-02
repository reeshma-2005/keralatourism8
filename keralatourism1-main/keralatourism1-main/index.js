//let email=document.getElementById("inputEmail1");
//let pwd=document.getElementById("inputPassword1");
// let fname=document.getElementById("firstName");
// let lname=document.getElementById("lastName");
 let emailsignin=document.getElementById("signinEmail1");
 let pwdsignin=document.getElementById("signinpwd");
 let error=document.getElementById("error");
 let errorpwd=document.getElementById("errorpwd");
 let pwdstr=document.getElementById("pwdstr");
  
// console.log(emailsignin.value);

// function validateSignup(){
//     if(email.value=="" || pwd.value=="" || fname.value=="" || lname.value==""){
//         alert("field is empty");
//         return false;
//     }
//     else{
//         alert("Successfull");
//         return true;
//     }

// }

function validate(){
    // let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2-3})(.[a-z]{2-3})?$/;
    let regexp=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let regexp1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let regexp2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //  if(emailsignin.value==""){
    //     alert("Email field is empty");
    //     return false;
    // }
    if(regexp.test(emailsignin.value) && regexp2.test(pwdsignin.value)){
        error.innerText="valid";
        error.style.color="green";
         errorpwd.innerText="valid";
         errorpwd.style.color="green";
         pwdsignin.style.border="2px solid green";
         emailsignin.style.border="2px solid green";
         alert("valid");
        return true;
        
    }
    // else{
    //     emailsignin.style.border="2px solid red";
    //     error.innerText="invalid";
    //     error.style.color="red";
    //     return false;
    // }
//    else if(pwdsignin.value==""){
//         errorpwd.innerText="Password field is empty";
//         return false;
//     }
//     else if(regexp2.test(pwdsignin.value)){
//          errorpwd.innerText="Password is valid";
//          errorpwd.style.color="green";
//          pwdsignin.style.border="2px solid green";
        
//         return true;
//    } 
    
    else{
         emailsignin.style.border="2px solid red";
         pwdsignin.style.border="2px solid red";
         error.innerText="invalid";
         error.style.color="red";
         errorpwd.innerText="Invalid";
         errorpwd.style.color="red";
         alert("invalid");
         return false;
    

    }
   
   
}

function passswordstrength(){
    let regpwdlength=/^(?=.*\d).{8,}$/;
    let regpwdupper=/^[A-Z]$/;
    let regpwdlower=/^[a-z]$/;
    let regpwdnum=/^\d+$/
    let regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regexp.test(pwdsignin.value)){
        pwdstr.style.backgroundColor="green";
        return true;
    }
    else if(regpwdlength.test(pwdsignin.value) || regpwdupper.test(pwdsignin.value) || regpwdlower.test(pwdsignin.value) || regpwdnum.test(pwdsignin.value)){
        pwdstr.style.backgroundColor="red";
        return false;
    }
    else{
        pwdstr.style.backgroundColor="orange";
        return false;
    }
}
function emailvalidate(){
    let regexp=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(regexp.test(emailsignin.value)){
        error.innerText="valid"; 
        error.style.color="green";
        emailsignin.style.border="2px solid green";
        return true;
        
    }
    else{
        emailsignin.style.border="2px solid red";
        error.innerText="invalid";
         error.style.color="red";
         return false;
    }   
    
}
function pwdvalidate(){
    let regexp2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regexp2.test(pwdsignin.value)){
        errorpwd.innerText="valid"; 
        errorpwd.style.color="green";
        pwdsignin.style.border="2px solid green";
        return true;
        
    }
    else{
        pwdsignin.style.border="2px solid red";
        errorpwd.innerText="invalid";
         errorpwd.style.color="red";
         return false;
    }   
}


