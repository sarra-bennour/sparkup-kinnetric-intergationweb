document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu")
    const navLinks = document.querySelector(".nav-links")
  
    function toggleSidebar() {
      hamburger.classList.toggle("change")
      navLinks.classList.toggle("active")
      document.body.classList.toggle("sidebar-open")
    }
  
    if (hamburger) {
      hamburger.addEventListener("click", toggleSidebar)
    }
  
    // Close sidebar when clicking on a link
    const links = document.querySelectorAll(".nav-links a")
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          toggleSidebar()
        }
      })
    })
  
    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideSidebar = navLinks.contains(event.target)
      const isClickOnHamburger = hamburger.contains(event.target)
  
      if (!isClickInsideSidebar && !isClickOnHamburger && navLinks.classList.contains("active")) {
        toggleSidebar()
      }
    })
  })
  
  