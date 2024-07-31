const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//loader




//loader













    //Remove lines 41-55 for DEMO-2
    var counter = document.querySelector(".percent");

    TweenLite.set(counter, {
        xPercent: -5,
        yPercent: -5,
    });

    window.addEventListener("mousemove", moveCounter);

    function moveCounter(e) {
        TweenLite.to(counter, 0.5, {
            x: e.clientX,
            y: e.clientY,
        });
    }

    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

        var $bgColor = progress > 99 ? "#F15025" : "#fff";
        var $textColor = progress > 99 ? "#fff" : "#fff";

        $(".counter_bar h1")
            .text(Math.round(progress) + "%")
            .css({ color: $textColor });

        $(".fill")
            .height(progress + "%")
            .css({ backgroundColor: $bgColor });
    }
    progress();
    $(document).on("scroll", progress);

    

const btnHamburguer = document.querySelector(".btn-hamburguer")
const menuBar = document.querySelector('.menu-bar')

window.addEventListener("scroll", (event) => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    const appearMoment = 0.05977165883143049;
    if (scrollPercentage >= appearMoment) {
        btnHamburguer.style.opacity = "1";
        btnHamburguer.style.scale = "1";
    }
    else {
        btnHamburguer.style.opacity = 0;
        btnHamburguer.style.scale = 0;
    }

})

const menuIcon = document.querySelector('.menu-icon');
const html = document.querySelector('html');

btnHamburguer.addEventListener("click", (event) => {
    menuBar.classList.toggle("menu-bar-right")
    menuIcon.classList.toggle('change')
    html.classList.toggle("stop-scrolling")
});

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';



magnets = document.querySelectorAll(".magnetic")

magnets.forEach((magnet) => {
    if(window.innerWidth > 540) {
        magnet.addEventListener("mousemove", function(e) {
            const position = magnet.getBoundingClientRect();

            const x = e.pageX - window.scrollX - position.left-position.width/2
            const y = e.pageY - window.scrollY - position.top-position.height/2;

            magnet.style.transform = "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";
            magnet.style.transition = "all 0s linear";
            magnet.classList.remove("shake")
            
        })
        magnet.addEventListener("mouseleave", function(e) {
            magnet.style.transition = "all 0.2s cubic-bezier(0, 0, 0.72, 0.21";
            magnet.style.transform = "translate(0px, 0px)";

        })
    }
});



// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}



function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('datetime').textContent = `${dateString} ${timeString}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();







































function homescreen() {
    // ID-Card animation with enhanced effects
    gsap.from(".vertical-rectangle", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    });

    // Resume Button Animation
    const resumeTl = gsap.timeline();
    resumeTl.from(".resume_btn", { 
        duration: 1, 
        opacity: 0, 
        scale: 0, 
        ease: "back.out(1.7)" 
    });

    // GSAP animation to reveal nav items
    gsap.from(".nav-links li", {
        duration: 0.5,
        opacity: 0,
        x: -20,
        stagger: 0.2,
        ease: "power2.out"
    });

    // GSAP animation for branding
    gsap.from(".branding", {
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "power2.out",
        delay: 0.5
    });
}

// Main text animation
gsap.from(".huge-text", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    stagger: 0.5,
    ease: "power3.out",
    onComplete: function() {
    }
});

gsap.set('.note', { opacity: 0, y: 50, scale: 0.8, rotation: -10 }); 
gsap.to('.note', {
    opacity: 1,
    y: 0,
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: 'power3.out', // Custom easing for smoothness
    scrollTrigger: {
        trigger: '.note',
        start: 'top 80%',
        end: '+=200',
        toggleActions: 'play none none reverse'
    }
});

homescreen();

function page1() {
    gsap.registerPlugin(ScrollTrigger);

    const texts = document.querySelectorAll("#page1 .text");
    const image = document.querySelector("#page1 .side-image");

    gsap.to(texts, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page1",
            start: "top 50%",  
            end: "bottom 100%",
            toggleActions: "play none none reverse"
        }
    });
    

    gsap.fromTo(image, {
        opacity: 0,
        x: -100
    }, {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page1",
            start: "top 80%", // Adjust as needed
            end: "bottom 20%", // Adjust as needed
            toggleActions: "play none none reverse"
        }
    });
}

page1();



