const cookies = [
  {
    name: "Gingerbrave",
    skill: "charge",
    rarity: "common",
    usefulIn: ["arena", "master mode", "odyssey"],
  },
  {
    name: "Cotton Cookie",
    skill: "support",
    rarity: "epic",
    usefulIn: ["arena", "world exploration", "master mode", "odyssey"],
  },
  {
    name: "Financier Cookie",
    skill: "defense",
    rarity: "epic",
    usefulIn: ["arena", "master mode", "odyssey"],
  },
  {
    name: "Caramel Arrow Cookie",
    skill: "ranged",
    rarity: "epic",
    usefulIn: ["arena", "world exploration", "master mode", "odyssey"],
  },
  {
    name: "Black Pearl Cookie",
    skill: "ambush",
    rarity: "legendary",
    usefulIn: ["arena", "world exploration", "master mode"],
  },
];
cookies.forEach((cookie) => console.log(cookie.name));
cookies.forEach((cookie) => {
  cookie.usefulIn.forEach(cookie.usefulIn) > console.log(cookie.usefulIn);
});
console.log(cookies);
const result = cookies.filter((cookie) => (cookie.skill = "charge"));
console.log(result);
