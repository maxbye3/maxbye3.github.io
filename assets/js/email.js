(function () {
    emailjs.init('H378XIpvmn4BK6vLq');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_d4wzpdb', 'template_8r28i6d', this)
            .then(function () {
                document.getElementById("statusTxt").innerText = "Thanks! 📩 sent!";
                document.getElementById("contact-form").style.display = 'none';
                console.log('SUCCESS!');
            }, function (error) {
                document.getElementById("statusTxt").innerText = "We got an issue 🤢 Can you send me an email instead? maxbye@gmail.com";
                document.getElementById("contact-form").style.display = 'none';
                console.log('FAILED...', error);
            });
    });
}