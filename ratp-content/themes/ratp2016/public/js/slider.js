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
var draggableScroll = jQuery('#draggable .content');
var draggableScrollContent = jQuery('#draggable .content .scroll-content');
var ul_thumbnail = jQuery('ul.thumbnail-list-img');
var widthBxPager = 0;
var view = jQuery('.viewer.ui-corner-all');
var item = jQuery(".item", jQuery("#sliderContent"));

//set length of conveyor
conveyor.css("width", item_vertical.length * parseInt(item_vertical.css("width")) + item_horizontal.length * parseInt(item_horizontal.css("width")));

var drag = jQuery("#draggable");
var widthBody = parseInt(jQuery('body').css("width"));
var widthSliderContent = parseInt(jQuery('#sliderContent').css("width"));
var heightSliderContent = parseInt(jQuery('#sliderContent').css("width"));
var posTopSliderContent = jQuery('#sliderContent').offset().top;
var posLeftConveyor = (widthBody - widthSliderContent) / 2;
var widthConveyor = parseInt(conveyor.css("width"));
var posXInit = (widthBody - parseInt(jQuery('.thumbnail-slider').css("width"))) / 2 + 8;
var startX;
widthBxPager = widthConveyor / 10;
console.log('widthThumbnailScroll: ' + widthBxPager);
var widthThumbnailScroll = widthBxPager;
thumbnailScroll.css("width", widthBxPager + 12);
draggableScrollContent.css("width", widthBxPager + 12);
var totalImgSlider = item_vertical.length + item_horizontal.length;
var slideIndexThumb = 0;

jQuery(function() {
    conveyor.draggable({
        axis: 'x',
        scroll: true,
        scrollSpeed: 100,
        scrollSensitivity: 100,
        containment: [-widthConveyor + posLeftConveyor + widthSliderContent, 0, posLeftConveyor, 0],
        start: function() {

        },
        drag: function(event, ui) {
            var indexThumb = 0;
            var posXSlider = jQuery(this).position().left;
            var posXDrag = drag.position().left;
            var moveXThumb = posXSlider/10;
            drag.css("left", -moveXThumb + "px");
            moveXThumb = moveXThumb - 6;
            draggableScrollContent.css("left", "-" + -moveXThumb + "px");
            var leftOfDrag = jQuery('#draggable').position().left + 6;
        },
        stop: function() {
        }
    });
});

jQuery(function() {
    jQuery("#draggable").draggable({
        axis: 'x',
        scroll: true,
        containment: '#bx-pager',
        scrollSpeed: 100,
        scrollSensitivity: 100,
        start: function() {

        },
        drag: function(e, ui) {
            posXDrag = jQuery(this).position().left;
            var leftOfDrag = jQuery('#draggable').position().left + 6;
            var rightOfDrag = leftOfDrag + 96;
            var moveXSlider = (posXDrag) * (widthConveyor / (widthThumbnailScroll));
            conveyor.css("left", "-" + moveXSlider + "px");
            draggableScrollContent.css("left", "-" + leftOfDrag + "px");
        }
    });
});

