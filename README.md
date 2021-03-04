# API Tasks

Author
Shanmugapriya Surendran

SoapUI 
The Project UserJourney consists of four test cases one end to end journey and three individual Rest Requests.

Prerequisites
SoapUI 5.x

Getting Started

For Windows Execution,

Method1:
1.	Download REST API Project folder.
2.	Enter the input values for the AddUser Request in the 'api.properties' file present in the project folder.
3.	Import the project xml file in the SoapUI tool and execute the desired tests.

Method2:
1.	Download REST API Project folder.
2.	Enter the input values for the AddUser Request in the 'api.properties' file present in the project folder.
3.      Edit the .bat file and with the REST API project location accordingly (where the .xml file is present) and Click save.	
4.	Execute(Double Click) .bat file and verify the HTML report generated inside the REST API project folder as ‘Execution_Report.html’.

The Project can be executed from the windows command prompt as well.
Enter below command
"C:\Program Files\SmartBear\SoapUI-5.5.0\bin\testrunner.bat" "C:\Users\USER_NAME\Desktop\soap ui\UserJourney.xml"

You can run the test directly from SoapUI, or Double click .bat file after configuration of  .xml location.

You will get Html report with Pass/Fail in the project folder once test gets completed.

For MAC OS execution,
Download REST API Project folder.
Enter the input values for the AddUser Request in the 'api.properties' file present in the project folder.
Execution as shell script,
Before execution, please update the correct project path in the shell script.

In Terminal, Shell script – Step to execute:
Go to project location in terminal. Enter ‘runTestsMac.sh’ click enter
Or 
In Terminal, enter below command
/Applications/SoapUI-5.5.0.app/Contents/java/app/bin/testrunner.sh  "/Users/USER_NAME/Desktop/soap ui/UserJourney.xml"
or
In project folder, right click the shell script ‘runTestsMac.sh' and open with Terminal.

REST Assured

The Project RestAssuredHotel is built in Maven with four Cucumber BDD scenarios consisting of one end to end journey and three individual REST requests.

For execution, import the project folder in the IDE and execute the project.
