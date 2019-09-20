   var modal = document.querySelector(".main_box-modal");
    var trigger = document.querySelector(".trigger1");
    var closeButton = document.querySelector(".main_box-modal-content-close_button");

    function toggleModal() {
        modal.classList.toggle("show_modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

function hidethis () {
    console.log('asd');
    modal.classList.remove("show_modal");
}
