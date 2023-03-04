  const nav = document.querySelector('.nav');
  const burguerOn = document.querySelector('.burguer-icon-on');
  const burguerOff = document.querySelector('.burguer-icon-off');

  burguerOn.addEventListener("click", () => {
    nav.classList.add("visible");
  })

  burguerOff.addEventListener("click", () => {
    nav.classList.remove("visible");
  })


