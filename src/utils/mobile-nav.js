const mobileNav = () => {
const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

// no var, var is outdated
// Event, Callback function
// Arow function () => {}
// State is like flag
// nodelists

let isMobileNavOpen = false;
headerBtn.addEventListener('click',() => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
        mobileNav.style.display ='flex';
        document.body.style.overflowY = 'hidden';
    }
    else {
        mobileNav.style.display='none';
        document.body.style.overflowY = 'auto';
    }
});

// if more paramenters need parathesis

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Logic
            // For
            // UserCases
                isMobileNavOpen = false;
                mobileNav.style.display='none';
                document.body.style.overflowY = 'auto';
        })
    });
};

export default mobileNav;
// imports into main.jss