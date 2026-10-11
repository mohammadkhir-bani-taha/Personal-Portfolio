
// Theme Switcher
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
});


// Translation Dictionary
const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        themeBtn: "Change Theme",

        heroTitle: "Hello, I'm MohammadKhir",
        aboutText: "I'm a Computer Science graduate from Yarmouk University, interested in Web Development and Cybersecurity.",

        skillsTitle: "My Skills",
        skill1: "HTML & CSS & JavaScript",
        skill2: "Backend Python with Flask",
        skill3: "Java & C++",
        skill4: "Git & GitHub & Linux",

        projectsTitle: "My Projects",

        project0Title: "Project 00 - Linux & Git",
        project0Desc: "Practiced Linux terminal commands, file management, and Git workflows.",

        project1Title: "Project 01 - HTML",
        project1Desc: "Built web pages using semantic HTML elements and proper page structure.",

        project2Title: "Project 02 - CSS",
        project2Desc: "Practiced CSS styling, layouts, Flexbox, and animations.",

        project3Title: "Project 03 - JavaScript",
        project3Desc: "Practiced JavaScript fundamentals, events, and DOM manipulation.",

        hobbiesTitle: "My Hobbies",
        hobby1: "Programming",
        hobby2: "Learning New Technologies",
        hobby3: "Cybersecurity",
        hobby4: "Problem Solving",

        contactTitle: "Contact Me",
        contactIntro: "Feel free to reach out to me through any of the platforms below:",
        emailTitle: "Email",

        formTitle: "Send Me a Message",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Your Message",

        namePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        messagePlaceholder: "Write your message...",

        sendBtn: "Send Message",
        footerText: "© 2026 MohammadKhir. All rights reserved."
    },

    ar: {
        navAbout: "عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "التواصل",
        themeBtn: "تغيير المظهر",

        heroTitle: "مرحباً، أنا محمدخير",
        aboutText: "أنا خريج علوم حاسوب من جامعة اليرموك، ومهتم بتطوير الويب والأمن السيبراني.",

        skillsTitle: "مهاراتي",
        skill1: "HTML و CSS و JavaScript",
        skill2: "تطوير الخلفية باستخدام Python و Flask",
        skill3: "Java و C++",
        skill4: "Git و GitHub و Linux",

        projectsTitle: "مشاريعي",

        project0Title: "المشروع 00 - لينكس و Git",
        project0Desc: "تدربت على أوامر لينكس وإدارة الملفات والعمل باستخدام Git.",

        project1Title: "المشروع 01 - HTML",
        project1Desc: "أنشأت صفحات ويب باستخدام عناصر HTML الدلالية وبنية صفحات منظمة.",

        project2Title: "المشروع 02 - CSS",
        project2Desc: "تدربت على تنسيق الصفحات والتخطيطات وFlexbox والحركات.",

        project3Title: "المشروع 03 - JavaScript",
        project3Desc: "تدربت على أساسيات JavaScript والأحداث والتعامل مع DOM.",

        hobbiesTitle: "هواياتي",
        hobby1: "البرمجة",
        hobby2: "تعلم التقنيات الجديدة",
        hobby3: "الأمن السيبراني",
        hobby4: "حل المشكلات",

        contactTitle: "تواصل معي",
        contactIntro: "يمكنك التواصل معي عبر أي من المنصات التالية:",
        emailTitle: "البريد الإلكتروني",

        formTitle: "أرسل لي رسالة",
        nameLabel: "اسمك",
        emailLabel: "بريدك الإلكتروني",
        messageLabel: "رسالتك",

        namePlaceholder: "أدخل اسمك",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        messagePlaceholder: "اكتب رسالتك...",

        sendBtn: "إرسال الرسالة",
        footerText: "© 2026 محمدخير. جميع الحقوق محفوظة."
    }
};


// Language Switcher
const langBtn = document.getElementById("langBtn");

let currentLang = "en";

langBtn.addEventListener("click", function () {

    // Toggle current language
    currentLang = currentLang === "en" ? "ar" : "en";

    // Update HTML language and direction
    document.documentElement.lang = currentLang;

    document.documentElement.dir =
        currentLang === "ar" ? "rtl" : "ltr";

    // Translate text content
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");

        if (translations[currentLang][key] !== undefined) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Translate input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
        const key = element.getAttribute("data-i18n-placeholder");

        if (translations[currentLang][key] !== undefined) {
            element.placeholder = translations[currentLang][key];
        }
    });

    // Update language button
    langBtn.textContent =
        currentLang === "en" ? "العربية" : "English";
});


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent(
        "Portfolio Message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:mohammadkhirbanitaha@gmail.com?subject=" +
        subject + "&body=" + body;
});
