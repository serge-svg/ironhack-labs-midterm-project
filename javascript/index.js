  const nav = document.querySelector('.nav');
  const contact_li = document.querySelector('#contact-li');

  const burguerOn = document.querySelector('.burguer-icon-on');
  const burguerOff = document.querySelector('.burguer-icon-off');

  burguerOn.addEventListener("click", () => {
    nav.classList.add("visible");
    contact_li.style.display = 'block';
  })

  burguerOff.addEventListener("click", () => {
      nav.classList.remove("visible"); 
      contact_li.style.display = 'none';         
  })


