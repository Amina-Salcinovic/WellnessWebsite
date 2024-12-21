document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const successMessage = document.getElementById('successMessage');

    /* Email validation */
    emailInput.addEventListener('input', function () {
        if (!emailInput.checkValidity()) {
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
        }
    });

    /* Password strength validation */
    passwordInput.addEventListener('input', function () {
        const result = zxcvbn(passwordInput.value);
        let strengthText;
        switch (result.score) {
            case 0: strengthText = 'Very Weak'; break;
            case 1: strengthText = 'Weak'; break;
            case 2: strengthText = 'Fair'; break;
            case 3: strengthText = 'Strong'; break;
            case 4: strengthText = 'Very Strong'; break;
            default: strengthText = 'Weak';
        }
        passwordStrength.textContent = strengthText;
    });

    /* Form submission */
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                console.log('Success:', json);

                successMessage.style.display = 'block';

                form.reset();

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            });
    });
});

