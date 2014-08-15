function Obj( name , stage ){
	this.name = name;
	this.stage= stage;
	this.sprite  = null;
	this.imgData = {};
}

Obj.prototype.InitGraphics = function(){
	var spriteSheet = new createjs.SpriteSheet(this.imgData);
 	this.sprite 	= new createjs.Sprite(spriteSheet, "run");
	this.stage.addChild( this.sprite )
}

Obj.prototype.GraphicsUpdate = function(){}
Obj.prototype.PhysicsUpdate = function(){}