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
  "manue",
  "close",
  "cartimgone",
  "cartimgtwo",
  "cartimgthree",
  "cartimgfour",
  "servicesimg",
  "technology",
  "servicerightimg",
  "energy",
  "service",

  // service images start
  "serviceone",
  "servicetwo",
  "servicethree",
  "servicefour",
  "servicefive",
  "servicesix",
  "serviceseven",
  
  // service logo
  "servicelogoone",
  "servicelogotwo",
  "servicelogothree",
  "servicelogofour",
  "servicelogofive",
  "servicelogosix",
  "servicelogoseven",
  // service images end

];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {});

export { IMAGES };
