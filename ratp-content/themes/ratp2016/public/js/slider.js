// /**
//  * Created by nobikun1412 on 24-Mar-17.
//  */
var isHover = false;
var slideIndex = 0;
var sliderDetail;
var sliderDetailTotal;
var oldIndexOverview;
var conveyor = jQuery(".content-conveyor", jQuery("#sliderContent"));
var item_vertical = jQuery(".item img.img-home-slider-vertical", jQuery("#sliderContent"));
var item_horizontal = jQuery(".item img.img-home-slider-horizontal", jQuery("#sliderContent"));
var thumbnailScroll = jQuery('#bx-pager');
var ul_thumbnail = jQuery('ul.thumbnail-list-img');
var widthBxPager = 0;
var view = jQuery('.viewer.ui-corner-all');

//set length of conveyor
conveyor.css("width", item_vertical.length * parseInt(item_vertical.css("width")) + item_horizontal.length * parseInt(item_horizontal.css("width")));

var drag = jQuery("#draggable");
var widthBody = parseInt(jQuery('body').css("width"));
var widthSliderContent = parseInt(jQuery('#sliderContent').css("width"));
var posLeftConveyor = (widthBody - widthSliderContent) / 2;
var widthConveyor = parseInt(conveyor.css("width"));

var posXInit = (widthBody - parseInt(jQuery('.thumbnail-slider').css("width"))) / 2 + 8;
var startX;
widthBxPager = widthConveyor / 10;
console.log('widthThumbnailScroll: ' + widthBxPager);
var widthThumbnailScroll = widthBxPager;
thumbnailScroll.css("width", widthBxPager + 12);
var totalImgSlider = item_vertical.length + item_horizontal.length;
var slideIndexThumb = 0;
//create slider
jQuery(function() {

    conveyor.draggable({
        axis: 'x',
        scroll: false,
        containment: [-widthConveyor + posLeftConveyor + widthSliderContent, 0, posLeftConveyor, 0],
        start: function() {
            startX = drag.position().left;
            console.log('start: ' + startX);
        },
        drag: function() {
            var indexThumb = 0;
            var posXSlider = jQuery(this).position().left;
            var posXDrag = drag.position().left;
            var moveXThumb = posXSlider/10;
            drag.css("left", -moveXThumb + "px");

            console.log('IS: ' + posXDrag);

            // if (posXDrag < 45) {
            //     indexThumb = 0;
            // } else {
            //     var tmp = Math.floor((posXDrag + 40 - parseInt(li_thumbnail.css("width"))) / (parseInt(li_thumbnail.css("width")) / 2));
            //     indexThumb = Math.floor(tmp / 2) + 1;
            // }
            // if (startX < posXDrag) {
            //     jQuery('li-img-' + indexThumb).addClass('img-visiting');

            //     var preIndexThumb = indexThumb - 1;
            //     jQuery('li-img-' + preIndexThumb).removeClass('img-visiting');
            // } else {
            //     var liSelected = 'li-img-' + indexThumb;
            //     jQuery('li-img-' + preIndexThumb).addClass('img-visiting');
            //     var preIndexThumb = indexThumb + 1;
            //     jQuery('li-img-' + preIndexThumb).removeClass('img-visiting');
            // }
        },
        stop: function() {
            var posXSlider = jQuery(this).position().left;
        }
    });
});

