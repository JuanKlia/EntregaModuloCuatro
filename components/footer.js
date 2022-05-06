function footerComponent(container) {
  const componenteFooter = document.createElement("div");
  componenteFooter.innerHTML = `
    <footer class="footer">
    <p class="footer__nombre">Kliabaras J.</p>
    <nav class="footer__links">
      <a
        style="text-decoration: none"
        href="https://www.instagram.com/juan.kliabaras/"
        class="footer__links__link"
        >Instagram <img src="./imgs/instagram (2).png" alt=""
      /></a>
      <a
        style="text-decoration: none"
        href="https://www.linkedin.com/in/juan-ignacio-kliabaras-14a793192/"
        class="footer__links__link"
        >Linkedin <img src="./imgs/linkedin (2).png" alt="" />
      </a>
      <a
        style="text-decoration: none"
        href="https://github.com/JuanKlia"
        class="footer__links__link"
        >GitHub <img src="./imgs/github (1).png" alt=""
      /></a>
    </nav>
  </footer>`;

  container.appendChild(componenteFooter);
}
