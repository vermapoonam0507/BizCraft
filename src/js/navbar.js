
// console.log("Navbar JS Loaded");
const menuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#mobile-menu')

const hamburgerIcon = document.querySelector('#hamburger-icon')
const closeIcon = document.querySelector('#close-icon')

menuBtn.addEventListener("click", (e) => {
     e.stopPropagation(); // Prevent document click from firing immediately
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
});

function closeMenu() {    //for handle the code repetition I have use function
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
}

document.addEventListener("click", (e) =>{
    //If click is not inside menu and not on menu button

    if(!mobileMenu.contains(e.target) && 
       !menuBtn.contains(e.target)
    ){
      //  mobileMenu.classList.add("hidden")
      //  hamburgerIcon.classList.remove("hidden")
      //  closeIcon.classList.add("hidden")

      closeMenu();
    }
})

const navLinks = mobileMenu.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});