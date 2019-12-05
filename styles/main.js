function change(x) {
    var sel = document.querySelector('.select');
    if (sel) sel.className = 'con-btn';
    document.getElementById("btn-main_" + x).className = "btn btn-warning select";
}

const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector(".arrow-btn");
    burger.addEventListener("click", () => {
        navList.classList.toggle("active");
        burger.classList.toggle("toggler");
    });
}
navSlide();
