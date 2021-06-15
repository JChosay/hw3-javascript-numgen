Assignment number three has been a password generator; you can find it attached.

Here is what I want understood: this thing was originally due on a Monday. We were playing musical-instructors the previous Thursday and Friday, though, so the information necessary to complete the password generator didn't get discussed. Nobody thought to reach out to this class OVER THE WEEKEND informing us that the assignment was being pushed.

Here's why I want that understood: I did this assignment anyway, and almost none of the resulting code has been discussed in class, STILL. I suspect that you will try to bang me for not doing it the way we were shown, and I literally dare you to try it.

Anyway, it DOES work. Thanks, Google. 

It works by getting a series of user inputs from prompt boxes - a numeric and four boolean values. Upon clicking the button, users are asked for the length of the password they would like to generate. Then prompts ask whether users would like to use each of four character types - uppercase letters, lowercase letters, numbers, and special characters. A variable called "characterSet" is established as an empty array, and ultimately will form the basis for random selection for  password characters. As each character type prompt is answered, JS either pushes or does not push an array matching each type - an array of uppercase letters if answers choose, an array of numbers if they choose, and so on. 

Once all the prompts are answered, and the selection set formed, a blank string variable called "pass" is established to hold each character as they are added by a [for] loop. This loop iterates through a random selection from characterSet by the number of times the user inputted when answering the password-length prompt. When this is finished, the function passes the "pass" variable back to the button-click function, where it takes on the name "password," and is then written to the #password section of the document.

For data validation, the password-length prompt compares user input against three conditions: whether it is a number, whether it is less than 8, and whether it is greater than 128, as per the syllabus. If any of these conditions are met, a prompt is thrown advising the user that their password must be a number between 8-128, and is then re-prompted. Once a valid number has been entered, the function moves on. The other piece of data validation in the syllabus is that at least one data type should be chosen; if, when the prompts are finished and the characterSet array is empty, then the user hasn't chosen one. In such a case, the #password area will display a message saying that users should pick at least one character type, and to try again.