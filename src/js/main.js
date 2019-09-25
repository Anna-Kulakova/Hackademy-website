let mainBlock = document.querySelector('.main_box-modal');
let loginBox = document.getElementById("login");
let forgotPasswordBox = document.getElementById("forgot-password");
let register = document.getElementById("register");

window.windowOnClick = (event) => {
    if (event.target === mainBlock) {
        if (!loginBox.classList.contains('d-none')) {
            loginBox.classList.add('d-none');
        }

        if (!forgotPasswordBox.classList.contains('d-none')) {
            forgotPasswordBox.classList.add('d-none');
        }

        if (!register.classList.contains('d-none')) {
            register.classList.add('d-none');
        }

        if (mainBlock.classList.contains('show-modal')) {
            mainBlock.classList.remove('show-modal');
        }
    }
};

window.closeModal = () => {
    if (!loginBox.classList.contains('d-none')) {
        loginBox.classList.add('d-none');
    }

    if (!forgotPasswordBox.classList.contains('d-none')) {
        forgotPasswordBox.classList.add('d-none');
    }

    if (!register.classList.contains('d-none')) {
        register.classList.add('d-none');
    }

    if (mainBlock.classList.contains('show-modal')) {
        mainBlock.classList.remove('show-modal');
    }
};

window.openLoginForm = () => {
    if (!mainBlock.classList.contains('show-modal')) {
        mainBlock.classList.add('show-modal');
    }

    if (loginBox.classList.contains('d-none')) {
        loginBox.classList.remove('d-none');
    }

    if (!forgotPasswordBox.classList.contains('d-none')) {
        forgotPasswordBox.classList.add('d-none');
    }

    if (!register.classList.contains('d-none')) {
        register.classList.add('d-none');
    }
};

window.openForgotPasswordForm = () => {
    if (!mainBlock.classList.contains('show-modal')) {
        mainBlock.classList.add('show-modal');
    }

    if (!loginBox.classList.contains('d-none')) {
        loginBox.classList.add('d-none');
    }

    if (forgotPasswordBox.classList.contains('d-none')) {
        forgotPasswordBox.classList.remove('d-none');
    }

    if (!register.classList.contains('d-none')) {
        register.classList.add('d-none');
    }
};

window.openRegisterForm = () => {
    if (!mainBlock.classList.contains('show-modal')) {
        mainBlock.classList.add('show-modal');
    }

    if (!loginBox.classList.contains('d-none')) {
        loginBox.classList.add('d-none');
    }

    if (register.classList.contains('d-none')) {
        register.classList.remove('d-none');
    }

    if (!forgotPasswordBox.classList.contains('d-none')) {
        forgotPasswordBox.classList.add('d-none');
    }
};


window.addEventListener("click", windowOnClick);
