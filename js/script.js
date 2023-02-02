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
}
function toggleSettingThemeEvent() {
    const toggle = $('.style-switcher');
    $('.style-switcher-toggle').onclick = (e) => {
        console.log(toggle.classList.length);
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
        console.log(toggle.classList.length);
        if (toggle.classList.length == 1) {
            toggle.classList.remove('dark');
            $('.day-night').querySelector('i').classList.add('fa-sun');
        } else {
            toggle.classList.add('dark');
            $('.day-night').querySelector('i').classList.remove('fa-sun');
        }
        setBackgroundAnimate();
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
        addSectionActive(classSection)

        // hiddenAllSection();
        // $('.'+classSection).classList.remove('hidden');
    };
});
toggleSettingThemeEvent();
toggleThemeEvent();
window.addEventListener('scroll', () => {
        $('.style-switcher').classList.remove('open');
    // let hashMap = {}
    // let keyMax =''
    // $$('.section').forEach((sectionElement) => {
    //   const topValue = isInViewport(sectionElement)
    //   hashMap[topValue] = sectionElement.getAttribute('id');
        
    // });
    // Object.keys(hashMap).sort((a,b)=>a-b).every(v => {
    //   // if (v == 0){
    //   //   keyMax=v;
    //   //   return false
    //   // }
    //   if (v > 0){
    //     keyMax=v;
    //     return false
    //   }
    //   return true
    // });
    // removeNavActive();
    // addNavActive(hashMap[keyMax]);
});
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  // console.log(element.getAttribute('id'),rect);
  return rect.bottom
}


window.addEventListener('load', () => {
    if ($('body').classList.contains('dark')) {
        $('.day-night').querySelector('i').classList.remove('fa-sun');
    } else {
        $('.day-night').querySelector('i').classList.add('fa-moon');
    }
});

var typed = new Typed('.typing', {
    strings: ['','Web Designer', 'Web Developer', 'Graphic Designer', 'YouTuber '],
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
// particlesJS('particles-js', {
//   particles: {
//       number: { value: 80, density: { enable: true, value_area: 800 } },
//       color: { value: '#302e4d' },
//       shape: {
//           type: 'circle',
//           stroke: { width: 0, color: '#000000' },
//           polygon: { nb_sides: 5 },
//           image: { src: 'img/github.svg', width: 100, height: 100 },
//       },
//       opacity: {
//           value: 0.5,
//           random: false,
//           anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//       },
//       size: {
//           value: 3,
//           random: true,
//           anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//       },
//       line_linked: {
//           enable: true,
//           distance: 150,
//           color: '#504e70',
//           opacity: 0.4,
//           width: 1,
//       },
//       move: {
//           enable: true,
//           speed: 6,
//           direction: 'none',
//           random: false,
//           straight: false,
//           out_mode: 'out',
//           bounce: false,
//           attract: { enable: false, rotateX: 600, rotateY: 1200 },
//       },
//   },
//   interactivity: {
//       detect_on: 'canvas',
//       events: {
//           onhover: { enable: true, mode: 'repulse' },
//           onclick: { enable: true, mode: 'push' },
//           resize: true,
//       },
//       modes: {
//           grab: { distance: 400, line_linked: { opacity: 1 } },
//           bubble: {
//               distance: 400,
//               size: 40,
//               duration: 2,
//               opacity: 8,
//               speed: 3,
//           },
//           repulse: { distance: 200, duration: 0.4 },
//           push: { particles_nb: 4 },
//           remove: { particles_nb: 2 },
//       },
//   },
//   retina_detect: true,
// });
// tsParticles.load("particles-js", {
//   fps_limit: 60,
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onclick: { enable: true, mode: "repulse" },
//       onhover: {
//         enable: true,
//         mode: "bubble",
//         parallax: { enable: false, force: 60, smooth: 10 }
//       },
//       resize: true
//     },
//     modes: {
//       bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
//       grab: { distance: 400, line_linked: { opacity: 1 } },
//       push: { particles_nb: 4 },
//       remove: { particles_nb: 2 },
//       repulse: { distance: 200, duration: 0.4 }
//     }
//   },
//   particles: {
//     color: { value: "random" },
//     line_linked: {
//       color: "random",
//       distance: 150,
//       enable: true,
//       opacity: 0.4,
//       width: 3
//     },
//     move: {
//       attract: { enable: false, rotateX: 600, rotateY: 1200 },
//       bounce: false,
//       direction: "none",
//       enable: true,
//       out_mode: "out",
//       random: false,
//       speed: 3,
//       straight: false
//     },
//     number: { density: { enable: true, value_area: 800 }, value: 100 },
//     opacity: {
//       anim: { enable: true, opacity_min: 0.5, speed: 1, sync: false },
//       random: false,
//       value: 1
//     },
//     shape: {
//       character: [
//         {
//           fill: true,
//           font: "Font Awesome 5 Brands",
//           style: "",
//           value: ["\uf179", "\uf38b", "\uf3b9", "\uf13b", "\uf1cb"],
//           weight: "400"
//         },
//         {
//           fill: true,
//           font: "Font Awesome 5 Free",
//           style: "",
//           value: ["\uf06a", "\uf7ba", "\uf3ed", "\uf55f", "\uf013"],
//           weight: "900"
//         }
//       ],
//       image: {
//         height: 100,
//         replace_color: true,
//         src: "images/github.svg",
//         width: 100
//       },
//       polygon: { nb_sides: 5 },
//       stroke: { color: "#ffffff", width: 1 },
//       type: "char"
//     },
//     size: {
//       anim: { enable: true, size_min: 10, speed: 10, sync: false },
//       random: false,
//       value: 16
//     }
//   },
//   polygon: {
//     draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
//     move: { radius: 10 },
//     scale: 1,
//     type: "none",
//     url: ""
//   },
//   retina_detect: true
// });
tsParticles.load("particles-js", {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#302e4d'
    },
    links: {
      color: '#504e70',
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
});

// setTimeout(() => {
//   console.log('ss');
//   const canvas = $('.particles-js-canvas-el')
// const context = canvas.getContext('2d');
// context.clearRect(0, 0, canvas.width, canvas.height);
// }, 2000);

