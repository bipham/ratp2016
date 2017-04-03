<div class="block-publications">
  <h1 class="title">
    <?php echo $title ?>
  </h1>

  <div class="row">
    <?php foreach ($lists as $item): ?>
      <div class="col-md-4">
        <div class="item-publication">
          <div class="visible-desktop"></div>
          <div class="visible-mobi"></div>
          <h2 class="title-publication">
            <div class="middel">
              <?php echo $item['title']; ?>
            </div>
          </h2>
          <div class="img-publication">
            <div class="visible-desktop">
              <img src="<?php echo $item['image']['url'] ?>" alt="publication">
            </div>
            <div class="visible-mobi">
              <img src="<?php echo (isset($item['image_mobi'])) ? $item['image_mobi']['url'] : $item['image']['url'] ?>"
                   alt="publication">
            </div>
          </div>
          <a href="<?php echo $item['link'] ?>" class="btn btn-publications">
            <?php echo $item['download_title'] ?> <span>(<?php echo $item['download_size'] ?>)</span>
          </a>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div><!-- end block-publications -->