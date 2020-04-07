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


    //Nav Items
let navItems = document.querySelectorAll('nav a')
for (let i = 0; i < navItems.length; i++){
  let navContents = Object.values(siteContent .nav)
  navItems[i].textContent = navContents[i]
  navItems[i].style.color = 'green'
}

const navNew1 = document.querySelector('nav')

const subNav = document.createElement('a')
subNav.textContent = 'last'
navNew1.appendChild(subNav)

const preNav = document.createElement('a')
preNav.textContent = 'first'
navNew1.prepend(preNav)



// let greenNav =document.querySelectorAll('a')
// greenNav.style.color = 'green'

      //middle section
const h1s = document.querySelector('.cta h1')
 let h1sText = siteContent['cta']['h1']
 h1s.textContent = h1sText

 let mpg = document.getElementById('cta-img');
 mpg.setAttribute('src', siteContent['cta']['img-src'])

 let button = document.querySelector('button')
let buttonText = siteContent['cta']['button']
button.textContent = buttonText

      //Body Section
          //Features


let fTitlesTop = document.querySelectorAll('h4')[0]
let fText = siteContent["main-content"]["features-h4"]
fTitlesTop.textContent = fText

let fpTitlesTop = document.querySelectorAll('p')[0]
let fpText = siteContent["main-content"]["features-content"]
fpTitlesTop.textContent = fpText

      //About
let aTitlesTop = document.querySelectorAll('h4')[1]
let aText = siteContent["main-content"]["about-h4"]
aTitlesTop.textContent = aText

let apTitlesTop = document.querySelectorAll('p')[1]
let apText = siteContent["main-content"]["about-content"]
apTitlesTop.textContent = apText

//       //Middle img

 let bpg = document.getElementById('middle-img');
 bpg.setAttribute('src', siteContent['main-content']['middle-img-src'])
       //Serivces

let sTitlesBottom = document.querySelectorAll('h4')[2]
let sText = siteContent["main-content"]["services-h4"]
sTitlesBottom.textContent = sText

let spTitlesBottom = document.querySelectorAll('p')[2]
let spText = siteContent["main-content"]["services-content"]
spTitlesBottom.textContent = spText

//       //Product

let pTitlesBottom = document.querySelectorAll('h4')[3]
let pText = siteContent["main-content"]["product-h4"]
pTitlesBottom.textContent = pText

let ppTitlesBottom = document.querySelectorAll('p')[3]
let ppText = siteContent["main-content"]["product-content"]
ppTitlesBottom.textContent = ppText


//       //Vision

let vTitlesBottom = document.querySelectorAll('h4')[4]
let vText = siteContent["main-content"]["vision-h4"]
vTitlesBottom.textContent = vText

let vpTitlesBottom = document.querySelectorAll('p')[4]
let vpText = siteContent["main-content"]["vision-content"]
vpTitlesBottom.textContent = vpText

          // const h4s = document.querySelectorAll('h4 .text-content')          
// for (let i = 0; i < h4s.length; i++)
// const contents = 
// h4s[i].textContent = contents



      //Contact

let contact = document.querySelectorAll('h4')[5]
let contactText = siteContent["contact"]["contact-h4"]
contact.textContent = contactText

let address = document.querySelectorAll('p')[5]
let addressText = siteContent['contact']["address"]
address.textContent = addressText

let phone = document.querySelectorAll('p')[6]
let phoneText = siteContent['contact']["phone"]
phone.textContent = phoneText

let email = document.querySelectorAll('p')[7]
let emailText = siteContent['contact']["email"]
email.textContent = emailText



      //copyright

      let copyright = document.querySelectorAll('p')[8]
      let copyrightText = siteContent['footer']["copyright"]
      copyright.textContent = copyrightText
  



