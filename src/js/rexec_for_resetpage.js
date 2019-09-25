 const validateInput = () => {
     var re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
     let passwd=document.getElementById("reset-password").value;
     let con_passwd=document.getElementById("confirm-password").value;
     if ((passwd !== "") && (!re2.test(passwd))) {
         document.getElementById("p_error3").style.visibility = "visible";
         document.getElementById("reset").style.backgroundColor = "#89404C";
         document.getElementById("reset").style.color = "#999999";
         document.getElementById("reset").disabled = true;
     }
     if ((con_passwd !== "") && (con_passwd !== passwd)) {
        document.getElementById("notmatch").style.visibility = "visible";
     }

         if (re2.test(passwd) && (passwd===con_passwd)) {
             document.getElementById("p_error3").style.visibility = "hidden";
             document.getElementById("notmatch").style.visibility = "hidden";
            document.getElementById("reset").style.backgroundColor = "#E84A5F";
            document.getElementById("reset").style.color = "white";
            document.getElementById("reset").style.cursor = "pointer";
            document.getElementById("reset").disabled = false;
         }
 }
