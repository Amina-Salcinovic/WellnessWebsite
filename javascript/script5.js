const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('close');
/* click on image*/
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});