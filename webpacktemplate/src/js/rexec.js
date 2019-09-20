const validateInput = ()=> {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let mail=document.getElementById("email").value;
let passwd=document.getElementById("password").value;
console.log(passwd);
    if ((document.getElementById("password").value!== "") &&  (!re2.test(passwd))) {
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

}

function hidethis () {
    console.log('asdas');
    modal.classList.remove('show_modal');
}

