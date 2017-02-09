module.exports = {

'Creator Dashboards': function(client) {
		    client
		      .url('https://staging.theodysseyonline.com/@callieporcher/dashboard')
			  .useXpath()
			  .waitForElementVisible("//*[@id='main']/div/div/div/div/article/ul/li[1]/h2", 50000)
			  .pause(5000)
		
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[1]/h2", '2.7M')
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[2]/h2", '638K')
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[3]/h2", '441')
			  
			  .click("//*[@id='main']/div/div/div/div/article/header/ul/li[1]/label")
			  .pause(1000)
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[1]/h2", '159.4K')
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[2]/h2", '40.2K')
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[3]/h2", '28')
			  
			  .click("//*[@id='main']/div/div/div/div/article/header/ul/li[2]/label")
			  .pause(1000)
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[1]/h2", '184.4K')
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[2]/h2", '48K')
			  .verify.containsText("//*[@id='main']/div/div/div/div/article/ul/li[3]/h2", '31')
			  
// Verify that user gets navigated to Odyssey Log in screen on clicking content in Editing status.		  
			  
			  .getAttribute("//*[@id='main']/div/div/div/div/section/article/a[1]/div", 'href', function (link) {
				  newWindowUrl = link.value;
			  	})
			  .click("//*[@id='main']/div/div/div/div/section/article/a[1]/div")
			  .windowHandles(function(result) {
				  var newWindow;
				  newWindow = result.value[1];
				  this.switchWindow(newWindow);
				  this.verify.urlContains("https://muse.theodysseyonline.com/account/login?ReturnUrl=%2Fadmin#cms/content/919432/edit");
					  
	// Log in to the system to Edit the content.		  
				  this.useCss()
			      .setValue('#UserName', 'milind')
			      .setValue('#Password', '11112222')
			      .useXpath()
			      .click("//*[@id='loginForm']/form/div[4]/div/input")
				  .waitForElementVisible("//*[@id='nav-meta']/ul/li[5]/a", 50000)
				  .click("//*[@id='nav-meta']/ul/li[5]/a") 
				  
				  this.closeWindow(newWindow);
				  newWindow = result.value[0];
				  this.switchWindow(newWindow);
			  	})
			  
// Verify the Views and Likes counts are matching for Live content.
			  	
			  .getText("//*[@id='main']/div/div/div/div/section/article/a[4]/div/div[2]/span[1]/span[2]", function(result) {
				  expected_views = result.value;   })  
			  .getText("//*[@id='main']/div/div/div/div/section/article/a[4]/div/div[2]/span[2]/span[2]", function(result) {
				  expected_likes = result.value;   })  				  
				    
			  .click("//*[@id='main']/div/div/div/div/section/article/a[4]/div/h4")
			  .waitForElementPresent("//*[@id='main']/div/div/div/section[3]/article/section/table/tfoot/tr/td[3]", 50000)
			  .perform(function () {
			  client.verify.containsText("//*[@id='main']/div/div/div/section[3]/article/section/table/tfoot/tr/td[3]", expected_views); 
			  client.verify.containsText("//*[@id='main']/div/div/div/section[2]/ul/li/article/section/div[1]/span", expected_likes); 
				 })
			
			  
// Verify that user gets navigated to Odyssey user profile screen on clicking Profile link.		  
			  
			  .url('https://staging.theodysseyonline.com/@callieporcher/dashboard')		 
			  .click("//*[@id='main']/div/div/div/div/div/a")
			  .verify.urlContains("https://staging.theodysseyonline.com/@callieporcher")
			  	 
		      .end();
		}
};