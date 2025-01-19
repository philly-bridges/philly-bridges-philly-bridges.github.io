const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".menu-icon");
const menuItems = document.querySelectorAll(".sidebar-menu a");
const navLinks = document.querySelectorAll(".nav-items a");
const sections = document.querySelectorAll("section"); 
const currentUrl = window.location.href;

const openSidebar = () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
};

const closeSidebar = () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
};

openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

menuItems.forEach((item) => {
  item.addEventListener("click", closeSidebar);
});

const setActiveLink = () => {
  let found = false;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.scrollY + window.innerHeight / 2 >= sectionTop &&
      window.scrollY + window.innerHeight / 2 <= sectionTop + sectionHeight
    ) {

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });

      menuItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${sectionId}`) {
          item.classList.add("active");
        }
      });

      found = true;
    }
  });

  if (!found) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
};

window.addEventListener("scroll", setActiveLink);

setActiveLink();
