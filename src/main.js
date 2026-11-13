const config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  backgroundColor: "#0e0e79",
};

const game = new Phaser.Game(config);
const spielerName = "Tom";
const spielName = "Kiez-Kaputt";
console.log("Willkommen zu Kiez-Kaputt");
console.log(spielName);
console.log ("spielName");
console.log(`Willkommen, ${spielerName}!`);
const spieler = { 
    name : "Tom",
    geld : 20,
    laune : 80
};


