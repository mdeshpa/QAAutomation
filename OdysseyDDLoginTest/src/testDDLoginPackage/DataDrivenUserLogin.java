package testDDLoginPackage;

import java.util.concurrent.TimeUnit; 
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test; 
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.DataProvider;
import excelUtility.ExcelUtils;

public class DataDrivenUserLogin {
 
	private String sTestCaseName; 
	private static WebDriver driver;
//	private int iTestCaseRow;
 
  @BeforeMethod
 
  public void beforeMethod() throws Exception {
	  System.setProperty("webdriver.gecko.driver","E:\\Installers\\geckodriver.exe");
      driver = new FirefoxDriver();
      driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); 
	  driver.get("http://musedev.theodysseyonline.com/admin");	
  }	
 
  @Test(dataProvider = "Authentication")
 
  public void multipleLogin(String sUserName, String sPassword) {
 		driver.findElement(By.xpath("//*[@id='UserName']")).sendKeys(sUserName);
		System.out.println(sUserName);
		driver.findElement(By.xpath("//*[@id='Password']")).sendKeys(sPassword);
		System.out.println(sPassword);  
		driver.findElement(By.xpath("//*[@id='loginForm']/form/div[4]/div/input")).click();	
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='nav-cms']/ul/li[3]/a")).click();
		System.out.println(" Login Successfully, now it is the time to Log Off."); 
		driver.findElement(By.xpath("//*[@id='nav-meta']/ul/li[5]/a")).click();	    
  }

  @AfterMethod
 
  public void afterMethod() {
	   driver.quit();
  }

  @DataProvider
 
  public Object[][] Authentication() throws Exception{
 
	    // Setting up the Test Data Excel file
 
	 	ExcelUtils.setExcelFile("E://MyWorkSpace//OdysseyDDLoginTest//test-data//TestData.xlsx","Sheet1");
	 	sTestCaseName = this.toString();
	  	// From above method we get long test case name including package and class name etc.
	  	// The below method will refine your test case name, exactly the name use have used
 
	  	sTestCaseName = ExcelUtils.getTestCaseName(this.toString()); 
	    // Fetching the Test Case row number from the Test Data Sheet 
	    // Getting the Test Case name to get the TestCase row from the Test Data Excel sheet

//	 	iTestCaseRow = ExcelUtils.getRowContains(sTestCaseName,4); 	
	 	ExcelUtils.getRowContains(sTestCaseName,3); 
	    Object[][] testObjArray = ExcelUtils.getTableArray("E://MyWorkSpace//OdysseyDDLoginTest//test-data//TestData.xlsx","Sheet1"); 	
	    return (testObjArray);
  }
}