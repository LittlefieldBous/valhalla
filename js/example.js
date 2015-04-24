Modernizer.load({
	
	test: Modernizer.form.value,
	yep: "js./success.js",
	nope: "js/fail.js",
	complete:function(){
		
		//this will run after js file loads
		
		console.log("test complete");
		
		
		
	}
	
	
	
		
	
});