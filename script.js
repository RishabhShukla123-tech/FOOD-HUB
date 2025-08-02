// script.js
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Instead of alert, go to payment page
      window.location.href = "order.html";
    });
  });
});