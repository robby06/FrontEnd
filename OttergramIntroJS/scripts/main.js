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
        setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
        }