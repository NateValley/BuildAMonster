class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.armX = 390;
        this.armY = 460;
        
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
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");

        my.sprite.legR = this.add.sprite(this.armX - 25, this.armY + 40, "monsterParts", "leg_greenE.png");
        
        my.sprite.legL = this.add.sprite(this.armX - 150, this.armY + 40, "monsterParts", "leg_greenE.png");
        my.sprite.legL.flipX = true;

        my.sprite.armR1 = this.add.sprite(this.armX, this.armY, "monsterParts", "arm_darkA.png");
        
        my.sprite.armL1 = this.add.sprite(this.armX - 180, this.armY, "monsterParts", "arm_darkA.png");
        my.sprite.armL1.flipX = true;

        my.sprite.armR2 = this.add.sprite(this.armX, this.armY - 80, "monsterParts", "arm_darkA.png");
        
        my.sprite.armL2 = this.add.sprite(this.armX - 180, this.armY - 80, "monsterParts", "arm_darkA.png");
        my.sprite.armL2.flipX = true;

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_yellow.png");

        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 75, "monsterParts", "mouthI.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY + 75, "monsterParts", "mouthF.png");
        my.sprite.mouthFangs.visible = false;
    
        my.sprite.hornR = this.add.sprite(this.bodyX + 50, this.bodyY - 85, "monsterParts", "detail_dark_horn_large.png");
       
        my.sprite.hornL = this.add.sprite(this.bodyX - 50, this.bodyY - 85, "monsterParts", "detail_dark_horn_large.png");   
        my.sprite.hornL.flipX = true;


        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);


        // Dimple event handling
        fKey.on ('down', (key, event) => {
            my.sprite.mouthFangs.visible = true;
            my.sprite.mouthSmile.visible = false;
        });

        // Regular Smile event handling
        sKey.on ('down', (key, event) => {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        let speed = 5;
        
       // Polling input: peace hand
        if (this.aKey.isDown) {
            my.sprite.body.x -= speed;
            my.sprite.legR.x -= speed;
            my.sprite.legL.x -= speed;
            my.sprite.armR1.x -= speed;
            my.sprite.armL1.x -= speed;
            my.sprite.armR2.x -= speed;
            my.sprite.armL2.x -= speed;
            my.sprite.eye.x -= speed;
            my.sprite.mouthSmile.x -= speed;
            my.sprite.mouthFangs.x -= speed;
            my.sprite.hornR.x -= speed;
            my.sprite.hornL.x -= speed;
        }
        
        if (this.dKey.isDown) {
            my.sprite.body.x += speed;
            my.sprite.legR.x += speed;
            my.sprite.legL.x += speed;
            my.sprite.armR1.x += speed;
            my.sprite.armL1.x += speed;
            my.sprite.armR2.x += speed;
            my.sprite.armL2.x += speed;
            my.sprite.eye.x += speed;
            my.sprite.mouthSmile.x += speed;
            my.sprite.mouthFangs.x += speed;
            my.sprite.hornR.x += speed;
            my.sprite.hornL.x += speed;}
    }

}