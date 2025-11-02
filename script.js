

// Animation du compteur de visiteurs
function animateVisitorCount() {
    const countElement = document.getElementById('visitorCount');
    const targetCount = 1247;
    let currentCount = 0;
    const duration = 2000; // 2 secondes
    const increment = targetCount / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(timer);
        }
        countElement.textContent = Math.floor(currentCount).toLocaleString();
    }, 16);
}

// Simulation de téléchargement du CV
document.querySelector('.download-btn').addEventListener('click', function() {
    const btn = this;
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Téléchargement...';
    btn.disabled = true;
    
    // Simulation du téléchargement
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Téléchargé !';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            
            // Créer et déclencher le téléchargement d'un fichier PDF fictif
            const link = document.createElement('a');
            link.href = '#';
            link.download = 'CV_Alexandre_Martin.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1500);
    }, 2000);
});

// Initialiser l'animation du compteur quand le footer est visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateVisitorCount();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.cv-footer'));

// Mettre à jour la date de dernière modification
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdateElement = document.querySelector('.footer-stats p:first-child');
    const now = new Date();
    const formattedDate = now.toLocaleDateString('fr-FR');
    lastUpdateElement.textContent = `Dernière mise à jour: ${formattedDate}`;

});
