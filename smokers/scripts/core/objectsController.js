function ObjectController(){
	if ( arguments.callee._singletonInstance )
    return arguments.callee._singletonInstance;
	arguments.callee._singletonInstance = this;

	// ------------ techs ---------------

	var _timer;
	var _stage;
	// ------------ VARS ----------------

	var objects = [  ];
	var rules 	= {};

	// ----------- PUBLICS --------------

	this.Init 		= function( stage ){
		_stage = stage;
		objects[ objects.length ] = new Char( stage );
		objects[ objects.length ] = new Her( stage );
	}

	this.SetRules = function( _rules ){ rules = _rules; }
	this.Start 		= function(){ update(); }
	this.Pause 		= function(){ clearTimeout( _timer ); }

	// ----------- PRIVATS --------------

	function update(){
		for( var i = 0 ; i < objects.length ; i++ ){
			objects[ i ].PhysicsUpdate 	&& objects[ i ].PhysicsUpdate();
			objects[ i ].GraphicsUpdate && objects[ i ].GraphicsUpdate();
		}

		_stage.update();
		_timer = setTimeout( update , rules.updateTime ? rules.updateTime : 100 );
	}
	function createObject( type ){}

	return this;
}