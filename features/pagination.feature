Feature: Pagination Function

Background: 

Given the user is on "https://techglobal-training.com/frontend/project-5"

Scenario: Test Case 01 - Validate the main content

Then the user should see the "Previous" button is disabled
And the user should see the "Next" button is enabled
When the user clicks on the "Next" button
Then the user should see the "Previous" button is enabled
When the user clicks on the "Next" button till it becomes disabled
Then the user should see the "Previous" button is enabled
And the user should see the "Next" button is disabled


Scenario: Test Case 02 - Validate the Pagination Next/Previous buttons

Then the user should see the "Previous" button is disabled
And the user should see the "Next" button is enabled
When the user clicks on the "Next" button
Then the user should see the "Previous" button is enabled
When the user clicks on the "Next" button till it becomes disabled
Then the user should see the "Previous" button is enabled
And the user should see the "Next" button is disabled


Scenario: Test Case 03 - Validate the Pagination Cities content

Then the user should see "Tokyo" City with the info below and an image

|City: Tokyo| Country: Japan| Population: 37,435,191|

When the user clicks on the "Next" button
Then the user should see "Delhi" City with the info below and an image

|City: Delhi| Country: India| Population: 29,399,141|

When the user clicks on the "Next" button
Then the user should see "Shanghai" City with the info below and an image

|City: Shanghai| Country: China| Population: 26,317,104|

When the user clicks on the "Next" button
Then the user should see "Sao Paulo" City with the info below and an image

|City: Sao Paulo| Country: Brasil| Population: 21,846,507|

When the user clicks on the "Next" button
Then the user should see "Mexico City" City with the info below and an image

|City: Mexico City| Country: Mexico| Population: 21,671,908|


