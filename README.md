# Lab 8 - Starter
## 1.
Answer: 1. Within a Github action that runs whenever code is pushed
Reason: Because then bugs can be discovered early on in development and human error is eliminated if these tests are run automatically (as an action).

## 2.
Answer: No
Reason: Because the E2E test only emulates user input which means supplying a function with certain inputs and outputs would be clunky and difficult. It would also be difficult to observe the function outputs.

## 3.
Answer: No
Reason: The "message" feature likely requires a lot functionality under the hood that needs to be tested individually and it's a feature that will be available to users and so UI tests will better gauge its functionality.

## 4. 
Answer: Yes
Reason: The "max message length" is a single easy to define component of the message system and thus will be very simple to test. There also isn't really a user experience attached to the message character length limitation (at least at a technical level).

