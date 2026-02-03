const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

/* Toggle Mobile Nav */

navToggle.addEventListener("click", () => {
    const visible = nav.getAttribute("data-visible");

   if(visible === "false") {
       nav.setAttribute("data-visible", true);
       navToggle.setAttribute("aria-expanded", true) 
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
   }
});

/*  Add active class to current page link in nav  */


const navLinks = document.querySelectorAll(".primary-navigation-link");
const pathName = window.location.pathname;

navLinks.forEach(navLink => {
    const navLinkPathName = new URL(navLink.href).pathname;
    if((pathName === navLinkPathName) || (pathName === "/index.html" && navLinkPathName === "/")) {
        navLink.classList.add("active");
    }
})


/*   Tab Navigation for Destination Page  */

const tabLinks = document.querySelectorAll(".tab-list-link");

tabLinks.forEach(tabLink => {
    const tabLinkPathName = new URL(tabLink.href).pathname;

    if (pathName === tabLinkPathName) {
        tabLink.classList.add("active")
    }
})




