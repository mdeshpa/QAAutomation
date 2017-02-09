module.exports = {

'should set a cookie for the page' : function (browser) {
	browser
	.url('http://musedev.theodysseyonline.com/admin')
	.useCss()
    .setValue('#UserName', 'developeraccount')
    .setValue('#Password', 'developeraccount123')
    .useXpath()
    .click("//*[@id='loginForm']/form/div[4]/div/input")
	.waitForElementVisible("//*[@id='nav-meta']/ul/li[5]/a", 50000)

    var cookies = browser.getCookie();
    console.log(cookies);
    
  }
};