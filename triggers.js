function click(){
	console.log("click")
	var 
			cl = this.className
		,	el = document.querySelector("." + cl)
	 	,	st = getComputedStyle( el )
		,	vis= st.display == 'none' ? 0 : 1
	
	el.style.display = vis ? 'none' : 'block' 
}

function ready(){
	var
			vidTrig = document.querySelector(".videoTrigger")
		,	audTrig = document.querySelector(".audioTrigger")
	
	vidTrig.addEventListener( "click" , click.bind({className : "videoContainer"}) , false )
	audTrig.addEventListener( "click" , click.bind({className : "audioContainer"}) , false )
}

window.onload = ready