module.exports = {

'Test Search from Front Door': function(client) {
		    client
		      .url('https://www.theodysseyonline.com/')      
		      .useXpath()
		      .click("//*[@id='app-bar-search-menu']")		 
		      
// Search for text from content title, body, creator name, school name containing word America		      
		      
			  .setValue("//*[@id='search']/input", ['America', client.Keys.ENTER])
			  .waitForElementVisible("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/h2/a/span", 50000)		      
		  	  .verify.urlContains("https://www.theodysseyonline.com/search-results?query=America")
		  	  .verify.containsText("//*[@id='main']/div/div/div/h1", "Results for “America”")	 
		  	  .click("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]/article/figure/div/div/header/h2/a/span")
		  	  .waitForElementVisible("//*[@id='full-article-body']", 50000) 
		  	  .verify.containsText("//*[@id='main']/div/div/div[1]/div[1]/div/div", "America")	  

 
// Search for invalid text		
		  	  .click("//*[@id='app-bar-search-menu']")

		  	  .setValue("//*[@id='search']/input", ['Invalidtextsearch', client.Keys.ENTER])
			  .waitForElementVisible(".//*[@id='main']/div/div/div/h1", 50000)
			  .verify.containsText("//*[@id='main']/div/div/div/h1", "Results for “Invalidtextsearch”")	 
			  .verify.hidden("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]")
		  	  .verify.urlContains("https://www.theodysseyonline.com/search-results?query=Invalidtextsearch")   
		  	  
		  	  .end();	  	  	  
		}
};