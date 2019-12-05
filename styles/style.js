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

$('.card-dec').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});