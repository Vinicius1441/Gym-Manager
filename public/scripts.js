const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a"); // Todos os "a" que estão dentro de .links no header

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}
