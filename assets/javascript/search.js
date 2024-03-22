const buttonOpen = document.querySelector(".search-button");
const buttonExit = document.querySelector(".exit-button");
const searchInput = document.querySelector(".input-control");
const input = document.querySelector(".input-control input");

buttonOpen.addEventListener("click", function () {
  setTimeout(function () {
    searchInput.classList.add("active");
    input.focus();
  }, 300);
});

buttonExit.addEventListener("click", function () {
  searchInput.classList.remove("active");
});