jQuery(function() {
    jQuery("#draggable").draggable({
        axis: 'x',
        scroll: false,
        // containment: [posXInit, 0, posLeftConveyor + 10 + (li_thumbnail.length - 1) * parseInt(li_thumbnail.css("width")), 0],
        containment: '#bx-pager',
        scrollSpeed: 10000,
    start: function() {
            startX = drag.position().left;        
            console.log('start: ' + startX);
        },
        drag: function(e, ui) {
            posXDrag = jQuery(this).position().left;
            var leftOfDrag = jQuery('#draggable').position().left + 7;
            var rightOfDrag = leftOfDrag + 96;
            var distMoveThumb = posXDrag - startX;
            var moveXSlider = (posXDrag) * (widthConveyor / (widthThumbnailScroll));
            conveyor.css("left", "-" + moveXSlider + "px");
            // if (jQuery('.li-img-' + slideIndexThumb).find('.img-thumbnail img').hasClass('img-thumb-vertical') == true) {
            //     if (distMoveThumb > 32) {
            //         jQuery('.li-img-' + slideIndexThumb).removeClass('img-visiting');
            //         slideIndexThumb = slideIndexThumb + 1;
            //         for (var i = parseInt(slideIndexThumb); i < (parseInt(slideIndexThumb) + 3); i++) {
            //             if (i > (totalImgSlider - 1)) {
            //                 return;
            //             }
            //             else {
            //                 var positionOfNextThumb = jQuery('.li-img-' + i).position().left;
            //                 if (positionOfNextThumb < rightOfDrag) {
            //                     jQuery('.li-img-' + i).addClass('img-visiting');
            //                 } 
            //                 // else {
            //                 //     jQuery('.li-img-' + i).removeClass('img-visiting');
            //                 // }
            //             }
            //         }
            //     }
            //     else {

            //     }
            // }
            // else {
            //     if (distMoveThumb > 64) {
            //         jQuery('.li-img-' + slideIndexThumb).removeClass('img-visiting');
            //         slideIndexThumb = slideIndexThumb + 1;
            //     }
            // }
        }
    });
});

jQuery(".img-drop-active").droppable({
    accept: '#draggable',
    axis: 'x',
    containment: '#bx-pager',
        scrollSpeed: 10000,
    start: function() {
            startX = drag.position().left;
            var posXDrag = drag.position().left;
            console.log('IS: ' + posXDrag);
            console.log('start: ' + startX);
        },
    over: function(event, ui) {
        slideIndex = jQuery(this).parent().attr('data-slide-index');
        var leftOfDrag = jQuery('#draggable').position().left + 7;
        var rightOfDrag = leftOfDrag + 96;

        for (var i = parseInt(slideIndex) - 1; i > (parseInt(slideIndex) - 4); i--) {
            if (i < 0) return;
            else {
                if (jQuery('.li-img-' + i).find('.img-thumbnail img').hasClass('img-thumb-vertical') == true) {
                     var positionOfPreThumb = jQuery('.li-img-' + i).position().left + 32;
                }
                else  var positionOfPreThumb = jQuery('.li-img-' + i).position().left + 64;

                if (positionOfPreThumb > leftOfDrag) {
                    jQuery('.li-img-' + i).addClass('img-visiting');

                }
                else {
                    jQuery('.li-img-' + i).removeClass('img-visiting');
                    break;
                } 
            } 
        }

        for (var i = parseInt(slideIndex) + 1; i < (parseInt(slideIndex) + 4); i++) {
            if (i > (totalImgSlider - 1)) {
                return;
            }
            else {
                var positionOfNextThumb = jQuery('.li-img-' + i).position().left;
                if (positionOfNextThumb < rightOfDrag) {
                    jQuery('.li-img-' + i).addClass('img-visiting');
                } 
                else {
                    jQuery('.li-img-' + i).removeClass('img-visiting');
                    break;
                }
            }
        }

        jQuery('.li-img-' + slideIndex).addClass('img-visiting');
    },
    out: function(event, ui) {
        // jQuery(this).parent().removeClass('img-visiting');
    },
    drop: function() {

    }
});

jQuery('.row.home-slider-overview').hover(function(event) {
    if (isHover == false) {
        isHover = true;
    } else if (isHover == true) {
        jQuery(this).addClass('hovered');
        return;
    }
});

jQuery('.frame-slider-cover').click(function() {
    jQuery(this).parent().addClass('hovered');
    jQuery(this).hide();
});

jQuery('ul.thumbnail-list-img li').click(function() {
    var oldIndex = jQuery(".img-visiting").attr('data-slide-index');
    chooseThumbnailImage(jQuery(this), oldIndex);
});

