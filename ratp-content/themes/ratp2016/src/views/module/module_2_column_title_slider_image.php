<?php

?>
<div class="module_3_column entretien" style="background: <?php echo $background_color ?>">
    <ul id="slider-entretien" class="bxslider">
        <?php foreach ($slider as $slide): ?>
        <li>
            <div class="slider-content">
                <div class="row">
                        <div class="col-md-5 visible-desktop">
                            <div class="img-entretien">
                                <img src="<?php echo $slide['image']['url']?>" atl="Elisabeth Borne">
                            </div>
                        </div>

                        <div class="col-md-7">
                            <div class="text-entretien">
                                <h2><?php echo $slide['title']?></h2>

                                <div class="visible-desktop">
                                    <?php echo $slide['content']?>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </li>
        <?php endforeach; ?>
    </ul>
</div><!-- end entretien -->