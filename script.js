document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Sayfa yüklendiğinde kullanıcının tercihini kontrol et
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Gündüz Modu';
    }

    // Buton varsa tıklama olayını ekle
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Gündüz Modu';
            } else {
                localStorage.setItem('dark-mode', 'disabled');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Gece Modu';
            }
        });
    }
});