function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".toggle-icon")

    console.log("clicked....")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}