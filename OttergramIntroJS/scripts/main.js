//string variables for each of the data attributes you added to the markup.
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

//accepting arguments by declaring parameters
/*
    In JavaScript, parameters are exactly like variables that are declared inside a function
body. Arguments are values you supply to a function when you call it.
*/
function setDetails(imageUrl, titleText) {
    'use strict';
    // Code will go here
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
    //tell setDetails which image and what text to use when you call it.

    }

    //Returning values from functions
    function imageFromThumb(thumbnail) {
        'use strict';
        return thumbnail.getAttribute('data-image-url');
        }

//The console reports that the value returned was the string "img/otter1.jpg", 
//because imageFromThumb returns the data-image-url of the thumbnail


//It will return the value of the data-image-title attribute.
function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
    }

//It will accept a reference to a thumbnail element and then call
//setDetails, passing in the values from calling imageFromThumb and titleFromThumb.
    function setDetailsFromThumb(thumbnail) {
        'use strict';
        //example of arguments with function calls
        setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
        }

//Adding event listener
//side note: addEventListener accepts two arguments: a string with the name of the event and a function.
function addThumbClickHandler(thumb) {
'use strict';
thumb.addEventListener('click', function (event) {
event.preventDefault();
setDetailsFromThumb(thumb);
});
}

//Accessing all the thumbnails
function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
    }

//Iterating through the array of thumbnails
function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    }
    initializeEvents();
    /* Strict mode explanation
    It was created as a cleaner mode of JavaScript, catching
certain kinds of coding mistakes (like typos in variable names), steering developers away from some
error-prone parts of the language, and disabling some language features that are just plain bad.
    */
//Benefits of strict mode:
/*
• enforces the use of the var keyword
• does not require with statements
• places restrictions on the way the eval function can be used
• treats duplicate names in a function’s parameters as a syntax error

-using at the top of the function, is ignored by older browsers
*/

//Closures:
/*
    When a function is defined inside of another function, it can
use any of the variables and parameters of this outer function
*/
