// Diccionario de Traducciones para las Subpáginas (Fases I, II y III)
const phaseTranslations = {
    // 🇪🇸 ESPAÑOL
    es: {
        // Textos Comunes
        btn_back: "← Volver al Inicio",
        syllabus_header: "Plan de Estudios",
        
        // FASE 1 (Fundamentos)
        p1_title: "Fase I: Fundamentos",
        p1_years: "Años 12-14 | El Sistema Operativo",
        p1_intro: "Aquí comienza el viaje. El objetivo no es memorizar tablas, sino interiorizar la estructura del idioma como una lengua viva, utilizando el método natural de Hans Ørberg.",
        year1: "Año 1 (12 años)",
        content_y1: "LLPSI: Familia Romana (Cap. 1-25). Morfología completa y vocabulario base de 1500 palabras.",
        year2: "Año 2 (13 años)",
        content_y2: "LLPSI: Familia Romana (Finalizado). Introducción a Roma Aeterna. Transición a sintaxis compleja.",

        // FASE 2 (Poder)
        p2_title: "Fase II: Poder & Estructura",
        p2_years: "Años 14-16 | Lógica Militar y Oratoria",
        p2_intro: "La gramática se convierte en lógica aplicada. Analizamos cómo César y Cicerón construían sus argumentos para liderar Roma. Énfasis en precisión y estructura.",
        year3: "Año 3 (14 años)",
        content_y3: "Julio César: De Bello Gallico (Libros I, IV, V). Sintaxis Militar, Ablativo Absoluto y Estilo Indirecto.",
        year4: "Año 4 (15 años)",
        content_y4: "Cicerón: Catilinarias y Pro Archia. Retórica, Figuras de Dicción y Argumentación lógica.",

        // FASE 3 (Humanitas)
        p3_title: "Fase III: Humanitas",
        p3_years: "Años 16-18 | Estética y Filosofía",
        p3_intro: "La culminación del proceso. El estudiante entra en diálogo con las grandes mentes de la antigüedad. Se busca la sensibilidad estética y la profundidad filosófica.",
        year5: "Año 5 (16 años)",
        content_y5: "Virgilio: La Eneida (Libros I, II, IV). Métrica (Hexámetro), Pathos poético y Mitología.",
        year6: "Año 6 (17-18 años)",
        content_y6: "Lecturas variadas (Séneca, Tácito, Ovidio). Composición en prosa latina y Proyecto Final de Investigación."
    },
    
    // 🏛️ LATINA
    la: {
        btn_back: "← Regredere ad Initium",
        syllabus_header: "Index Rerum (Syllabus)",
        
        // FASE 1
        p1_title: "Phasis I: Fundamenta",
        p1_years: "Ann. 12-14 | Systema Mentis",
        p1_intro: "Hic iter incipit. Non tabulas memoria tenere studemus, sed ipsam structuram linguae ut sermonem vivum interiora mentis accipere.",
        year1: "Annus I",
        content_y1: "LLPSI: Familia Romana (Cap. 1-25). Morphologia tota et 1500 vocabula.",
        year2: "Annus II",
        content_y2: "LLPSI: Familia Romana (Perfectum). Initium Romae Aeternae. Transitus ad syntaxim.",

        // FASE 2
        p2_title: "Phasis II: Potestas",
        p2_years: "Ann. 14-16 | Logica et Oratoria",
        p2_intro: "Grammatica fit logica adhibita. Investigamus quomodo Caesar et Cicero argumenta struxerint ad Romam ducendam.",
        year3: "Annus III",
        content_y3: "Iulius Caesar: De Bello Gallico. Syntaxis Militaris et Oratio Obliqua.",
        year4: "Annus IV",
        content_y4: "Cicero: In Catilinam. Rhetorica, Figurae verborum et Argumentatio.",

        // FASE 3
        p3_title: "Phasis III: Humanitas",
        p3_years: "Ann. 16-18 | Philosophia et Pulchritudo",
        p3_intro: "Finis propositi. Discipulus cum magnis antiquitatis ingeniis colloquitur per poesim et philosophiam.",
        year5: "Annus V",
        content_y5: "Vergilius: Aeneis. Metrica (Hexameter) et Pathos.",
        year6: "Annus VI",
        content_y6: "Seneca, Tacitus, Ovidius. Compositio prosae et Investigatio Finalis."
    },

    // 🇬🇧 ENGLISH
    en: {
        btn_back: "← Back to Home",
        syllabus_header: "Syllabus",
        
        // FASE 1
        p1_title: "Phase I: Foundations",
        p1_years: "Ages 12-14 | The Operating System",
        p1_intro: "The journey begins here. The goal is not to memorize tables, but to internalize the language structure as a living system using the Natural Method.",
        year1: "Year 1",
        content_y1: "LLPSI: Familia Romana (Ch. 1-25). Complete morphology and core vocabulary.",
        year2: "Year 2",
        content_y2: "LLPSI: Familia Romana (Finished). Intro to Roma Aeterna. Transition to complex syntax.",

        // FASE 2
        p2_title: "Phase II: Power",
        p2_years: "Ages 14-16 | Logic & Oratory",
        p2_intro: "Grammar becomes applied logic. We analyze how Caesar and Cicero built their arguments to lead Rome. Focus on precision.",
        year3: "Year 3",
        content_y3: "Julius Caesar: De Bello Gallico. Military Syntax and Indirect Speech.",
        year4: "Year 4",
        content_y4: "Cicero: Catilinarians. Rhetoric, Figures of Speech, and Argumentation.",

        // FASE 3
        p3_title: "Phase III: Humanitas",
        p3_years: "Ages 16-18 | Aesthetics & Philosophy",
        p3_intro: "The culmination. The student enters into dialogue with the great minds of antiquity. Focus on aesthetic sensitivity and philosophy.",
        year5: "Year 5",
        content_y5: "Virgil: The Aeneid. Metrics (Hexameter), Pathos, and Mythology.",
        year6: "Year 6",
        content_y6: "Advanced Reading (Seneca, Tacitus). Latin Prose Composition and Final Research Project."
    },

    // 🇹🇼 繁體中文 (CHINO TRADICIONAL)
    zh: {
        btn_back: "← 返回首頁",
        syllabus_header: "課程大綱",
        
        // FASE 1
        p1_title: "第一階段：基礎",
        p1_years: "12-14歲 | 思維操作系統",
        p1_intro: "旅程由此開始。目標不是死記硬背表格，而是透過自然教學法，將語言結構內化為一種活的系統。",
        year1: "第一年",
        content_y1: "LLPSI: Familia Romana (1-25章)。完整詞法與基礎詞彙。",
        year2: "第二年",
        content_y2: "LLPSI: Familia Romana (完結)。導入《羅馬永恆》。過渡至複雜句法。",

        // FASE 2
        p2_title: "第二階段：力量",
        p2_years: "14-16歲 | 邏輯與演說",
        p2_intro: "語法轉化為應用邏輯。我們分析凱撒與西塞羅如何構建論點以領導羅馬。著重精確性與結構。",
        year3: "第三年",
        content_y3: "凱撒：《高盧戰記》。軍事句法與間接引語。",
        year4: "第四年",
        content_y4: "西塞羅：《反卡提林納》。修辭學、修辭格與邏輯論證。",

        // FASE 3
        p3_title: "第三階段：人文",
        p3_years: "16-18歲 | 美學與哲學",
        p3_intro: "過程的頂點。學生透過詩歌與哲學與古代偉大心靈對話。著重美學感知與哲學深度。",
        year5: "第五年",
        content_y5: "維吉爾：《埃涅阿斯紀》。格律（六步格）、情感與神話。",
        year6: "第六年",
        content_y6: "進階閱讀（塞內卡、塔西佗）。拉丁語散文寫作與期末研究計畫。"
    }
};

// Función Lógica para cambiar el idioma
function setPhaseLanguage(lang) {
    // 1. Verificar si el idioma existe, si no, usar español por defecto
    const selectedLang = phaseTranslations[lang] ? phaseTranslations[lang] : phaseTranslations['es'];

    // 2. Buscar todos los elementos con el atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');

    // 3. Iterar y reemplazar texto
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Solo reemplazar si la clave existe en el diccionario
        if (selectedLang[key]) {
            element.textContent = selectedLang[key];
        }
    });

    // 4. Guardar preferencia en el documento (HTML tag)
    document.documentElement.lang = lang;
}

// Inicializar en español al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    setPhaseLanguage('es'); 
});
