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
        this.input.on("pointerdown", (pointer) => {
            this.startX = pointer.x;
            this.startY = pointer.y;
            console.log("Finger runter bei", pointer.x, pointer.y);
        });

        this.input.on("pointermove", (pointer) => {
            if (pointer.isDown) {
                const dx = pointer.x - this.startX;
                const dy = pointer.y - this.startY;
                this.richtungX = dx;
                this.richtungY = dy;
                console.log("dx:", dx, "dy:", dy);
            }
        });

        this.input.on("pointerup", (pointer) => {
            console.log("Finger hoch bei", pointer.x, pointer.y);
            this.richtungX = 0;
            this.richtungY = 0;
        });
    }
    update() {
        this.spieler.x += this.richtungX * 0.02;
        this.spieler.y += this.richtungY * 0.02;
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


