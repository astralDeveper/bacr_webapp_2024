// const generateImagePath = (name) => `/public/images/${name}.png`;
const generateImagePath = (name) => `/images/${name}.png`;


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
  "crossicon",
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

  // Project images start
  "projectone",
  "projecttwo",
  "projectthree",

  // project logo
  "projectlogoone",
  "projectlogotwo",
  "projectlogothree",
  "icon",
  "search",
  "blog",
  "leftarrow",
  "facebookwhite",
  "instawhite",
  "whatsapp",
  "twitter",
  "pagenotfound",
  "blog1",
  "blog2",
  "blog3",
  "clipboard",
  "product1",
  "product2",
  "product3",
  "product4",

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

  //brand images start
  "auth_tick",
  "brandone",
  "brandtwo",
  "brandthree",
  "brandfour",
  "brandfive",
  "brandsix",
  //brand images end

  // Our Team start
  "worker1",
  "worker2",
  "worker3",
  "worker4",
  // Our Team end
  // certificate Start
  "certificate1",
  "certificate2",
  "certificate3",
  "certificate4",
  "certificate5",
  // certificate end
  "Background",
  "bulb",
  "bgshape",
  "ceo",
  "flaktgroup",
  "galletti",
  "carrier",
  "york",
  "mcquay",
  "skm",
  "zamil",
  "tica",
  "trane",
  "aircondition",
  "coolingicon",
  "pso",
  "mia",
  "scheduleicon",
  "dineshsingh",
  "circleshape",
  "paraarrow",
  "twit",
  "next",
  "prev",
  "iconwhite",
  "avatar1",
  "avatar2",
  "avatar3",
  "star",
  "ceobgimg",
  // serveces images
  "comfort1",
  "comfort2",
  "comfort3",
  "comfort4",
  "comfort5",
  "comfort6",
  // process cooling
  "process1",
  "process2",
  "process3",
  "process4",



];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {});

export { IMAGES };
