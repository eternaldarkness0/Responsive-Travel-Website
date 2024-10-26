const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    if(navLinks.classList.contains('active')) {
        navLinks.classList.add('unactive');
        navLinks.addEventListener('animationend', () => {
            navLinks.classList.remove('unactive');
            navLinks.classList.remove('active');
        }, {once: true} );
    } else {
        navLinks.classList.add('active');
    }
});

navLinks.addEventListener('click', () => {
    navLinks.classList.add('unactive');
    navLinks.addEventListener('animationend', () => {
        navLinks.classList.remove('unactive');
        navLinks.classList.remove('active');
    }, {once: true} );
});

const explore = document.querySelector('.explore-wrapper-inner');
const exploreContent = Array.from(explore.children);

exploreContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute('aria-hidden', true);
    explore.appendChild(duplicateNode);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
        enabled: 700,
    },
});

swiper.el.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiper.el.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
})

const faq = document.querySelector('.faq-grid');

faq.addEventListener('click', (event) => {
    const target = event.target;
    const faqCard = target.closest('.faq-card');
    if(target.classList.contains('ri-arrow-down-s-line')) {
        if(faqCard.classList.contains('active')) {
            faqCard.classList.remove('active');
        } else {
            Array.from(faq.children).forEach((item) => {
                item.classList.remove('active');
            });
            faqCard.classList.add('active');
        }
    }
});
