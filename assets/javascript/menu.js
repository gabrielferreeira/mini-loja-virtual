const buttonMenu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

buttonMenu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
