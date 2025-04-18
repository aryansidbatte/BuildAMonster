class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

        this.AKey = null;
        this.DKey = null;
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.leftArm = this.add.sprite(this.bodyX - 90, this.bodyY + 50, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.bodyX + 90, this.bodyY + 50, "monsterParts", "arm_greenB.png");

        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 130, "monsterParts", "leg_darkD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 130, "monsterParts", "leg_darkD.png");

        my.sprite.leftEye = this.add.sprite(this.bodyX - 30, this.bodyY - 40, "monsterParts", "eye_cute_light.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX + 30, this.bodyY - 40, "monsterParts", "eye_cute_light.png");

        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile.visible = true;
        my.sprite.fangs.visible = false;

        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY + 10, "monsterParts", "nose_yellow.png");

        my.sprite.leftHorn = this.add.sprite(this.bodyX - 30, this.bodyY - 90, "monsterParts", "detail_yellow_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.bodyX + 30, this.bodyY - 90, "monsterParts", "detail_yellow_horn_small.png");
        
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // Move the monster with the arrow keys
        if (this.AKey.isDown) {
            my.sprite.body.x -= 2;
            my.sprite.leftArm.x -= 2;
            my.sprite.rightArm.x -= 2;
            my.sprite.leftLeg.x -= 2;
            my.sprite.rightLeg.x -= 2;
            my.sprite.leftEye.x -= 2;
            my.sprite.rightEye.x -= 2;
            my.sprite.smile.x -= 2;
            my.sprite.fangs.x -= 2;
            my.sprite.nose.x -= 2;
            my.sprite.leftHorn.x -= 2;
            my.sprite.rightHorn.x -= 2;
        }
        if (this.DKey.isDown) {
            my.sprite.body.x += 2;
            my.sprite.leftArm.x += 2;
            my.sprite.rightArm.x += 2;
            my.sprite.leftLeg.x += 2;
            my.sprite.rightLeg.x += 2;
            my.sprite.leftEye.x += 2;
            my.sprite.rightEye.x += 2;
            my.sprite.smile.x += 2;
            my.sprite.fangs.x += 2;
            my.sprite.nose.x += 2;
            my.sprite.leftHorn.x += 2;
            my.sprite.rightHorn.x += 2;
        }

        

       
    }

}