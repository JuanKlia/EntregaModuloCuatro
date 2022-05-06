function buscarImagen(id, arrayIncludes) {
  const encontrado = arrayIncludes.find((x) => {
    return x.sys.id == id;
  });

  return encontrado.fields.file.url;
}

function worksCardGenerator(objetoTrabajos) {
  const containerTemplate = document.querySelector(".portfolio__container");
  const template = document.querySelector("#work__card");

  objetoTrabajos.forEach((x) => {
    const titulo = template.content.querySelector(
      ".portfolio__container__work__title"
    );
    const descripcion = template.content.querySelector(
      ".portfolio__container__work__explication"
    );
    const imagen = template.content.querySelector(
      ".portfolio__container__work__img"
    );

    const link = template.content.querySelector(
      ".portfolio__container__work__link"
    );

    titulo.textContent = x.titulo;
    descripcion.textContent = x.descripcion;
    imagen.src = x.imagen;
    link.href = x.url;
    link.textContent = "Clic Aqui";

    const clonTemplate = document.importNode(template.content, true);

    containerTemplate.appendChild(clonTemplate);
  });
}

function servicesApi() {
  fetch(
    "https://cdn.contentful.com/spaces/qmut18o4fpit/environments/master/entries?access_token=f-zs6G1D7Z4SfPdF_EAsBP_4hJTYcMx2ZGLDV48xRQ4&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const trabajosObjeto = data.items.map((trabajo) => {
        return {
          titulo: trabajo.fields.titulo,
          descripcion: trabajo.fields.descripcion,
          imagen: buscarImagen(
            trabajo.fields.imagen.sys.id,
            data.includes.Asset
          ),
          url: trabajo.fields.url.content[0].content[0].value,
        };
      });
      console.log(trabajosObjeto);
      worksCardGenerator(trabajosObjeto);
    });
}

function main() {
  const containerHeader = document.querySelector(".header__container");

  headerComponent(containerHeader);

  const containerFooter = document.querySelector(".footer__container");
  footerComponent(containerFooter);

  servicesApi();
}

main();
