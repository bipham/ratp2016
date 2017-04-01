<?php

//var_dump($title_black);
//var_dump($title_white);
//var_dump($content);
//var_dump($slider);
?>
<div class="module_3_column intro">
    <div class="base-intro">
        <div class="column-left">
            <h1>
                <span><?php echo $title_black ?></span> <br class="visible-desktop"><?php echo $title_white ?>
            </h1>
        </div>
        <!-- end column-left -->

        <div class="column-right visible-desktop">
            <ul id="slider-intro" class="bxslider">
                <?php foreach($slider as $slide):?>
                <li>
                    <div class="slider-content"><?php echo $slide['content']?></div>
                </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <!-- end column-right -->
    </div>
    <!-- end base-intro -->
    <div class="content-intro">
        <?php echo $content ?>
    </div>
</div><!-- end module-intro -->