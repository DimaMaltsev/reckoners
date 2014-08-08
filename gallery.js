var photo = document.querySelector( ".photo" );
var curImage;
var curIndex = -1;
( function changeImage(){
	var img = new Image();
	var ind = ( 2 + Math.floor( Math.random() * 52 ) );
	while( ind == curIndex && curIndex != -1 )
		ind = ( 2 + Math.floor( Math.random() * 52 ) )
	curIndex = ind;
	img.src = "images/i"  + ind +  ".jpg";

	img.style.position = "fixed";
	img.style.top = "0px";
	img.style.opacity = 0;
	img.style.zIndex = -1;

	img.style[ "-webkit-transition" ] = "opacity 3s ease-in-out";
	img.style[ "-moz-transition" ] = "opacity 3s ease-in-out";
	img.style[ "-ms-transition" ] = "opacity 3s ease-in-out";
	img.style[ "-o-transition" ] = "opacity 3s ease-in-out";
	img.style[ "transition" ] = "opacity 3s ease-in-out";

	img.onload = function(){

		var oldImg 	= document.querySelector( ".toDelete" );
		if( oldImg ){
			oldImg.className += " fadeOut";
			oldImg.style.opacity = 0;
			setTimeout( removeFadeOut , 3000 );
		}

		if( this.width < window.innerWidth )
			this.width = window.innerWidth
		else if( this.height < window.innerHeight )
			this.height = window.innerHeight;

		this.className += " toDelete"
		setTimeout( changeImage , 10000 )
		document.body.appendChild( img );
		curImage = this;
		setTimeout( showCurrentImage , 100 );
	}
} )()

function showCurrentImage(){
	curImage.style.opacity = 1;
}

function removeFadeOut(){
	var img = document.querySelector( ".fadeOut" );
	document.body.removeChild( img );
}