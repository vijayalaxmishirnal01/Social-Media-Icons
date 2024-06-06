document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('clicked');
        setTimeout(() => {
            window.location.href = btn.getAttribute('data-url');
        }, 300); 
    });
});