class StadtSzene extends Phaser.Scene {
    constructor() {
        super("Stadt-Hamburg");
    }

    create() {
        console.log("Stadt-Hamburg created");
        this.add.text(20, 20, "Stadt-Hamburg", { color: "#b61d1d" });
        this.spieler = this.add.rectangle(180, 320, 16, 24, 0x00ff03);
        this.richtungX = 0;
        this.richtungY = 0;
        this.maxZug = 50;
        this.tempo = 0.5;
        this.input.on("pointerdown", (pointer) => {
            this.startX = pointer.x;
            this.startY = pointer.y;
            console.log("Finger runter bei", pointer.x, pointer.y);
        });

        this.input.on("pointermove", (pointer) => {
            if (pointer.isDown) {
                this.dx = pointer.x - this.startX;
                this.dy = pointer.y - this.startY;
                const laenge = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                if (laenge > this.maxZug) {
                    this.dx = this.dx / laenge * this.maxZug;
                    this.dy = this.dy / laenge * this.maxZug;
                }

                this.richtungX = this.dx / this.maxZug;
                this.richtungY = this.dy / this.maxZug;
                console.log("dx:", this.dx, "dy:", this.dy);
            }
        });

        this.input.on("pointerup", (pointer) => {
            console.log("Finger hoch bei", pointer.x, pointer.y);
            this.richtungX = 0;
            this.richtungY = 0;
        });
    }
    update() {
        this.spieler.x += this.richtungX * this.tempo;
        this.spieler.y += this.richtungY * this.tempo;
        const dx = this.spieler.x - this.startX;
        const dy = this.spieler.y - this.startY;

    }

}


const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    backgroundColor: "#0e0e79",
    pixelArt: true,
    scene: [StadtSzene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

const game = new Phaser.Game(config);


