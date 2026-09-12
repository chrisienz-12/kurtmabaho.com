/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1200);

});


/* =========================
   ENTER BUTTON
========================= */

function enterSite() {

    const hero =
        document.querySelector(".hero");

    hero.classList.add("exit");

    setTimeout(() => {

        document
            .querySelector("#about")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 700);

}


/* =========================
   NAVIGATION HIDE / SHOW
========================= */

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    const nav =
        document.querySelector("nav");

    const currentScrollY =
        window.scrollY;

    if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
    ) {

        nav.classList.add("hidden");

    } else {

        nav.classList.remove("hidden");

    }

    lastScrollY = currentScrollY;

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    document
        .querySelector(".mobile-menu")
        .classList.toggle("open");

}

function closeMenu() {

    document
        .querySelector(".mobile-menu")
        .classList.remove("open");

}


/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
    document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";

});


const interactiveElements =
    document.querySelectorAll(
        "a, button"
    );


interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursor.classList.add("hover");

        }
    );

    element.addEventListener(
        "mouseleave",
        () => {

            cursor.classList.remove("hover");

        }
    );

});
