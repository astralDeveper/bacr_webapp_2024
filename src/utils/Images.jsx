const generateImagePath = (name) => `src/assets/images/${name}.png`;

const imageNames = [
  "logo",
  "logowhite",
  "phone",
  "mail",
  "arrowdown",
  "facebook",
  "insta",
  "linkedin",
  "youtube",
  "whatsapp",
  "cartimgone",
  "cartimgtwo",
  "cartimgthree",
  "cartimgfour",
  "servicesimg",
  "serviceleftimg",
  "servicerightimg",
];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {});


export { IMAGES };

