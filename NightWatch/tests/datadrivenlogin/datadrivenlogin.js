module.exports = {

'Test MUSE Parameterised Login through Front Door': function(client) {	
	var data = client.globals;
	data.users.forEach(function(user){
		client
	      .url(data.env.url)
	      .useXpath()
	      .waitForElementVisible("//*[@id='odyssey-main-app-bar']/div[2]/a", 500000)
	      .verify.containsText("//*[@id='odyssey-main-app-bar']/div[2]/a", 'SIGN UPLOG IN')
	      	      
		  .click("//*[@id='odyssey-main-app-bar']/div[2]/a")
		  .pause(5000)
		  .useCss()
	  	  .verify.urlContains(data.env.url)    
	  	  
//Verify that user gets navigated to MUSE Log in screen on clicking on link "Login with Muse".		  
		  
		  .getAttribute("._3W72vmGqJo-ccsN87LNGWa", 'href', function (link) {
			  newWindowUrl = link.value;
		  	})	
		  .click("._3W72vmGqJo-ccsN87LNGWa")	
		  
		  .windowHandles(function(result) {
			  var newWindow;
			  newWindow = result.value[1];
			  this.switchWindow(newWindow);
			  this.verify.urlContains("https://muse.theodysseyonline.com/account/login");
			  
//Log in to the MUSE.	
			  
			  this.useCss()
		      .setValue('#UserName', user.username)
		      .setValue('#Password', user.password)
		      .useXpath()
		      .click("//*[@id='loginForm']/form/div[4]/div/input", function () {console.log("Let's login with :" + user.username)})
			  .waitForElementVisible("//*[@id='nav-meta']/ul/li[5]/a", 50000)			  
			  .click("//*[@id='nav-meta']/ul/li[5]/a", function () {console.log("Log in Successful. It's time to logout " + user.username)});  
			  this.closeWindow(newWindow);
			  newWindow = result.value[0];
			  this.switchWindow(newWindow);			  
			  this
			  .waitForElementVisible("//span[@class='dKnS56XgOgqbwowsbqUvj _3-4-QgZzG8mI9aDQTYPIl3']", 50000)
			  .click("//span[@class='dKnS56XgOgqbwowsbqUvj _3-4-QgZzG8mI9aDQTYPIl3']")
			  .click("//div[@id='app-bar-hamburger-menu']")		  		  
		  		})
			});
		client.end();
	}

};