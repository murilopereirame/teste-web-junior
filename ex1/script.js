const showBanner = () => {
  let bannerContent = document.querySelector('.bannerContent');
  let img = document.querySelector('.banner');
  let closeButton = document.querySelector('.close');
  let btnControl = document.querySelector('.btnControl');

  bannerContent.style.bottom = 0;

  let width = window.innerWidth;
  let scale = ((window.innerWidth * 100) / 768)/100;
  let height = 511*scale;

  img.style.width = `${width}px`;
  img.style.height = `${height}px`;
  
  //50px do botão de fechar + 5px da margin
  bannerContent.style.height = `${height + 55}px`;

  closeButton.style.display = 'initial';

  btnControl.firstElementChild.setAttribute("src", "down.svg");
  btnControl.removeEventListener("click", showBanner);
  btnControl.addEventListener("click", hideBanner);
}

const hideBanner = () => {
  let bannerContent = document.querySelector('.bannerContent');
  let img = document.querySelector('.banner');
  let closeButton = document.querySelector('.close');
  let btnControl = document.querySelector('.btnControl');

  bannerContent.style.bottom = "-366px";

  img.style.width = `768px`;
  img.style.height = `511px`;
  
  bannerContent.style.height = `511px`;
  closeButton.style.display = 'none';

  btnControl.firstElementChild.setAttribute("src", "up.svg");
  btnControl.removeEventListener("click", hideBanner);
  btnControl.addEventListener("click", showBanner);
}

const destroyBanner = () => {
  let body = document.querySelector('body');
  let bannerContent = document.querySelector('.bannerContent');
  let btnControl = document.querySelector('.btnControl');

  btnControl.firstElementChild.setAttribute("src", "x.png");
  btnControl.setAttribute("disabled", "true");

  body.removeChild(bannerContent);
}

window.addEventListener("load", function (event) {
  let btnControl = document.querySelector('.btnControl');
  btnControl.addEventListener("click", showBanner);
});