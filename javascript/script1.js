const form = document.getElementById('contactForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const passwordStrength = document.getElementById('passwordStrength');

        /* Email validation */
        emailInput.addEventListener('input', function () {
            if (!emailInput.checkValidity()) {
                emailInput.classList.add('is-invalid');
            } else {
                emailInput.classList.remove('is-invalid');
            }
        });

        /* Password */
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


        document.addEventListener('DOMConcentLoaded', function () {
            var form = document.getElementById("myForm");
            form.addEventListener('submit', function(event){
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                alert('Please fill in all required fields correctly.');
            }
          });
        });