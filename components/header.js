function headerComponent(container) {
  const componenteHeader = document.createElement("div");
  componenteHeader.innerHTML = `
  <header class="header">
  <div class="header__nombre">
    
    <a style="text-decoration: none"
    href="./index.html" >Kliabaras J.</a>
  </div>

  

  <div class="header__hamburguesa">
    <div class="header__hamburguesa__rectangulo"></div>
    <div class="header__hamburguesa__rectangulo"></div>
    <div class="header__hamburguesa__rectangulo"></div>
  </div>

  <div class="header__menu">
          <nav class="header__menu__links">
          <a
          style="text-decoration: none"
          href="./portfolio.html"
          class="menu-hamburguesa__links__link"
          >Portfolio</a
        >
        <a
          style="text-decoration: none"
          href="./servicios.html"
          class="menu-hamburguesa__links__link"
          >Servicios</a
        >
        <a
          style="text-decoration: none"
          href="./contacto.html"
          class="menu-hamburguesa__links__link"
          >Contacto</a
        >
         
          </nav>
        </div>
</header>
<div class="container-menu-hamburguesa">
  <div class="menu-hamburguesa">
    <button class="menu-hamburguesa__cerrar">X</button>
    <nav class="menu-hamburguesa__links">
      <a
        style="text-decoration: none"
        href="./portfolio.html"
        class="menu-hamburguesa__links__link"
        >Portfolio</a
      >
      <a
        style="text-decoration: none"
        href="./servicios.html"
        class="menu-hamburguesa__links__link"
        >Servicios</a
      >
      <a
        style="text-decoration: none"
        href="./contacto.html"
        class="menu-hamburguesa__links__link"
        >Contacto</a
      >
    </nav>
  </div>
</div>`;

  const hamburguesaAbrir = componenteHeader.querySelector(
    ".header__hamburguesa"
  );
  const menu = componenteHeader.querySelector(".container-menu-hamburguesa");
  const hamburguesaCerrar = componenteHeader.querySelector(
    ".menu-hamburguesa__cerrar"
  );

  hamburguesaAbrir.addEventListener("click", (e) => {
    menu.style.display = "initial";
  });

  hamburguesaCerrar.addEventListener("click", (e) => {
    menu.style.display = "";
  });

  container.appendChild(componenteHeader);
}
