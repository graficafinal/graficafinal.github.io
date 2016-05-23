var winState = {

    create: function() {	
		
	var winLabel = saveWorld.add.text(80, 80, 'Salvaste el mundo!',
								{font: '50px Verdana', fill: '#00FF00' });

		// We give the player instructions on how to restart the saveWorld
	var startLabel = saveWorld.add.text(80, saveWorld.world.height-80,
								   'Presione R para reiniciar',
								   {font: '25px Arial', fill: '#ffffff' });

        // We define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
        var wkey = saveWorld.input.keyboard.addKey(Phaser.Keyboard.R);
        
        // When the player presses the W key, we call the restart function
        wkey.onDown.addOnce(this.start, this);
    },
    
    // The restart function calls the menu state    
    start: function () {
        saveWorld.state.start('juego');    
    }	
}