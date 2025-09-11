document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE TRADUCCIÓN ---

    // La variable `translations` viene del archivo translations.js
    const translationsData = translations; 

    // Detecta el idioma guardado o el del navegador, con 'zh' como opción por defecto.
    const savedLang = localStorage.getItem('language') || (['es', 'en'].includes(navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'zh');

    // Función global para cambiar el idioma
    window.setLanguage = (lang) => {
        if (!translationsData[lang]) {
            console.error(`Idioma no encontrado: ${lang}`);
            return;
        }

        // Guarda la preferencia de idioma en el almacenamiento local del navegador
        localStorage.setItem('language', lang);
        
        // Actualiza el atributo `lang` de la etiqueta <html>
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;

        // Itera sobre todos los elementos que necesitan traducción
        document.querySelectorAll('[data-translate], [data-translate-alt]').forEach(element => {
            // Traduce el contenido de texto (innerHTML)
            const textKey = element.getAttribute('data-translate');
            if (textKey && translationsData[lang][textKey]) {
                element.innerHTML = translationsData[lang][textKey];
            }

            // Traduce el atributo 'alt' de las imágenes
            const altKey = element.getAttribute('data-translate-alt');
            if (altKey && translationsData[lang][altKey]) {
                element.setAttribute('alt', translationsData[lang][altKey]);
            }
        });
    };

    // Establece el idioma inicial al cargar la página
    setLanguage(savedLang);


    // --- SCRIPT PARA EL MODAL ---
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('fullArticleModal');

    // Previene errores si los elementos del modal no existen en la página
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
            // Cierra el modal solo si se hace clic en el fondo oscuro
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            // Cierra el modal al presionar la tecla "Escape"
            if (e.key === "Escape" && !modal.classList.contains('hidden')) closeModal();
        });
    }


    // --- SCRIPT PARA EL ACORDEÓN (FAQ) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Cierra todos los acordeones que estén abiertos
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
