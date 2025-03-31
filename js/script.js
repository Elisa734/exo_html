document.addEventListener('DOMContentLoaded', function() {
    // Gestion du popup
    const loginBtn = document.querySelector('.login-btn');
    const closeBtn = document.querySelector('.close-btn');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');
    const blurOverlay = document.querySelector('.blur-bg-overlay');
    const formPopup = document.querySelector('.form-popup');
    
    // Ouvrir popup
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.add('show-popup');
        });
    }
    
    // Fermer popup
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.body.classList.remove('show-popup');
        });
    }
    
    // Fermer en cliquant à l'extérieur
    if (blurOverlay) {
        blurOverlay.addEventListener('click', function() {
            document.body.classList.remove('show-popup');
        });
    }
    
    // Basculer entre login/signup
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            formPopup.classList.add('show-signup');
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            formPopup.classList.remove('show-signup');
        });
    }
    
    // Animation des champs de formulaire
    const inputFields = document.querySelectorAll('.input-field input');
    inputFields.forEach(input => {
        const label = input.parentNode.querySelector('label');
        
        input.addEventListener('focus', function() {
            label.classList.add('active');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                label.classList.remove('active');
            }
        });
        
        // Vérifier les champs pré-remplis au chargement
        if (input.value) {
            label.classList.add('active');
        }
    });
    
    // Empêcher la fermeture en cliquant dans le popup
    formPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Initialiser les tooltips Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
var video = document.getElementById("maVideo");
  video.onended = function() {
    video.currentTime = 0; // Remet au début
    video.play();          // Relance la lecture
    video.autoplay = true
    video.loop = true; // Relance sans arrêt
  };