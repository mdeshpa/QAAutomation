// This test case is to verify Share link when user is not logged in to Muse & FaceBook

module.exports = {

'Test FB Share when user is NOT logged in on FaceBook': function(client) {
		    client
		      .url('https://www.theodysseyonline.com/')		      
		      .useXpath()      
		      .waitForElementVisible("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/h2/a/span", 50000)
			  .click("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/h2/a/span")
			  .pause(5000)
			  .useCss()
		  	  .verify.urlContains("https://www.theodysseyonline.com/")		 
		  	  
// Verify that user click on Share link.
		  	  
		  	  .click("button._1zoyK1cV-f81ZFxIdn8WZe._1a2jxaardozqknAeOFhGpJ")		  	  
			  .windowHandles(function(result) {
				  var newWindow;
				  newWindow = result.value[1];
				  this.switchWindow(newWindow);
				  this.verify.urlContains("https://www.facebook.com");
				  
// Log in to the FaceBook.		  
				  this.useCss()
			      .setValue('#email', 'odesseyqa@gmail.com')
			      .setValue('#pass', 'OdesseyQA@123')
			      .useXpath()
			      .click("//*[@id='loginbutton']")
			      
			      .assert.title('Post to Facebook');
				  this.closeWindow(newWindow);
				  newWindow = result.value[0];
				  this.switchWindow(newWindow);				  
			  })	  	  
		          .end();
	}
};

				  