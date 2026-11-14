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
        this.tempo = 1200;
        this.input.on("pointerdown", (pointer) => {
            this.startX = pointer.x;
            this.startY = pointer.y;
            console.log("Finger runter bei", pointer.x, pointer.y);
        });

        this.input.on("pointermove", (pointer) => {
            if (pointer.isDown) {
                let dx = pointer.x - this.startX;
                let dy = pointer.y - this.startY;
                const laenge = Math.sqrt(dx * dx + dy * dy);

                if (laenge > this.maxZug) {
                    dx = dx / laenge * this.maxZug;
                    dy = dy / laenge * this.maxZug;
                }

                this.richtungX = dx / this.maxZug;
                this.richtungY = dy / this.maxZug;
                console.log("dx:", dx, "dy:", dy);
            }
        });

        this.input.on("pointerup", (pointer) => {
            console.log("Finger hoch bei", pointer.x, pointer.y);
            this.richtungX = 0;
            this.richtungY = 0;
        });
    }
    update(time, delta) {
        this.spieler.x += this.richtungX * this.tempo * delta / 8.3333;
        this.spieler.y += this.richtungY * this.tempo * delta / 8.3333;

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


