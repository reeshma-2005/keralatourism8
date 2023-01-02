let fname=document.getElementById("firstName");
let lname=document.getElementById("lastName");
let email=document.getElementById("inputEmail1");
let pwd=document.getElementById("inputPassword1");
let mob=document.getElementById("inputMob");
let errorsignup1=document.getElementById("errorsignup1");
let errorsignup2=document.getElementById("errorsignup2");


function validateSignup(){
    // let regnum=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    let regnum2=/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    let regnum3=/^\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$/;
    let regnum4=/^\(?([0-9]{3})\)?[+]?([0-9]{3})[+]?([0-9]{4})$/;
    let regnum1=/^[0-9]\d{9}$/;
    let regexp=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let regexp1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let regexp2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     
    // if(regnum2.test(mob.value) || regnum1.test(mob.value) || regnum3.test(mob.value) || regnum4.test(mob.value) || (regexp.test(email.value) && regexp2.test(pwd.value)))
    if(regnum2.test(mob.value) || regnum1.test(mob.value) || regnum3.test(mob.value) && regnum4.test(mob.value) && (regexp.test(email.value) && regexp2.test(pwd.value)))
    {
        alert("valid");
        
        return true;
        errorsignup1.innerText="valid";
        errorsignup1.style.color="green";
        errorsignup2.innerText="valid";
        errorsignup2.style.color="green";
         pwd.style.border="2px solid green";
         email.style.border="2px solid green";
         mob.style.border="2px solid green";
    }
     else{
        alert("invalid");
        // email.style.border="2px solid red";
        //  pwd.style.border="2px solid red";
        //  errorsignup1.innerText="invalid";
        //  errorsignup1.style.color="red";
        //  errorsignup2.innerText="Invalid";
        //  errorsignup2.style.color="red";
        //  mob.style.color="2px solid red";
        return false;
    }
//    if(regexp.test(email.value) && regexp2.test(pwd.value)){
//     //     // errorsignup1.innerText="valid";
//     //     // errorsignup1.style.color="green";
//     //     // errorsignup2.innerText="valid";
//     //     // errorsignup2.style.color="green";
//     //     // errorsignup2.style.border="2px solid green";
//         alert("validd");
//         return true;
//     }
//     else{
//         // emailsignin.style.border="2px solid red";
//         // pwdsignin.style.border="2px solid red";
//         // error.innerText="invalid";
//         // error.style.color="red";
//         // errorpwd.innerText="Invalid";
//         // errorpwd.style.color="red";
//         return false;
//         alert("invalidd");

//    }
        // if(email.value=="" || pwd.value=="" || fname.value=="" || lname.value==""){
        //     alert("field is empty");
        //     return false;
        // }
        // else{
        //     alert("Successfull");
        //     return true;
        // }
    //     let regexp=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    //     let regexp1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //     if(email.value==""){
    //         alert("Email field is empty");
    //         return false;
    //     }
                       
    //     else if(regexp.test(email.value)){
    //         errorsignup1.innerText="valid";
    //         errorsignup1.style.color="green";
    //         return true;
    //     }
    //     else if(regexp1.test(pwd.value)){
    //         errorsignup2.innerText="Password is valid";
    //         errorsignup2.style.color="green";
    //         // pwdsignin.style.border="2px solid green";
    //         return ;
    //    } 
        
    //     else{
    //         email.style.border="2px solid red";
    //         pwd.style.border="2px solid red";
    //         errorsignup1.innerText="invalid";
    //         errorsignup1.style.color="red";
    //         errorsignup2.innerText="Invalid";
    //         errorsignup2.style.color="red";
    //         return false;
        
    
    //     }
}

    function passswordstrength1(){
        let pwdstr1=document.getElementById("pwdstr1");
        let regpwdlength=/^(?=.*\d).{8,}$/;
        let regpwdupper=/^[A-Z]$/;
        let regpwdlower=/^[a-z]$/;
        let regpwdnum=/^\d+$/
        let regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(regexp.test(pwd.value)){
            pwdstr1.style.backgroundColor="green";
            return true;
        }
        else if(regpwdlength.test(pwd.value) || regpwdupper.test(pwd.value) || regpwdlower.test(pwd.value) || regpwdnum.test(pwd.value)){
            pwdstr1.style.backgroundColor="red";
            return false;
        }
        else{
            pwdstr1.style.backgroundColor="orange";
            return false;
        }
    }
    function emailvalidate(){
        let regexp=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
        if(regexp.test(email.value)){
            errorsignup1.innerText="valid"; 
            errorsignup1.style.color="green";
            email.style.border="2px solid green";
            return true;
            
        }
        else{
            email.style.border="2px solid red";
            errorsignup1.innerText="invalid";
            errorsignup1.style.color="red";
             return false;
        }   
        
    }
    function pwdvalidate(){
        let regexp2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(regexp2.test(pwd.value)){
            errorsignup2.innerText="valid"; 
            errorsignup2.style.color="green";
            pwd.style.border="2px solid green";
            return true;
            
        }
        else{
            pwd.style.border="2px solid red";
            errorsignup2.innerText="invalid";
            errorsignup2.style.color="red";
             return false;
        }   
    }
    
    