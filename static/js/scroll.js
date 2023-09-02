// scroll to top

const scrollButton = document.querySelector('.scroll-to-top');

const showScrollToTop = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log('scrolling');
}