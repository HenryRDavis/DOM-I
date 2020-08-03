const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let image = document.getElementById("cta-img");
image.setAttribute('src', siteContent["cta"]["img-src"])

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navItem1 = document.getElementsByTagName("a")
const navItem2 = document.getElementsByTagName("a")
const navItem3 = document.getElementsByTagName("a")
const navItem4 = document.getElementsByTagName("a")
const navItem5 = document.getElementsByTagName("a")
const navItem6 = document.getElementsByTagName("a")

const firstText = document.getElementsByTagName('h1')
const firstButton = document.getElementsByTagName('button')

const bottomText = document.getElementsByTagName('h4')
const secondText = document.getElementsByTagName('h4')
const thirdText = document.getElementsByTagName('h4')
const fourthText = document.getElementsByTagName('h4')
const fifthText = document.getElementsByTagName('h4')

const normal1 = document.getElementsByTagName('p')
const normal2 = document.getElementsByTagName('p')
const normal3 = document.getElementsByTagName('p')
const normal4 = document.getElementsByTagName('p')
const normal5 = document.getElementsByTagName('p')

const footer = document.getElementsByTagName('p')

const section = document.getElementsByTagName('h4')
const section1 = document.getElementsByTagName('p')
const section2 = document.getElementsByTagName('p')
const section3 = document.getElementsByTagName('p')


navItem1[0].textContent = 'Services'
navItem2[1].textContent = 'Product'
navItem3[2].textContent = 'Vision'
navItem4[3].textContent = 'Features'
navItem5[4].textContent = 'About'
navItem6[5].textContent = 'Contact'


firstText[0].textContent = 'DOM Is Awesome'
firstButton[0].textContent = 'Get Started'


bottomText[0].textContent = 'Features'
secondText[1].textContent = 'About'
thirdText[2].textContent = 'Services'
fourthText[3].textContent = 'Product'
fifthText[4].textContent = 'Vision'

normal1[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
normal2[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
normal3[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
normal4[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
normal5[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


section[5].textContent = 'Contact'
section1[5].textContent = '123 Way 456 Street Somewhere, USA"'
section2[6].textContent = '1 (888) 888-8888'
section3[7].textContent = 'sales@greatidea.io'

footer[8].textContent = 'Copyright Great Idea! 2018'