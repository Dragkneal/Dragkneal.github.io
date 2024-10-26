//NAVBAR TOGGLE
function toggleNavbar() {
  const elements = document.querySelectorAll(".hiddenNav, .active");
  elements.forEach((element) => {
    if (element.classList.contains("hiddenNav")) {
      element.classList.remove("hiddenNav");
      element.classList.add("active");
    } else {
      element.classList.remove("active");
      element.classList.add("hiddenNav");
    }
  });
}

function toggleItems() {
  const elements = document.querySelectorAll(
    ".navContainer li:nth-child(n+3):nth-child(-n+7)"
  );
  elements.forEach((element) => {
    if (element.classList.contains("act")) {
      element.classList.remove("act");
    } else {
      element.classList.add("act");
    }
  });
}

function toggleBoth() {
  toggleNavbar();
  toggleItems();
}
