module.exports = {

'Test Error handling while login to MUSE through Front Door': function(client) {
			var data = client.globals;		
		    client
		      .url(data.env.url)
		      .useXpath()
		      .waitForElementVisible("//*[@id='odyssey-main-app-bar']/div[2]/a", 50000)
		      	      
			  .click("//*[@id='odyssey-main-app-bar']/div[2]/a")
			  .pause(5000)
			  .useCss()	  
			  
			  .getAttribute("._3W72vmGqJo-ccsN87LNGWa", 'href', function (link) {
				  newWindowUrl = link.value;
			  	})	
			  .click("._3W72vmGqJo-ccsN87LNGWa")	
			  
			  .windowHandles(function(result) {
				  var newWindow;
				  newWindow = result.value[1];
				  this.switchWindow(newWindow);
				  
// Log in with Blank username and password.		  
				  this.useCss()
			      .setValue('#UserName', '')
			      .setValue('#Password', '')
			      .useXpath()
			      .click("//*[@id='loginForm']/form/div[4]/div/input")  
			      
			      .verify.containsText("//*[@id='loginForm']/form/div[2]/div/span", 'The Email or Username field is required.')
			      .verify.containsText("//*[@id='loginForm']/form/div[3]/div/span", 'The Password field is required.')
			      
// Log in with Incorrect username or password.		
			      
			      .useCss()
			      .setValue('#UserName', 'incorrectusername')
			      .setValue('#Password', 'incorrectpassword')
			      .useXpath()
			      .click("//*[@id='loginForm']/form/div[5]/div/input")  
			      
			  	  .verify.containsText("//*[@id='loginForm']/form/div[1]/ul/li", 'Invalid username or password.')    
			     
				  this.closeWindow(newWindow);
				  newWindow = result.value[0];
				  this.switchWindow(newWindow);
				  
			  })	  	  
		          .end();
		}
};