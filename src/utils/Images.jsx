const generateImagePath = (name) => `src/assets/images/${name}.png`;

const imageNames = [
  "logo",
  "phone",
  "mail",
  "arrowdown",
  "facebook",
  "insta",
  "linkedin",
  "youtube",
  "whatsapp",
  "manue",
  "close"
];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {});


export { IMAGES };

