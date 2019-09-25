
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const validateReset = (target, id)=> {
    if ((target.value !== "") && (re.test(target.value))){
        document.getElementById("reset_pasword_button").style.backgroundColor = "#E84A5F";
        document.getElementById("reset_pasword_button").style.color = "white";
        document.getElementById("reset_pasword_button").style.cursor = "pointer";
        document.getElementById("reset_pasword_button").disabled = false;
    }
}




const validateInput = () => {

    var re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let mail=document.getElementById("email").value;
    let passwd=document.getElementById("password").value;
    let reg_mail=document.getElementById("email-register").value;
    let reg_passwd=document.getElementById("password-register").value;
    let reg_confirm_pas=document.getElementById("password-register-confirm").value;

    console.log("mail: ",document.getElementById("email").value);
    console.log("password: ",document.getElementById("password").value);
    console.log("reg_mail", document.getElementById("email-register").value);
    console.log(" reg_passwd", document.getElementById("password-register").value);
    console.log("confirmation", document.getElementById("password-register-confirm").value);

    if ((passwd !== "") && (!re2.test(passwd))) {
        document.getElementById("error_p").style.visibility = "visible";
        document.getElementById("login2").style.backgroundColor = "#89404C";
        document.getElementById("login2").style.color = "#999999";
        document.getElementById("login2").disabled = true;
    }

    if (re2.test(passwd) && re.test(mail)) {
        if (event.keyCode === 13) {
            document.getElementById("login2").click();
        }
        document.getElementById("login2").style.backgroundColor = "#E84A5F";
        document.getElementById("login2").style.color = "white";
        document.getElementById("login2").style.cursor = "pointer";
        document.getElementById("login2").disabled = false;
    }

    if ((reg_passwd !== "") && (!re2.test(reg_passwd)))  {
        console.log("in reg-passwd checking");
        document.getElementById("error_p2").style.visibility = "visible";
        console.log("already visible");
        document.getElementById("create_account").style.backgroundColor = "#89404C";
        document.getElementById("create_account").style.color = "#999999";
        document.getElementById("create_account").disabled = true;
    }

     if ((reg_confirm_pas !== "") && (reg_confirm_pas !== reg_passwd)) {
        document.getElementById("notmatch").style.visibility = "visible";
     }


    if ((re2.test(reg_passwd)) && (re.test(reg_mail)) && (reg_passwd === reg_confirm_pas)) {
        console.log("in entire checking");
        if (event.keyCode === 13) {
            document.getElementById("create_account").click();
        }
        document.getElementById("notmatch").style.visibility = "hidden";
        document.getElementById("error_p2").style.visibility = "hidden";
        document.getElementById("create_account").style.backgroundColor = "#E84A5F";
        document.getElementById("create_account").style.color = "white";
        document.getElementById("create_account").style.cursor = "pointer";
        document.getElementById("create_account").disabled = false;
        console.log("all done");
    }
}

