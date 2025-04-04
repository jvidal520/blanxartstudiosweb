// Subpàgina de login 
// Serveix per mostrar la contrasenya de l'usuari en el inici de sessió (login)
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-icon');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
    toggleIcon.src = passwordType === 'password' ? '/images-and-icons/eye-slash.svg' : '/images-and-icons/eye.svg';
}
// Subpàgina Registre 
// Serveix per a validar la contrasenya de l'usuari i nomes tens vuit digits i una majuscula, etc..., per la pàgina registre. 
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('password-error');
    const password = passwordInput.value;
    const requirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!requirements.test(password)) {
        errorMessage.textContent = 'La contrasenya ha de tenir almenys 8 caràcters, incloent una majúscula, una minúscula i un número.';
        return false;
    } else {
        errorMessage.textContent = '';
        return true;
    }
}

// Serveix per arossegar fins a dalt de la pestanya de la pàgina web desde el boto del footer
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Serveix per a mostrar el banner de les cookies i guardar la decisió de l'usuari
function handleCookieConsent() {
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        consentBanner.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        consentBanner.style.display = 'none';
    });

    declineButton.addEventListener('click', () => {
        consentBanner.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', handleCookieConsent);

// (Framework) 'Carousel' Serveix per moure el carousel de les imatges de la pàgina principal de index.html automatic

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);

    let autoPlay = setInterval(nextSlide, 3000);

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
    carousel.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 3000));
});

