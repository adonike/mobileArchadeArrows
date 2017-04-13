Adds up, left, down and up arrow buttons to an html page. If device is mobile, arrows will be touchable, otherwise, they'll be clickable.

Usage:

Load touchButtons.js and touchButtons.css to your html file.

Adjust the sprites path in touchButtons.css styles if necessary. You can also edit from the css file the buttons dimensions.

Instantiate buttons:

new TouchButtons(config);


where config can contain the following properties:

upButtonTouched, leftButtonTouched, downButtonTouched and rightButtonTouched. Each of them must be a function that will receive the event as parameter:


const config = {
    upButtonTouched: e => {
        // your code here.
    },
    leftButtonTouched: e => {
        // your code here.
    },
    downButtonTouched: e => {
        // your code here.
    },
    rightButtonTouched: e => {
        // your code here.
    }
}
