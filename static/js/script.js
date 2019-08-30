

var skillElements = document.querySelectorAll(".skill-element"),
    projectElements = document.querySelectorAll(".project-element");

skillElements = Array.prototype.slice.call(skillElements);
projectElements = Array.prototype.slice.call(projectElements);


var skillPos = $("#skill-left-top").offset().top,
    windowHeight = $(window).height(),
    projectPos = $(".project-element").offset().top;


$(window).ready(function () {
   $(window).scroll(function () {
       var curPos = $(this).scrollTop();
       if (curPos > skillPos + 0.8*windowHeight) {
            skillElements.map(function (cur) {
                cur.style.display = "inline-block";
                cur.classList.add("animated");
            });
            document.getElementById("skill-left-top").classList.add("fadeInLeft");
            document.getElementById("skill-left-bot").classList.add("fadeInLeft");
            document.getElementById("skill-cen-top").classList.add("fadeInDown");
            document.getElementById("skill-cen-bot").classList.add("fadeInUp");
            document.getElementById("skill-right-top").classList.add("fadeInRight");
            document.getElementById("skill-right-bot").classList.add("fadeInRight");
       }

       if (curPos > projectPos + 1.6*windowHeight) {
            projectElements.map(function (cur) {
               cur.style.display = "inline-block";
               cur.classList.add("fadeInDown", "animated");
            });
       }

   });
});


document.getElementById('mobile-toggle').addEventListener("click", function () {
   document.getElementById('sidebar').classList.toggle("active");
});

document.getElementById('page-content').addEventListener("click", function() {
    document.getElementById('sidebar').classList.remove("active");
});

let j = 0;

let elements = document.querySelectorAll(".skill-element");
for (let i = 0; i < 6; i++) {
    let cur = elements[i];

    cur.addEventListener("mouseenter", function () {

        cur.childNodes[1].style.marginLeft = "0px";

        setTimeout(function () {
            if (cur.childNodes[1].style.marginLeft !== "100px") {
                cur.childNodes[3].style.display = "flex";
                //cur.childNodes[3].style.transition = "all 5.0s";
                //cur.childNodes[3].style.opacity = "1";
                cur.childNodes[3].classList.add("flipInX", "animated");
            }
        }, 200);
        cur.childNodes[3].classList.remove("flipInX", "animated");

    });

    cur.addEventListener("mouseleave", function () {
        cur.childNodes[1].style.marginLeft = "100px";
        cur.childNodes[3].style.display = "none";
    });

}