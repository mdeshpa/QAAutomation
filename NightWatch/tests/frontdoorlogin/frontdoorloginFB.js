module.exports = {

'Test MUSE Login through FaceBook - Front Door': function(client) {
			var data = client.globals;			
		    client
		      .url(data.env.url)
		      .useXpath()
		      .waitForElementVisible("//*[@id='odyssey-main-app-bar']/div[2]/a", 50000)
		      .verify.containsText("//*[@id='odyssey-main-app-bar']/div[2]/a", 'SIGN UPLOG IN')
		      	      
			  .click("//*[@id='odyssey-main-app-bar']/div[2]/a")
			  .pause(5000)
			  .useCss()
		  	  .verify.urlContains(data.env.url)    
		  	  
// Verify that user gets navigated to MUSE Log in screen on clicking on link "Login with Facebook".		  
			  
			  .getAttribute("._2ynT5K46vRWrLa8l3xVh27", 'href', function (link) {
				  newWindowUrl = link.value;
			  	})	
			  .click("._2ynT5K46vRWrLa8l3xVh27")	
			  
			  .windowHandles(function(result) {
				  var newWindow;
				  newWindow = result.value[1];
				  this.switchWindow(newWindow);
				  this.verify.urlContains("https://www.facebook.com");
				  
// Log in to the MUSE through Facebook. 
// As we are not actually verifying if user can login using FB, we have commented this code. 				  
//				  this.useCss()
//			      .setValue('#email', 'odesseyqa@gmail.com')
//			      .setValue('#pass', 'OdesseyQA@123')
//			      .useXpath()
//			      .click("//*[@id='loginbutton']")
//				  this.verify.urlContains("https://www.theodysseyonline.com");
			      
				  this.closeWindow(newWindow);
				  newWindow = result.value[0];
				  this.switchWindow(newWindow);
				  
			  })	  	  
		          .end();
		}
};