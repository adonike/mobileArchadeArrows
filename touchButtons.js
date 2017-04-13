class TouchButtons {

    constructor(config = { }) {

        this.touchEnabled = false;

        window.addEventListener('touchstart', e => {

            // or set some global variable
            this.setTouchEnabled(true);

            window.removeEventListener('touchstart', onFirstTouch, false);

        }, false);

        let touchButtonsContainer = document.createElement('div');

        touchButtonsContainer.innerHTML = `<div id="touchButtonsContainer"><div class="buttonsContainer"><div class="paddingButton"></div><div id="upButton" class="touchButton"></div><div class="paddingButton"></div></div><div class="buttonsContainer"><div id="leftButton" class="touchButton"></div><div id="downButton" class="touchButton"></div><div id="rightButton" class="touchButton"></div></div></div>`;

        document.body.append(touchButtonsContainer);


        this.upButton = document.querySelector('#upButton');
        this.leftButton = document.querySelector('#leftButton');
        this.downButton = document.querySelector('#downButton');
        this.rightButton = document.querySelector('#rightButton');

        let upButtonTouchHandler, leftButtonTouchHandler, downButtonTouchHandler, rightButtonTouchHandler;


        let defaultTouchButtonHander = (event) => {

            event.preventDefault();
            console.log(`Touched ${event.target.id}`);

        };


        if(typeof config.upButtonTouched === 'function'){

            upButtonTouchHandler = (event) => {

                event.preventDefault();
                config.upButtonTouched(event);

            };

        } else {

            upButtonTouchHandler = defaultTouchButtonHander;

        }



        if(typeof config.leftButtonTouched === 'function'){

            leftButtonTouchHandler = (event) => {

                event.preventDefault();
                config.leftButtonTouched(event);

            };

        } else {

            leftButtonTouchHandler = defaultTouchButtonHander;

        }



        if(typeof config.downButtonTouched === 'function'){

            downButtonTouchHandler = (event) => {

                event.preventDefault();
                config.downButtonTouched(event);

            };

        } else {

            downButtonTouchHandler = defaultTouchButtonHander;

        }



        if(typeof config.rightButtonTouched === 'function'){

            rightButtonTouchHandler = (event) => {

                event.preventDefault();
                config.rightButtonTouched(event);

            };

        } else {

            rightButtonTouchHandler = defaultTouchButtonHander;

        }


        if(this.isTouchDevice){

            console.log('touch device!');

            upButton.addEventListener('touchstart', upButtonTouchHandler);

            leftButton.addEventListener('touchstart', leftButtonTouchHandler);

            downButton.addEventListener('touchstart', downButtonTouchHandler);

            rightButton.addEventListener('touchstart', rightButtonTouchHandler);

        } else {

            console.log('Not touch device!');

            upButton.addEventListener('click', upButtonTouchHandler);

            leftButton.addEventListener('click', leftButtonTouchHandler);

            downButton.addEventListener('click', downButtonTouchHandler);

            rightButton.addEventListener('click', rightButtonTouchHandler);

        }
    }


    setTouchEnabled(value){
        this.touchEnabled = value;
    }
}


// new TouchButtons({
//     upButtonTouched: e => { keyPress('rotate'); },
//     leftButtonTouched: e => { keyPress('left'); },
//     downButtonTouched: e => { keyPress('down'); },
//     rightButtonTouched: e => { keyPress('right'); }
// });