function chooseThumbnailImage($this, oldIndex) {
    var currentIndex = $this.attr('data-slide-index');
    // var 
    $this.addClass('img-visiting');
    jQuery('.li-img-' + oldIndex).removeClass('img-visiting');
    var posX = $this.position().left;
    var posY = jQuery('#draggable').position().top;
    var oldNexLiSelect = parseInt(oldIndex) + 1;
    var oldSecondLiSelect = parseInt(oldNexLiSelect) + 1;
    if (currentIndex == (totalImgSlider - 1)) {
        if ($this.find('.img-thumbnail img').hasClass('img-thumb-vertical') == true) {
            posX = posX - 6 - 64;
        } else {
            posX = posX - 6 - 32;
        }
        var newNexLiSelect = parseInt(currentIndex) - 1;
        var newSecondLiSelect = parseInt(newNexLiSelect) - 1;

    } else {
        posX = posX - 6;
        var newNexLiSelect = parseInt(currentIndex) + 1;
        var newSecondLiSelect = parseInt(newNexLiSelect) + 1;
    }

    if ((jQuery('.li-img-' + oldIndex).find('.img-thumbnail img').hasClass('img-thumb-vertical') == true) && (jQuery('.li-img-' + oldNexLiSelect).find('.img-thumbnail img').hasClass('img-thumb-vertical') == true)) {
        jQuery('.li-img-' + oldNexLiSelect).removeClass('img-visiting');
        jQuery('.li-img-' + oldSecondLiSelect).removeClass('img-visiting');
    } else {
        jQuery('.li-img-' + oldNexLiSelect).removeClass('img-visiting');
    }

    if (($this.find('.img-thumbnail img').hasClass('img-thumb-vertical') == true) && (jQuery('.li-img-' + newNexLiSelect).find('.img-thumbnail img').hasClass('img-thumb-vertical') == true)) {
        jQuery('.li-img-' + newNexLiSelect).addClass('img-visiting');
        jQuery('.li-img-' + newSecondLiSelect).addClass('img-visiting');
    } else {
        jQuery('.li-img-' + newNexLiSelect).addClass('img-visiting');
    }
    jQuery('#draggable').animate({
        'top': posY + 'px',
        'left': posX + 'px'
    }, 100, function() {

    });

    var newY = conveyor.position().top;
    var newX = posX * 10;
    conveyor.animate({
        'left': "-" + newX + 'px'
    }, 100, function() {

    });
}


jQuery('#sliderContent div.item .btn-zoom').click(function() {
    var slideOffset = jQuery(this).data('slide-offset');
    oldIndexOverview = jQuery(this).parents('.item').data('slide-index');
    jQuery('.row.home-slider-overview').hide();
    jQuery('.row.home-slider-detail').show();
    sliderDetail = jQuery('.bxslider.slider-detail').bxSlider({
        startSlide: slideOffset,
        slideMargin: 50,
        controls: false,
        speed: 500,
        pagerType: 'short',
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            sliderDetailTotal = sliderDetail.getSlideCount();
            updateIndexSlider(newIndex, sliderDetailTotal);
        },
    });

    sliderDetailTotal = sliderDetail.getSlideCount();
    updateIndexSlider(slideOffset, sliderDetailTotal);
    sliderDetail.reloadSlider();
});

jQuery('ul.bxslider.slider-detail li .btn-exit').click(function() {
    slideIndex = jQuery(this).data('slide-index');
    sliderDetail.destroySlider();
    jQuery('.row.home-slider-overview').show();
    jQuery('.row.home-slider-detail').hide();
    var liSelected = 'li-img-' + slideIndex;
    var $this = jQuery('li.' + liSelected)
    chooseThumbnailImage($this, oldIndexOverview);
});

function updateIndexSlider(newIndex, totalIndex) {
    newIndex = newIndex + 1;
    jQuery('.box-slide-current').html(newIndex + '/' + totalIndex);
    if (newIndex == 1) {
        jQuery('#slider-prev').addClass('deactive');
        jQuery('#slider-next').removeClass('deactive');
    } else if (newIndex == totalIndex) {
        jQuery('#slider-next').addClass('deactive');
        jQuery('#slider-prev').removeClass('deactive');
    } else {
        jQuery('#slider-prev').removeClass('deactive');
        jQuery('#slider-next').removeClass('deactive');
    }
}

jQuery('.next-btn').click(function() {
    var currentDetail = sliderDetail.getCurrentSlide();
    if (currentDetail != (sliderDetailTotal - 1)) {
        sliderDetail.goToNextSlide();
        updateIndexSlider(currentDetail + 1, sliderDetailTotal);
    }
});

jQuery('.prev-btn').click(function() {
    var currentDetail = sliderDetail.getCurrentSlide();
    if (currentDetail != 0) {
        sliderDetail.goToPrevSlide();
        updateIndexSlider(currentDetail - 1, sliderDetailTotal);
    }
});