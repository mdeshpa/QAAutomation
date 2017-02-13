// This test case is to verify Share link when user is not logged in to Muse but logged in FaceBook

module.exports = {

'Test MUSE Login through FaceBook - Front Door': function(client) {
		    client
		      .url('https://www.theodysseyonline.com/')
		      .useXpath()
		      .waitForElementVisible("//*[@id='odyssey-main-app-bar']/div[2]/a", 50000)
		      .verify.containsText("//*[@id='odyssey-main-app-bar']/div[2]/a", 'SIGN UPLOG IN')
		      	      
			  .click("//*[@id='odyssey-main-app-bar']/div[2]/a")
			  .pause(5000)
			  .useCss()
		  	  .verify.urlContains("https://www.theodysseyonline.com/")    
		  	  
// Verify that user gets navigated to MUSE Log in screen on clicking on link "Login with Muse".		  
			  
			  .getAttribute("._2ynT5K46vRWrLa8l3xVh27", 'href', function (link) {
				  newWindowUrl = link.value;
			  	})	
			  .click("._2ynT5K46vRWrLa8l3xVh27")	
			  
			  .windowHandles(function(result) {
				  var newWindow;
				  newWindow = result.value[1];
				  this.switchWindow(newWindow);
				  this.verify.urlContains("https://www.facebook.com");
				  
// Log in to the MUSE.		  
				  this.useCss()
			      .setValue('#email', 'odesseyqa@gmail.com')
			      .setValue('#pass', 'OdesseyQA@123')
			      .useXpath()
			      .click("//*[@id='loginbutton']")
//				  .waitForElementVisible("//*[@id='nav-meta']/ul/li[5]/a", 50000)
//				  .click("//*[@id='nav-meta']/ul/li[5]/a")  
				  this.verify.urlContains("https://www.theodysseyonline.com");
			      
				  this.closeWindow(newWindow);
				  newWindow = result.value[0];
				  this.switchWindow(newWindow);
				  								  
			  })
			  	  .refresh()
			      .useXpath()
			  	  .waitForElementVisible("//a[@href='/discussions-spell-trouble-for-snowden']", 50000)
			  	  .click("//a[@href='/discussions-spell-trouble-for-snowden']")
			  	  .pause(5000)
			  	  .useCss()
			  	  .verify.urlContains("https://www.theodysseyonline.com/")
			  	  .click("button._1zoyK1cV-f81ZFxIdn8WZe._1a2jxaardozqknAeOFhGpJ")	
			  	  .pause(5000)

			  	   
			  
		          .end();
		}
};		  