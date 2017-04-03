<?php

//var_dump($background);
//var_dump($image);
//var_dump($content);
?>
<div class="module_1_column image_text">
  <div class="item bg-gray" style="background: <?php echo $background?>">
    <div class="img-image_text"><img src="<?php echo $image['url']?>" atl="contries"></div>
    <div class="text-image_text">
      <div class="middel center">
        <div class="visible-desktop"><?php echo $content; ?></div>
        <div class="visible-mobi"><?php echo $content; ?></div>
      </div>
    </div>
  </div>
</div><!-- end image_text -->