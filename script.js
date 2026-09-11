function enterSite() {
    document.querySelector(".hero").classList.add("exit");

    setTimeout(() => {
        window.location.href = "#about";
    }, 700);
}