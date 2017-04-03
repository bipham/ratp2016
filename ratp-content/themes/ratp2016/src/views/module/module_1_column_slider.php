<div class="module_1_column slider">
  <div class="item bg-white">
    <div class="title-label">
      <div class="visible-desktop"><?php echo $title; ?></div>
      <div class="visible-mobi"><?php echo $title_mobile ?></div>
    </div>
    <div class="visible-desktop">
      <ul id="slider_1_column" class="bx-slider">
        <?php foreach ($slider as $item): ?>
          <li>
            <div class="slider-content">
              <div class="img-text">
                <div class="img">
                  <div class="middel center">
                    <img src="<?php echo $item['image']['url']?>" atl="arrow-down">
                  </div>
                </div>
                <div class="text middel bottom text-small"><?php echo $item['content']?></div>
              </div>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</div><!-- end slider -->