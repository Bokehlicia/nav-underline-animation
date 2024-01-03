window.onload = function () {
  const nav = document.querySelector("ul");
  const navLinks = document.querySelectorAll("ul a");

  function createUnderline() {
    const underline = document.createElement("div");
    underline.classList.add("nav-underline");
    nav.appendChild(underline);
    underline.style.width = navLinks[0].offsetWidth + "px";
    navLinks[0].classList.add("active");
    return underline;
  }
  createUnderline();

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
      const underline = document.querySelector(".nav-underline");
      underline.style.width = link.offsetWidth + "px";
      underline.style.left = link.offsetLeft + "px";
    });
  });
};
