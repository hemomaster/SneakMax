const accordion = document.querySelectorAll("[data-ui-accordion='item']");

accordion.forEach((el) => {
  el.addEventListener("click", (e) => {
    const self = e.currentTarget;
    const control = self.querySelector('[data-ui-accordion="control"]');
    const content = self.querySelector('[data-ui-accordion="content"]');

    if (e.target.closest('[data-ui-accordion="control"]') != control) return;

    self.classList.toggle("active");

    // если открыт аккордеон
    if (self.classList.contains("active")) {
      control.setAttribute("aria-expanded", true);
      content.setAttribute("aria-hidden", false);
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      control.setAttribute("aria-expanded", false);
      content.setAttribute("aria-hidden", true);
      content.style.maxHeight = null;
    }
  });
});
