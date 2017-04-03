<div class="module_2_column title_slider" style="background: <?php echo $background_color?>">
  <div class="item">
    <div class="content-title_slider">
      <h2><?php echo $title?></h2>
      <ul id="slider-title_slider" class="bx-slider">
        <?php foreach($slider as $item):?>
        <li>
          <div class="slider-content">
            <div class="title"><?php echo $item['title']?></div>
            <div class="text"><?php echo $item['content']?></div>
            <a href="<?php echo $item['link']?>"><?php echo $item['link']?></a>
          </div>
        </li>
        <?php endforeach;?>
      </ul>
    </div>
  </div>
</div><!-- end title_slider -->