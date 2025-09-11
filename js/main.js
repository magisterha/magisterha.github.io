document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE TRADUCCIÓN ---

    const translationsData = translations; // Viene del archivo translations.js

    // Detecta el idioma guardado o el del navegador, con 'zh' como fallback.
    const savedLang = localStorage.getItem('language') || (['es', 'en'].includes(navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'zh');

    window.setLanguage = (lang) => {
        if (!translationsData[lang]) {
            console.error(`Idioma no encontrado: ${lang}`);
            return;
        }

        // Guarda la preferencia de idioma
        localStorage.setItem('language', lang);
        
        // Actualiza el atributo lang del HTML
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;

        // Itera sobre todos los elementos que necesitan traducción
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translationsData[lang][key]) {
                element.innerHTML = translationsData[lang][key];
            } else {
                 console.warn(`Clave de traducción no encontrada para el idioma '${lang}': ${key}`);
            }
        });
    };

    // Establece el idioma inicial al cargar la página
    setLanguage(savedLang);


    // --- SCRIPT PARA EL MODAL ---
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('fullArticleModal');

    if (openModalBtn && modal && closeModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });

        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        };

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && !modal.classList.contains('hidden')) closeModal();
        });
    }

    // --- SCRIPT PARA EL ACORDEÓN (FAQ) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Cierra todos los acordeones abiertos
            accordionHeaders.forEach(h => {
                if (h !== header) {
                    h.nextElementSibling.style.maxHeight = null;
                    h.classList.remove('open');
                }
            });
            
            // Abre o cierra el acordeón actual
            if (isOpen) {
                content.style.maxHeight = null;
                header.classList.remove('open');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                header.classList.add('open');
            }
        });
    });

});
