ig.module(
	'game.entities.bush_berries'
)
.requires(
	'impact.entity'
)
.defines(function(){
    EntityBush_berries = ig.Entity.extend({
        animSheet: new ig.AnimationSheet( 'media/images/bush_berries.png', 128, 128 ),
        size: {x: 128, y: 128},
        offset: {x: 0, y: 0},
        flip: false,
        maxVel: {x: 100, y: 200},
		
		   
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.addAnim( 'idle', 1, [0] );
        },
		
        update: function() {
			this.parent();	
	   },
		
    });
});