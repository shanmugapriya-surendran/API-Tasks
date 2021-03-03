package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import org.json.simple.JSONObject;
import org.junit.Assert;

import java.io.*;
import java.util.Properties;
import java.util.logging.Logger;

import static io.restassured.RestAssured.given;

public class RestEnd2End {
    Properties properties;
    static Logger log = Logger.getLogger(RestEnd2End.class.getName());

    public RestEnd2End() throws  IOException {
        BufferedReader testData = new BufferedReader(new FileReader(System.getProperty("user.dir") + File.separator + "src"+ File.separator +"test"+ File.separator +"resources"+ File.separator +"testData.properties"));
        properties = new Properties();
        properties.load(testData);
    }

    String email = "";
    JSONObject jsonObject;



    @Given("I am a new hotel customer with {string}")
    public void addUser(String emailFromStory) {
        log.info("Execution Started");
        email = emailFromStory;
    }

    @Given("I am a new hotel customer")
    public void newHotelCust(){
        email = properties.getProperty("email");
    }



    @Given("I am a existing hotel customer")
    public void deleteUser() {
        log.info("Execution Started");
    }

    @When("Set request body")
    public void setRequestBody() {
        jsonObject = new JSONObject();
        jsonObject.put("email", email);
        jsonObject.put("password", properties.getProperty("password"));
        jsonObject.put("firstName", properties.getProperty("firstName"));
        jsonObject.put("lastName", properties.getProperty("lastName"));
        jsonObject.put("title", properties.getProperty("title"));
        log.info(jsonObject.toString());
    }

    @When("Send Post HTTP request")
    public void postHttpRequest() {
        String resultResponse = given().body(jsonObject.toJSONString()).
                when().
                post(properties.getProperty("uri")).
                then().statusCode(200).log().all().extract().response().asString();

        JsonPath jp = new JsonPath(resultResponse);
        try {
            String user = jp.get("body").toString();
        } catch (NullPointerException e) {
            Assert.fail("Please provide valid email id");
        }
        log.info(jp.get("body").toString());

        //Below code checks whether emailId in request and customerID in response are same.
//        if(!email.equalsIgnoreCase(jp.get("body.customerId").toString())){
//            Assert.fail("Not correct customer ID." + " Request - email "+ email +" Response - customer id "+ jp.get("body.customerId").toString());
//        }
        email = jp.get("body.customerId");
    }

    @When("Able to view added customer")
    public void viewAddedCustomer(){
        String resultResponse = given().when().get(properties.getProperty("uri") + "/" + email).then().statusCode(200).log()
                .all().extract().response().asString();

        JsonPath jp = new JsonPath(resultResponse);
        log.info(jp.get("customerId").toString());
    }

    @When("Able to delete added customer")
    public void deleteAddedCustomer() {
        String resultResponse = given().when().delete(properties.getProperty("uri") + "/" + email).then().statusCode(200).log()
                .all().extract().response().asString();

        JsonPath jp = new JsonPath(resultResponse);
        if (!jp.get("deleted").toString().equalsIgnoreCase("true")) {
            Assert.fail("User is not deleted.");
        }
    }

    @When("execute via restAssured for view user")
    public void executedViaRestAssuredViewUser() {
        String resultResponse = given().when().get(properties.getProperty("uri") + "/" + properties.getProperty("email")).then().statusCode(200).log()
                .all().extract().response().asString();

        JsonPath jp = new JsonPath(resultResponse);
        log.info(jp.get("customerId").toString());
    }

    @When("execute via restAssured for delete user")
    public void executedViaRestAssuredDeleteUser() {
        String resultResponse = given().when().delete(properties.getProperty("uri") + "/" + properties.getProperty("email")).then().statusCode(200).log()
                .all().extract().response().asString();

        JsonPath jp = new JsonPath(resultResponse);
        if (!jp.get("deleted").toString().equalsIgnoreCase("true")) {
            Assert.fail("User is not deleted.");
        }
    }

    @Then("Able to view valid HTTP response code")
    public void response() {
        log.info("Response is validated in above step");
    }


}
