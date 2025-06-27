// Go to top button functionality
const goTopBtn = document.getElementById('goTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
};
goTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
