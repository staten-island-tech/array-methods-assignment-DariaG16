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
cookies.forEach((cookie) => console.log(cookie.name)); //logs every cookies name
//cookies.forEach((cookie) => console.log(cookie.usefulIn)); //logs every cookies skill?

 cookies.forEach((cookie) => {
  cookie.usefulIn.forEach((cookies, cookie.usefulIn),
  console.log(cookie.usefulIn));//the code mr whalen gave us
 

const result = cookies.filter((cookie) => cookie.skill === "ranged"); //filters the cookies based on their skills
console.log(result);
cookies.forEach((cookies) => console.log(cookies.usefulIn));
