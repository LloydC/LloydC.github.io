window.onload = function() {
    document.getElementById('year').innerText = `${new Date().getFullYear()}`;
    emailjs.init('GNOcKWtK9Q1Lw7UoL');


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        this.email = document.getElementById('email').value;
        this.subject.value = document.getElementById('subject').value;
        this.message.value = document.getElementById('message').value

        emailjs.sendForm('service_mmmjuft', 'contact_form', this)
            .then(function() {
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('message').value = '';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}