const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function removeSectionActive() {
    $('.section.active').classList.remove('active');
}
function removeNavActive() {
    $('.nav .active').classList.remove('active');
}

function addNavActive(param) {
    $(`.nav a[data-link=${param}]`).classList.add('active');
}
function addSectionActive(param) {
    $(`#${param}`).classList.add('active');
}
function setActiveColor(color) {
    $(':root').style.setProperty('--skin-color', color);
    setColorIconLang(color)
}
function toggleSettingThemeEvent() {
    const toggle = $('.style-switcher');
    $('.style-switcher-toggle').onclick = (e) => {
        if (toggle.classList.length == 2) {
            toggle.classList.remove('open');
        } else {
            toggle.classList.add('open');
        }
    };
}
function toggleThemeEvent() {
    const toggle = $('body');
    $('.day-night').onclick = (e) => {
        if (toggle.classList.length == 1) {
            toggle.classList.remove('dark');
            $('.day-night').querySelector('i').classList.add('fa-sun');
        } else {
            toggle.classList.add('dark');
            $('.day-night').querySelector('i').classList.remove('fa-sun');
        }
    };
    $('.lang').onclick = (e) => {
        $('.lang span').innerHTML = $('.lang span').innerHTML == 'VN' ? 'ES' : 'VN'
    };
    
}
// function setBackgroundAnimate() {
//     const d = getComputedStyle($('body'));
//     const primaryColor = d.getPropertyValue('--text-black-900');
//     const secondColor = d.getPropertyValue('--text-black-700');
//     console.log(primaryColor, secondColor);
// }
$$('.nav li').forEach((navE) => {
    navE.onclick = (e) => {
        const classSection = e.target.getAttribute('data-link');
        removeNavActive();
        addNavActive(classSection);
        removeSectionActive();
        addSectionActive(classSection);

    };
});

$('.about-hireme-btn').onclick = () => {
    removeNavActive();
    addNavActive('contact');
    removeSectionActive();
    addSectionActive('contact');
}
$('.about-hireme-btn2').onclick = () => {
    removeNavActive();
    addNavActive('contact');
    removeSectionActive();
    addSectionActive('contact');
}
toggleSettingThemeEvent();
toggleThemeEvent();
window.addEventListener('scroll', () => {
    $('.style-switcher').classList.remove('open');
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    // console.log(element.getAttribute('id'),rect);
    return rect.bottom;
}

window.addEventListener('load', () => {
    if ($('body').classList.contains('dark')) {
        $('.day-night').querySelector('i').classList.remove('fa-sun');
    } else {
        $('.day-night').querySelector('i').classList.add('fa-moon');
    }
});

var typed = new Typed('.typing', {
    strings: [
        '',
        'Business Analysis ',
        'Web Developer',
        'Web Developer',
        'Freelancer',
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
});

$('.nav-toggler').onclick = () => {
    $('.aside').classList.toggle('aside-show');
};
$('.nav').onclick = () => {
    $('.aside').classList.toggle('aside-show');
};
tsParticles.load('particles-js', {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 150,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#302e4d',
        },
        links: {
            color: '#504e70',
            distance: 70,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 50,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
});

function mailto() {
    const name = $("input[name='name']").value;
    const email = $("input[name='email']").value;
    const subject = $("input[name='subject']").value;
    const content = $("textarea[name='content']").value;
    window.location.href = `mailto:thienv29@gmail.com?subject=${subject}&body=${content}`;
}

const stringDirecLogo = [
    'nextjs',
    'angular',
    'nestjs',
    'reactjs',
    'nodejs',
    'springboot',
];
let count = 0;
setInterval(() => {
    if (count == 6) {
        count = 0;
    }
    const logo = $('.' + stringDirecLogo[count]);
    const d = getComputedStyle($('body'));
    const primaryColor = d.getPropertyValue('--skin-color');
    setColorIconLang(primaryColor)
    $('.icon-lang.active')?.classList.remove('active');
    logo.classList.add('active');
    count++;
}, 2000);

function setColorIconLang(primaryColor) {
  $('.nextjs svg path').setAttribute('fill', primaryColor);
  $('.nestjs svg path').setAttribute('fill', primaryColor);
  $('.springboot svg path').setAttribute('fill', primaryColor);
  $$('.nodejs svg path').forEach((element) => {
      element.setAttribute('fill', primaryColor);
  });
  $('.reactjs svg circle').setAttribute('fill', primaryColor);
  $('.reactjs svg g').setAttribute('stroke', primaryColor);
  $('.angular svg style').innerHTML = `.st0 { fill: ${primaryColor};}.st2 {fill: #ffffff;}`;
  
}


$('#link-domain').innerHTML=`${window.location.hostname}`
$('#link-domain').setAttribute('href', `https://${window.location.hostname}`);

$('#link-domain2').innerHTML=`${window.location.hostname}`
$('#link-domain2').setAttribute('href', `https://${window.location.hostname}`);

$('#age-author').innerHTML=`${new Date().getFullYear() - 2001}`

