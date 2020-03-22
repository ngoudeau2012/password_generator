# password_generator
Password Generator

## Goal
Create a password generator that creates a random password according to the users wants

## Assumptions
- the lowercase alphabet will be used

## User's choices
- How many characters they would like the password to be
- Does the user want to include:
    - capital letters
    - special characters
    - numbers

## Pseudo-Code
Variables 
- Prompt user to get characterLimit variable
- Confirm user to get the parameter of the types of characters we will be using
    - capitalLetters
    - specialCharacters
    - numbers
    
The Character Functions (Created for each characters array)
- Only runs when the User selects "true" in the confirm question for each array
- Random number Generator for each array being used 
- Selects a character from each array
- Stores that variable in 

The Loop
- Create a for loop, equal to the length of the amount of characters the user wants
    - Gather trough a prompt
- Create a function that randomly selects from the "randomly selected characters" functions


# Other Possible Solutions
- Create a base variable list that gets the "user approved" variables added it and have the function randomly pick from the list after all variables are added.

# Problems I encountered
- The biggest challenge of the home was the proper organization of the code. The code works, but i was having major issues organizing it which made it a hard workspace to operate in. My goal after this homework is submitted is to go through and clean it up. Focus on making each of the functions pure functions, something that takes in an input and gives an output at the end of it.
