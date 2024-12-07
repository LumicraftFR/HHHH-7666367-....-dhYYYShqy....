// Fonction pour ouvrir un pop-up
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Fonction pour fermer un pop-up
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Fonction pour démarrer un timer basé sur une date cible
function startTimer(targetDate) {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) {
        console.error('Élément avec ID "countdown" introuvable.');
        return;
    }

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}J ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M ${seconds.toString().padStart(2, '0')}S`;
        } else {
            clearInterval(timerInterval);
            countdownElement.textContent = '00j 00h:00m:00s';
            console.log('TIMER FINISHED');
        }
    }

    // Met à jour le timer toutes les secondes
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Configuration initiale : cacher tous les pop-ups
document.addEventListener('DOMContentLoaded', () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });

    // Exemple de date cible pour le timer (31 décembre 2024, 23:59:59)
    const targetDate = new Date('2024-12-16T23:59:59').getTime();
    startTimer(targetDate);
});