jQuery(".img-drop-active").droppable({
    accept: '#draggable',
    axis: 'x',
    containment: '#bx-pager',
    scroll: true,
    scrollSpeed: 100,
    scrollSensitivity: 100,
    start: function() {

    },
    over: function(event, ui) {
    },
    out: function(event, ui) {

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
    jQuery('.li-img-' + oldIndex).removeClass('img-visiting');
    chooseThumbnailImage(jQuery(this), oldIndex);
});

function chooseThumbnailImage($this, oldIndex) {
    slideIndex = $this.attr('data-slide-index');
    var posX = $this.position().left;
    var posXDrag = jQuery('#draggable').position().left;
    if (slideIndex == (totalImgSlider - 1)) {
        if ($this.find('.img-thumbnail img').hasClass('img-thumb-vertical') == true) {
            posX = posX - 6 - 64;
        } else {
            posX = posX - 6 - 32;
        }
    } else {
        posX = posX - 6;
    }
    drag.animate({
        'left': posX + 'px'
    }, 200, function() {

    });
    var newX = posX * 10;
    conveyor.animate({
        'left': "-" + newX + 'px'
    }, 200, function() {
    });
    posX = posX + 6;

    draggableScrollContent.animate({
        'left': -posX + "px" 
    }, 200, function() {

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
        pagerCustom: '.customSlider',
        touchEnabled: false,
        pagerType: 'short',
        infiniteLoop: false,
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
     zoomOutImage(currentDetail);
    if (currentDetail != (sliderDetailTotal - 1)) {
        sliderDetail.goToNextSlide();
        updateIndexSlider(currentDetail + 1, sliderDetailTotal);
    }
});

jQuery('.prev-btn').click(function() {
    var currentDetail = sliderDetail.getCurrentSlide();
     zoomOutImage(currentDetail);
    if (currentDetail != 0) {
        sliderDetail.goToPrevSlide();
        updateIndexSlider(currentDetail - 1, sliderDetailTotal);
    }
});

//create slider
sliderMobile = jQuery('.bxslider.slider-mobile').bxSlider({
    startSlide: 0,
    slideMargin: 50,
    controls: false,
    pagerCustom: '.customSliderMobile',
    speed: 500,
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
        updateStatusSelectMobile (newIndex, oldIndex);
    }
});

jQuery('i.item-pagination-circle').click(function() {
    var newIndexMobile = jQuery(this).data('slide-index-mobile');
    var currentIndexMobile = sliderMobile.getCurrentSlide();
    updateStatusSelectMobile(newIndexMobile, currentIndexMobile);
    sliderMobile.goToSlide(newIndexMobile);
});

function updateStatusSelectMobile (newIndex, oldIndex) {
    jQuery('.item-pagination-' + newIndex).addClass('active');
    jQuery('.item-pagination-' + oldIndex).removeClass('active');
};


jQuery('.btn-zoom.btn-zoom-in-slider-detail').click(function() {
    var currentImage = sliderDetail.getCurrentSlide();
    zoomInImage(currentImage);
});

jQuery('.btn-zoom.btn-zoom-out-slider-detail').click(function() {
    var currentImage = sliderDetail.getCurrentSlide();
    zoomOutImage(currentImage);
});

function zoomInImage (currentImage) {
    jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).addClass('img-zoom-in');
    jQuery('.slider-detail-custom .bx-viewport').addClass('img-zoom-in');
    jQuery('.row.home-slider-detail .btn-slider-detail').addClass('img-zoom-in');
    jQuery('.row.home-slider-detail .control-slider').addClass('img-zoom-in');
    jQuery('.slider-detail-custom .slide_box .slide_corner-box').hide();
    jQuery('.slider-detail-custom .content-img').hide();
    var heightSliderDetail = parseInt(jQuery('.home-slider-detail .slider-detail-custom .bx-viewport').css("height"));
    var posTopSliderDetail = jQuery('.home-slider-detail .slider-detail-custom .bx-viewport').offset().top;
    var posLeftSliderDetail = jQuery('.home-slider-detail .slider-detail-custom .bx-viewport').offset().left;
    var widthSliderDetail = parseInt(jQuery('.home-slider-detail .slider-detail-custom .bx-viewport').css("width"));
    var widthImage = jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).width();
    var heightImage = jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).height();
    jQuery('ul.slider-detail li img.img-zoom-in.img-slider.img-' + currentImage).draggable({
        containment: [-widthImage + posLeftSliderDetail + widthSliderDetail, -heightImage + heightSliderDetail + posTopSliderDetail, posLeftSliderDetail, posTopSliderDetail],

        start: function() {

        },
        drag: function(e, ui) {
            
        }
    });
     jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).draggable('enable');
    // alert(currentImage);
}
function zoomOutImage (currentImage) {
    jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).removeClass('img-zoom-in');
    jQuery('.slider-detail-custom .bx-viewport').removeClass('img-zoom-in');
    jQuery('.row.home-slider-detail .btn-slider-detail').removeClass('img-zoom-in');
    jQuery('.row.home-slider-detail .control-slider').removeClass('img-zoom-in');
    jQuery('.slider-detail-custom .slide_box .slide_corner-box').show();
    jQuery('.slider-detail-custom .content-img').show();
    jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).css('top', 0);
    jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).css('left', 0);
    if (jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).hasClass('ui-draggable') == true) {
            jQuery('ul.slider-detail li img.img-slider.img-' + currentImage).draggable('disable');
        }
}