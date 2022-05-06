function contactFormComponent(container) {
  const contactFormComponent = document.createElement("div");
  contactFormComponent.innerHTML = `
  <div class="contact">
    <h3 class="contact__title">Escribime</h3>

    <form class="contact__form">
      <div class="contact__form__field">
        <label for="name" class="contact__form__field__label">Nombre</label>
        <input name="nombre" class="contact__form__field__input" type="text" id="name" />
      </div>
      <div class="contact__form__field">
        <label for="email" class="contact__form__field__label">Email</label>
        <input
        name="email"
          class="contact__form__field__input"
          type="email"
          id="email"
        />
      </div>
      <div class="contact__form__field">
        <label for="mensaje" class="contact__form__field__label"
          >Mensaje</label
        >
        <textarea name="mensaje" id="mensaje"></textarea>
      </div>
      <button class="contact__form__button">Enviar</button>
    </form>
    </div>`;

  const contactoForm = contactFormComponent.querySelector(".contact__form");

  contactoForm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const form = evento.target;
    const fields = new FormData(form);
    const objetoRespuesta = Object.fromEntries(fields.entries());

    const mensaje = {
      to: "juankliabaras@gmail.com",
      message: `{Soy: ${objetoRespuesta.nombre}. 
                 Mi Email: ${objetoRespuesta.email}. 
                 Mi Mensaje: "${objetoRespuesta.mensaje}"}`,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "content-type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });

    form.reset();
  });

  container.appendChild(contactFormComponent);
}
