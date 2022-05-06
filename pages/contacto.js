function main() {
  const containerHeader = document.querySelector(".section__header__container");

  headerComponent(containerHeader);

  const containerFooter = document.querySelector(".section__footer__container");
  footerComponent(containerFooter);

  const containerContact = document.querySelector(".section__header__contact");
  contactFormComponent(containerContact);
}

main();
