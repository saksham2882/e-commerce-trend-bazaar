var index = 0;
const mainImages = document.getElementsByClassName('main-img');
const iconImages = document.getElementsByClassName('icon-img');
const imagesContainer = document.getElementsByClassName('images')[0];
const imgSlider = document.getElementsByClassName('img-slider')[0];
const mainTitle = document.getElementById('main-title');
const mainDesc = document.getElementById('main-desc');
let autoSlideInterval;

const content = [
    {
        title: "Sharp <br> Trends",
        description: "Level up with bold men’s fashion, from sleek suits to rugged jackets, crafted for the modern guy who owns the vibe."
    },
    {
        title: "Chic <br> Steals",
        description: "Snag up to 50% off on stunning women’s dresses and accessories, perfect for slaying every look at killer prices."
    },
    {
        title: "Bold <br> Glam",
        description: "Stand out with vibrant women’s outfits, blending edgy patterns and premium fabrics for a fearless fashion statement."
    },
    {
        title: "Classic <br> Edge",
        description: "Redefine style with timeless men’s pieces, from tailored pants to casual tees, built for every occasion with swagger."
    },
    {
        title: "Runway <br> Vibes",
        description: "Bring high-fashion women’s looks home with designer-inspired dresses and accessories at prices that pop."
    },
    {
        title: "Timeless <br> Glow",
        description: "Shop iconic women’s styles that never fade, crafted with elegance for every season and every moment."
    },
    {
        title: "Street <br> Heat",
        description: "Own the streets with men’s urban gear, mixing comfort and fresh drip for a confident look every day."
    },
    {
        title: "Vogue <br> Glow",
        description: "Curated women’s essentials for a polished vibe, blending trendy cuts with effortless sophistication."
    },
    {
        title: "Party <br> Sparkle",
        description: "Shine bright with women’s glamorous outfits, from sparkling dresses to chic heels, ready for any event."
    },
    {
        title: "Power <br> Fits",
        description: "Command attention with bold men’s fashion, featuring sleek jackets and tailored fits for ultimate style."
    },
    {
        title: "Casual <br> Chic",
        description: "Keep it cool with women’s casual looks, blending comfy athleisure with trendy designs for everyday flair."
    },
    {
        title: "Street <br> Pop",
        description: "Rock urban-inspired women’s outfits, combining bold prints and relaxed fits for a fearless fashion vibe."
    },
    {
        title: "Effortless <br> Shine",
        description: "Embrace easy elegance with women’s curated styles, designed for day-to-night transitions with a chic touch."
    }
];


const updateSlideshow = () => {
    // Hide all images
    for (var i = 0; i < mainImages.length; i++) {
        mainImages[i].classList.remove('active');
    }

    // Fade out text
    if (mainTitle && mainDesc) {
        mainTitle.style.opacity = '0';
        mainDesc.style.opacity = '0';
    }

    // Small delay for smooth
    setTimeout(() => {
        // Show active image
        mainImages[index].classList.add('active');

        // Update thumbnails
        for (var j = 0; j < iconImages.length; j++) {
            iconImages[j].classList.toggle('active', j === index);
        }

        // Update text
        if (mainTitle && mainDesc) {
            mainTitle.innerHTML = content[index].title;
            mainDesc.innerHTML = content[index].description;
            mainTitle.style.opacity = '1';
            mainDesc.style.opacity = '1';
        }

        // Scroll thumbnail slider
        if (imgSlider) {
            imgSlider.scrollLeft = index * 70;
        }
    }, 50);
};

// auto slideshow
const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        index = (index + 1) % mainImages.length;
        updateSlideshow();
    }, 3000);
};

// Theme toggle
const themeIcon = document.getElementById('light');
themeIcon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    themeIcon.src = document.body.classList.contains('dark-theme') ? 'images/sun.png' : 'images/moon.png';
};

// Preloader
const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    if (navMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    } else {
        menuIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
});

// Close menu on link click
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.querySelector('.menu-icon').style.display = 'inline-block';
        document.querySelector('.close-icon').style.display = 'none';
    });
});

window.addEventListener('resize', updateSlideshow);

updateSlideshow();
startAutoSlide();