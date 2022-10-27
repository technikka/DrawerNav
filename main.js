const trigger = document.getElementById("trigger");
const drawer = document.getElementById("nav-drawer");
const closeBtn = document.getElementById("close");

const toggleTrigger = () => {
  trigger.classList.toggle("show");
};

const toggleDrawer = () => {
  drawer.classList.toggle("show");
};

const toggleCloseBtn = () => {
  closeBtn.classList.toggle("show");
};

trigger.addEventListener("click", () => {
  toggleTrigger();
  toggleDrawer();
  toggleCloseBtn();
});

closeBtn.addEventListener('click', () => {
  toggleTrigger();
  toggleDrawer();
  toggleCloseBtn();
})
