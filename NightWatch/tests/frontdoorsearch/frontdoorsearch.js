module.exports = {

'Test Search from Front Door': function(client) {
		    client
		      .url('https://www.theodysseyonline.com/')      
		      .useXpath()
		      .click("//*[@id='app-bar-search-menu']")		 
		      
// Search for content containing word America		      
		      
			  .setValue("//*[@id='search']/input", ['America', client.Keys.ENTER])
			  .waitForElementVisible("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/h2/a/span", 50000)

			  .verify.containsText("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/h2/a/span", 'What Great America...?')
			  .verify.containsText("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[2]/article/figure/div/div/header/h2/a/span", 'A Prayer For America')
		      
		  	  .verify.urlContains("https://www.theodysseyonline.com/search-results?query=America")   
			 
// School search containing word IUPUI				  	  
		  	  .clearValue("//*[@id='search']/input")

		  	  .setValue("//*[@id='search']/input", ['IUPUI', client.Keys.ENTER])
			  .waitForElementVisible("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/a[1]/span", 50000)

			  .verify.containsText("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/a[1]/span", 'At IUPUI')
			  .verify.containsText("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[2]/article/figure/div/div/header/a[1]/span", 'At IUPUI')
		      
		  	  .verify.urlContains("https://www.theodysseyonline.com/search-results?query=IUPUI")   
		  	  
		  	  
		  	  
		  	  
//		  	  .end();	  	  	  
		}
};