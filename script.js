document.querySelectorAll('.heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
        this.classList.toggle('red');
    });
});
