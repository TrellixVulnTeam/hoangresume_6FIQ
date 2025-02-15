

(function() {

    // Add smooth scroll effect to the anchors
    let anchors =  document.querySelectorAll(".anchor-link");
    anchors = Array.prototype.slice.call(anchors);
    anchors.map(function (cur) {
        let targetID = cur.classList[1].slice(0,-7);
        cur.addEventListener("click", function () {
            document.getElementById(targetID).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        })
    });



    var skillElements = document.querySelectorAll(".skill-element"),
        projectElements = document.querySelectorAll(".project-element");

    skillElements = Array.prototype.slice.call(skillElements);
    projectElements = Array.prototype.slice.call(projectElements);


    $(window).ready(function () {

        let skillPos = $("#skill-left-top").offset().top + $("#skill-left-top").outerHeight(),
            windowHeight = $(window).height(),
            projectPos = $(".project-element").offset().top + $(".project-element").outerHeight();

        let windowWidth = $(window).width();

        if (windowWidth < 780) {
            projectPos += 1200;
        }

        //Slide the greetings to the right
        setTimeout(function () {
                    let mainDescript = document.querySelector(".main-description");
        if (windowWidth > 768) {
            mainDescript.style.left = "18%";
        } else {
            mainDescript.style.left = "5%";
        }
        mainDescript.style.opacity = "0.8";
        }, 500);

        document.querySelector(".mobile-nav").style.width = windowWidth;

        let lastPos = 0;
        $(window).scroll(function () {
            document.querySelector(".mobile-nav").style.width = windowWidth;

            var curPos = $(this).scrollTop();

            if (curPos - lastPos > 10) {
                document.querySelector(".mobile-nav").style.marginTop = "-50px";
            }

            if ((curPos - lastPos < -10) || curPos == 0) {
                document.querySelector(".mobile-nav").style.marginTop = "0";
            }

            lastPos = curPos;

            // console.log("curpos: " + curPos + "    " + "skillPos: " + skillPos);

            if (curPos > skillPos + 0.8*windowHeight) {
                skillElements.map(function (cur) {
                    cur.style.display = "inline-block";
                    cur.classList.add("animated");
                });

                if (windowWidth <= 1200) {
                    skillElements.map(function (cur) {
                        cur.classList.add("fadeInLeft");
                    });
                } else {
                    document.getElementById("skill-left-top").classList.add("fadeInLeft");
                    document.getElementById("skill-left-bot").classList.add("fadeInLeft");
                    document.getElementById("skill-cen-top").classList.add("fadeInDown");
                    document.getElementById("skill-cen-bot").classList.add("fadeInUp");
                    document.getElementById("skill-right-top").classList.add("fadeInRight");
                    document.getElementById("skill-right-bot").classList.add("fadeInRight");
                }
            }

            if (curPos > projectPos + windowHeight) {
                projectElements.map(function (cur) {
                    cur.style.display = "inline-block";
                    cur.classList.add("zoomIn", "animated");
                });
            }

        });
    });


    document.getElementById('mobile-toggle').addEventListener("click", function () {
        document.getElementById('sidebar').classList.toggle("active");
    });

    document.getElementById('page-content').addEventListener("click", function () {
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

    document.getElementById("window-nav-bar").addEventListener("click", function () {
        skillElements.map(function (cur) {
            cur.style.display = "inline-block"
        });
        projectElements.map(function (cur) {
            cur.style.display = "inline-block"
        })
    });

    document.getElementById("mobile-nav-bar").addEventListener("click", function () {
        document.getElementById('sidebar').classList.remove("active");
        skillElements.map(function (cur) {
            cur.style.display = "inline-block"
        });
        projectElements.map(function (cur) {
            cur.style.display = "inline-block"
        })
    });

})();