const validateEmail = ()=> {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let mail=document.getElementById("email").value;
let passwd=document.getElementById("password").value;
console.log(passwd);
    if (re.test(mail) && re2.test(passwd)) {
    document.getElementById("login2").style.backgroundColor = "#E84A5F";
        document.getElementById("login2").disabled = false;
        document.getElementById("login2").style.color = "white";
    }else {

        document.getElementById("login2").style.backgroundColor = "#89404C";
         document.getElementById("login2").style.color = "#999999";
        document.getElementById("login2").disabled = true;
    }
}


