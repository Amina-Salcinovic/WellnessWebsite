const toggleButtons = document.querySelectorAll('.toggle-btn');


toggleButtons.forEach(button => {
    button.addEventListener('click', () => {

        const content = button.nextElementSibling;

        
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

const themeToggleButton = document.querySelector('.theme-toggle-button');


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleButton.classList.add('dark-theme');
    }
});


themeToggleButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme');
    themeToggleButton.classList.toggle('dark-theme');

   
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
