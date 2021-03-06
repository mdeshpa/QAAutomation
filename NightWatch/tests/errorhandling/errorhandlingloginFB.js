module.exports = {

'Test Error handling while login to MUSE through FaceBook': function(client) {
			var data = client.globals;			
		    client
		      .url(data.env.url)
		      .useXpath()
		      .waitForElementVisible("//*[@id='odyssey-main-app-bar']/div[2]/a", 50000)
		      	      
			  .click("//*[@id='odyssey-main-app-bar']/div[2]/a")
			  .pause(5000)
			  .useCss()
			  
			  .getAttribute("._2ynT5K46vRWrLa8l3xVh27", 'href', function (link) {
				  newWindowUrl = link.value;
			  	})	
			  .click("._2ynT5K46vRWrLa8l3xVh27")	
			  
			  .windowHandles(function(result) {
				  var newWindow;
				  newWindow = result.value[1];
				  this.switchWindow(newWindow);
		  
				  this.useCss()
			      .setValue('#email', '')
			      .setValue('#pass', '')
			      .click("#loginbutton")  
				  this.verify.urlContains("https://www.facebook.com/login.php?")
				  
//			      The below mentioned scenarios are not covered as those are part of FB login validation.
//			      The password you’ve entered is incorrect. Forgot Password?
//			      The email you’ve entered doesn’t match any account. Sign up for an account.
			      
				  this.closeWindow(newWindow);
				  newWindow = result.value[0];
				  this.switchWindow(newWindow);
				  
			  })	  	  
		          .end();
		}
};