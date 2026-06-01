// ===============================
// NAVBAR ACTIVE LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,0.92)";
        header.style.boxShadow =
            "0 0 30px rgba(255,0,0,0.12)";

        header.style.border =
            "1px solid rgba(255,0,0,0.12)";

    } else {

        header.style.background =
            "rgba(10,10,10,0.85)";

        header.style.boxShadow = "none";

        header.style.border =
            "1px solid rgba(255,255,255,0.06)";
    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ===============================
// HERO IMAGE PARALLAX EFFECT
// ===============================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 70;

    const y =
        (window.innerHeight / 2 - e.pageY) / 70;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".about-text, .info-card, .skill-card, .project-card, .contact-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(60px)";

    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// SKILL BAR ANIMATION
// ===============================

const progressBars =
    document.querySelectorAll(".progress span");

function animateBars() {

    progressBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

window.addEventListener("load", animateBars);


// ===============================
// BUTTON GLOW EFFECT
// ===============================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .cv-btn, .about-btn, .view-projects, .figma-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 25px rgba(255,50,50,0.35)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});


// ===============================
// BACKGROUND PARALLAX EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelector(".bg-blur").style.transform =
        `translateY(${scrollY * 0.12}px)`;

});


// ===============================
// SOCIAL ICON EFFECT
// ===============================

const socialIcons =
    document.querySelectorAll(".socials a");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform =
            "translateY(-8px) scale(1.1)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform =
            "translateY(0px) scale(1)";

    });

});


// ===============================
// PROJECT CARD EFFECT
// ===============================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px)";

        card.style.boxShadow =
            "0 0 35px rgba(255,0,0,0.15)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

        card.style.boxShadow = "none";

    });

});


// ===============================
// TYPING ROLE EFFECT
// ===============================

const roles = [
    "IT Student",
    "UI/UX Designer",
    "Web Developer",
    "Figma Designer"
];

const roleContainer =
    document.querySelector(".hero-role");

let roleIndex = 0;

function rotateRoles() {

    roleContainer.innerHTML = `
        <p>${roles[roleIndex]}</p>
    `;

    roleIndex++;

    if (roleIndex >= roles.length) {

        roleIndex = 0;
    }

}

setInterval(rotateRoles, 2500);


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    `<i class="fa-solid fa-arrow-up"></i>`;

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";

scrollBtn.style.width = "52px";
scrollBtn.style.height = "52px";

scrollBtn.style.borderRadius = "50%";

scrollBtn.style.border = "none";

scrollBtn.style.background =
    "rgba(15,15,15,0.95)";

scrollBtn.style.color = "#fff";

scrollBtn.style.cursor = "pointer";

scrollBtn.style.fontSize = "1rem";

scrollBtn.style.zIndex = "999";

scrollBtn.style.display = "none";

scrollBtn.style.transition = "0.3s";

scrollBtn.style.backdropFilter = "blur(10px)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("mouseenter", () => {

    scrollBtn.style.background = "#ff3434";

    scrollBtn.style.transform =
        "translateY(-5px)";

});

scrollBtn.addEventListener("mouseleave", () => {

    scrollBtn.style.background =
        "rgba(15,15,15,0.95)";

    scrollBtn.style.transform =
        "translateY(0px)";

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// PAGE LOADER FADE
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition =
    "opacity 0.8s ease";

// IMAGE PREVIEW

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".project-card img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});