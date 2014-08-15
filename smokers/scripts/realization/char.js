function Char( stage ){
	var obj = new Obj( "braid" , stage );
	
	obj.imgData = {
	    images: ["assets/img/braid.png"],
	    frames: {width:130, height:151},
	    animations: {run:[0,26]}
	};

	obj.PhysicsUpdate = function(){
		this.sprite.x += 2;
		this.sprite.scaleX = -1;
	}

	obj.InitGraphics();
	return obj;
}

function Her( stage ){
	var obj = new Obj( "braid" , stage );
	
	obj.imgData = {
	    images: ["assets/img/braid.png"],
	    frames: {width:130, height:151},
	    animations: {run:[0,26]}
	};

	obj.PhysicsUpdate = function(){
		this.sprite.x += 3;
		this.sprite.scaleX = 1;
	}

	obj.InitGraphics();
	return obj;
}