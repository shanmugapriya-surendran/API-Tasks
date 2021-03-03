package testrunner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions
        (
                features = "src/test/resources/application/restApi.feature",
                glue = "stepdefinitions",
                strict = true,
                plugin = {"pretty",
                        "html:target/cucumber-html-report",
                        "json:target/json_output/cucumber.json",
                        "de.monochromata.cucumber.report.PrettyReports:target/cucumber"
                }
        )
public class TestRunner extends AbstractTestNGCucumberTests {

}
