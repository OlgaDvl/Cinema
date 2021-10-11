const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
const cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
  // event.target.classList.toggle('acvive');
  if (!event.target.classList.contains('booked')) {
    // console.log(" Это место не занято!");
     event.target.classList.toggle('acvive');
     let totalSeats = schemeSvg.querySelectorAll('.acvive').length;
     totalPrice =  totalSeats * cost;
     totalPriceTag.textContent = totalPrice;
    //  console.log(schemeSvg.querySelectorAll('.acvive').length);
  }
});

menuButton.addEventListener('click', () => {
  // console.log('Кликнули по меню' );
  // menu.style.display = "block";
  menu.classList.toggle('is-open');
})