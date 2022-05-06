//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buscarImagen(id, arrayIncludes) {
  const encontrado = arrayIncludes.find((x) => {
    return x.sys.id == id;
  });

  return encontrado.fields.file.url;
}

function servicesCardGenerator(objetoServicios) {
  const containerTemplate = document.querySelector(".services__container");
  const template = document.querySelector("#services__card");

  objetoServicios.forEach((x) => {
    const titulo = template.content.querySelector(
      ".services__container__service__title"
    );
    const descripcion = template.content.querySelector(
      ".services__container__service__explication"
    );
    const imagen = template.content.querySelector(
      ".services__container__service__img"
    );

    titulo.textContent = x.titulo;
    descripcion.textContent = x.descripcion;
    imagen.src = x.imagen;

    const clonTemplate = document.importNode(template.content, true);

    containerTemplate.appendChild(clonTemplate);
  });
}

function servicesApi() {
  fetch(
    "https://cdn.contentful.com/spaces/qmut18o4fpit/environments/master/entries?access_token=f-zs6G1D7Z4SfPdF_EAsBP_4hJTYcMx2ZGLDV48xRQ4&content_type=servicio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const serviciosObjeto = data.items.map((servicio) => {
        return {
          titulo: servicio.fields.titulo,
          descripcion: servicio.fields.descripcion,
          imagen: buscarImagen(
            servicio.fields.imagen.sys.id,
            data.includes.Asset
          ),
        };
      });

      servicesCardGenerator(serviciosObjeto);
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() {
  const containerHeader = document.querySelector(".welcome__header-container");
  headerComponent(containerHeader);

  const containerFooter = document.querySelector(".footer__container");
  footerComponent(containerFooter);

  const containerContactForm = document.querySelector(".contact__container");
  contactFormComponent(containerContactForm);

  servicesApi();
}

main();
