# DJS02 Project Brief: Whole Number Divider

This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. Before proceeding, familiarise yourself with the Gherkin syntax, a crucial tool for understanding user stories and requirements. Refer to the provided reading materials for a comprehensive guide. Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

This exercise provides user stories in [the Gherkin syntax](https://docs.behat.org/en/v2.5/guides/1.gherkin.html). Please make sure you understand the use and meaning of this syntax before continuing. Check out this resource from [Cucumber](https://cucumber.io/docs/gherkin/reference/).

#### Project Overview

The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. Your task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

**Setup**
The code assumes the existence of an HTML form element and a result element, identified by [data-form] and [data-result] attributes respectively.
It attaches an event listener to the form element to capture form submission.

**Event Listener**
Upon form submission, it prevents the default form submission behavior (page reload) using event.preventDefault().

**Data Processing**
It retrieves form data using FormData, expecting inputs with names dividend and divider.
It then calculates the division result and updates the text content of the result element.

**Error Handling**
It checks if either the dividend or divider inputs are empty. If so, it displays an error message and adds a CSS class to style it accordingly.
It checks if inputs contain only valid numeric characters. If not, it indicates a critical error and advises the user to reload the page.
It converts input values to numbers using Number() to ensure proper mathematical operations.
It checks for common numeric errors such as division by zero or non-numeric inputs and handles them appropriately, throwing and catching errors.

**Result Display**
It displays the division result in the result element after performing necessary error checks and calculations.

**Error Logging**
Any caught errors are logged to the console along with their call stack to aid in debugging.

**CHALLENGES FACED**
-On line 20 when the background color was appearing on the screen the reason was that  i didn't put the dash between critical and error.