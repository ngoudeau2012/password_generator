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

    - Create a base variable list that gets the "user approved" variables added it and have the function randomly from the list after all variables are added. \

for loop users char
random(
    if (true) randomUpper() U
    if (true)Randomlower()  h
    randomSpecial()         
    randomnumbers()
)

random
    basic variables()
    concat Upper
    concat Special
