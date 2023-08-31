document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName("card");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseenter', function () {
            this.classList.add('bg-primary', 'text-white');
        }, false);
        elements[i].addEventListener('mouseout', function () {
            this.classList.remove('bg-primary', 'text-white');
        }, false);
    }

    var chkBitcoins = document.getElementById("chkBitcoin");
    chkBitcoins.indeterminate = true;

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
});
