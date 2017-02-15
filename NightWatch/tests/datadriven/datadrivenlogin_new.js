module.exports = {

'Test MUSE Parameterised Login through Front Door': function(client) {	
	var data = client.globals;
	data.users.forEach(function(user){
		client
	      .url('https://www.theodysseyonline.com/')
	      .useXpath()
	      .waitForElementVisible("//*[@id='odyssey-main-app-bar']/div[2]/a", 500000)
	      .verify.containsText("//*[@id='odyssey-main-app-bar']/div[2]/a", 'SIGN UPLOG IN')
	      	      
		  .click("//*[@id='odyssey-main-app-bar']/div[2]/a")
		  .pause(5000)
		  .useCss()
	  	  .verify.urlContains("https://www.theodysseyonline.com/")    
	  	  
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
		      .click("//*[@id='loginForm']/form/div[4]/div/input")
			  .waitForElementVisible("//*[@id='nav-meta']/ul/li[5]/a", 50000)
			  .click("//*[@id='nav-meta']/ul/li[5]/a");  

			  this.closeWindow(newWindow);
			  newWindow = result.value[0];
			  this.switchWindow(newWindow);
			  
			  this
			  .waitForElementVisible("//span[@class='dKnS56XgOgqbwowsbqUvj _3-4-QgZzG8mI9aDQTYPIl3']", 50000)
			  .click("//span[@class='dKnS56XgOgqbwowsbqUvj _3-4-QgZzG8mI9aDQTYPIl3']")
			  //.waitForElementVisible("//div[@id='app-bar-hamburger-menu']", 50000)
			  .click("//div[@id='app-bar-hamburger-menu']")
			  //.waitForElementVisible('//div[@class="_3wrmKY0YIxc1CnooX7Z_C1"]/button', 50000)
			  .click('//div[@class="_3wrmKY0YIxc1CnooX7Z_C1"]/button')			  
		  
		  })
		

	});
	


}

};