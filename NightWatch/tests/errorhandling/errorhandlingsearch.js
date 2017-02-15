module.exports = {

'Test Error handling while search on Front Door': function(client) {
    		var data = client.globals;	
		    client
		      .url(data.env.url)   
		      .useXpath()
		      .click("//*[@id='app-bar-search-menu']")		 
 
// Search for invalid text

		  	  .setValue("//*[@id='search']/input", [data.errorhandlingsearch.invalidtext, client.Keys.ENTER])
			  .waitForElementVisible(".//*[@id='main']/div/div/div/h1", 50000)
			  .verify.containsText("//*[@id='main']/div/div/div/h1", "Results for “" + data.errorhandlingsearch.invalidtext + "”") 
			  .verify.hidden("//*[@id='main']/div/div/div/div[2]/div/div/div/section/div[1]")
		  	  .verify.urlContains("https://www.theodysseyonline.com/search-results?query=" + data.errorhandlingsearch.invalidtext)   
		  	  
		  	  .end();	  	  	  
		}
};