/*=========================================
        Gudy Clothing
        SCRIPT.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        PRELOADER
    ==============================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            setTimeout(() => {
                if (preloader) {
                    preloader.remove();
                }
            }, 500);
        }
    });


    /*==============================
        HAMBURGER MENU
    ==============================*/

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                mobileMenu.classList.remove("active");
            });
        });
    }


    /*==============================
        STICKY HEADER
    ==============================*/

    const header = document.getElementById("header");

    if (header) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    /*==============================
        HERO IMAGE SLIDER
    ==============================*/

    const hero = document.querySelector(".hero");

    const heroImages = [
        "images/hero/hero1.jpg",
        "images/hero/hero2.jpg",
        "images/hero/hero3.jpg",
        "images/hero/hero4.jpg"
    ];

    let currentImage = 0;

    function changeHero() {

        if (!hero) return;

        hero.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('${heroImages[currentImage]}')`;

        currentImage++;

        if (currentImage >= heroImages.length) {
            currentImage = 0;
        }
    }

    if (hero) {
        changeHero();
        setInterval(changeHero, 5000);
    }


    /*==============================
        GALLERY FILTER
    ==============================*/

    const filterButtons =
        document.querySelectorAll(".gallery-filter button");

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter = button.dataset.filter;

            galleryItems.forEach(item => {

                if (
                    filter === "all" ||
                    item.dataset.category === filter
                ) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });


    /*==============================
        FAQ
    ==============================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {
                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });


    /*==============================
        BACK TO TOP
    ==============================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        topBtn.style.display =
            window.scrollY > 300 ? "flex" : "none";

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /*==============================
        SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (!href || href === "#") return;

            const target = document.querySelector(href);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /*==============================
        ACTIVE MENU
    ==============================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (sections.length && navLinks.length) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 120;

                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === "#" + current
                ) {
                    link.classList.add("active");
                }

            });

        });

    }


    console.log("✅ Gudy Clothing WEBSITE LOADED SUCCESSFULLY");

});