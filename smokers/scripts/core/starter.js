window.onload = function(){
	var objectController 	= ObjectController();
	var canvas 						= document.getElementById('stage');
	var stage							= new createjs.Stage( canvas );
	var queue 						= new createjs.LoadQueue();
 


	canvas.width 	= innerWidth;
	canvas.height = innerHeight;

	objectController.SetRules({
		updateTime : 20
	});

	//queue.installPlugin(createjs.Sound);
 	queue.on("complete", onAssetsLoaded, this);
 	queue.loadFile( manifest );

	function handleComplete() {
	    createjs.Sound.play("sound");
	    var image = queue.getResult("myImage");
	    document.body.appendChild(image);
	}

  //preloader.installPlugin(SoundJS);
  //preloader.onProgress = handleProgress;
  //preloader.onComplete = onAssetsLoaded.bind( this );
  //preloader.onFileLoad = handleFileLoad;
  //preloader.loadManifest( manifest );

  function onAssetsLoaded(){
		objectController.Init( stage );
		objectController.Start();
	}
}