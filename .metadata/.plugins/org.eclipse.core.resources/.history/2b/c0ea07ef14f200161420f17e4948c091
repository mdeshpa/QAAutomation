module.exports = {

'Test Community creation': function(client) {
		    client
		      .url('http://musedev.theodysseyonline.com/admin')
			  .useCss()
		      .setValue('#UserName', 'developeraccount')
		      .setValue('#Password', 'developeraccount123')
		      .useXpath()
		      .click("//*[@id='loginForm']/form/div[4]/div/input")
			  .waitForElementVisible("//*[@id='nav-meta']/ul/li[5]/a", 50000)
			  .click("//*[@id='nav-apps']/ul/li[4]/a")
			  .waitForElementVisible("//*[@id='app-wrapper']/div/div[1]/div[2]/div/button", 15000)
			  .click("//*[@id='app-wrapper']/div/div[1]/div[2]/div/button")
			  .click("//*[@id='app-wrapper']/div/div[2]/div[1]/input")		  
			  .setValue("//*[@id='app-wrapper']/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/input", 'fullnametest665645376577')			  
			  .setValue("//*[@id='app-wrapper']/div/div[2]/div[2]/div[2]/div[1]/div[3]/div[2]/input", 'slug645647575764676')
			  .click("//*[@id='app-wrapper']/div/div[1]/div[2]/div/div/button[2]")
			  .click("//*[@id='nav-meta']/ul/li[5]/a") 
		      .end();
		}
};