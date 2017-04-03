<?php 
/* Template Name: Home */ 
get_header();
 $sliders = get_field( 'slider'); 
//echo '<pre>'; 
//print_r($sliders); 
var_dump(floatval($sliders[1]['bottom_position_image'])); 
?>
      <div class="row home-slider-overview">
         <div id="sliderContent" class="ui-corner-all slider-custom">
            <div class="viewer ui-corner-all">
               <div class="content-conveyor ui-helper-clearfix">
                  <?php 
                  foreach ($sliders as $key=> $slider): 
                      $slider_desktop = $slider['image_desktop']; 
                      ?>
                        <div class="item" data-slide-index="<?php echo $key; ?>" style="bottom: <?php echo floatval($slider['bottom_position_image']); ?>px; right:  <?php echo floatval($slider['right_position_image']); ?>px">
                           <span class="slide_effect-back slide-pull">
                              <div class="slide_box">
                                 <img src="<?php echo $slider_desktop['url']; ?>" class="img-<?php echo ($key); ?> img-slider <?php if ($slider_desktop['width'] < 1000) echo "img-home-slider-vertical"; else echo "img-home-slider-horizontal"; ?>" data-slide-offset = "<?php echo ($key); ?>"/>
                                 <div class="slide_corner-box">
                                    <a class="slide_page-tip">
                                       <div class="slide_corner-contents">
                                          <div class="slide_corner-button btn-zoom" data-slide-offset = "<?php echo ($key); ?>"><img class="img-rollover" src="../ratp-content/themes/ratp2016/public/img/rollover.png"></div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </span>
                        </div>
                  <?php endforeach; ?>
               </div>
            </div>
            <div class="row thumbnail-scroll">
               <div class="thumbnail-slider">
                  <div id="bx-pager">
                     <ul class="thumbnail-list-img">
                        <?php foreach ($sliders as $key=> $slider): 
                            $slider_desktop = $slider['image_desktop'];  
                          ?>
                        <li class="li-img-<?php echo $key; ?> li-img-thumb <?php if ($key == 0) echo 'img-visiting'; ?>" data-slide-index="<?php echo $key; ?>" style="bottom: <?php echo floatval($slider['bottom_position_image']/10); ?>px; right:  <?php echo floatval($slider['right_position_image']/10); ?>px">
                              <div class="img-drop-active img-thumbnail img-thumb-scroll">                       
                                    <img src="<?php echo $slider_desktop['url']; ?>" class="img-thumbnail-<?php echo $key; ?> img-thumb <?php if ($slider_desktop['width'] < 1000) echo "img-thumb-vertical"; else echo "img-thumb-horizontal"; ?>" data-slide-offset="<?php echo $key; ?>"/>
                              </div>
                        </li>
                        <?php endforeach; ?>
                     </ul>
                     <img id="draggable" src="../ratp-content/themes/ratp2016/public/img/slider-active.png">
                  </div>
               </div>
            </div>
            <div class="frame-slider-cover">
               <div class="noted-slider">
                  <div class="noted-slider-inner">
                  </div>
                  <div class="content-noted">
                     <p class="top-noted-inner">Déplacer vous parmis les visuels avec le curseur</p>
                     <img src="../ratp-content/themes/ratp2016/public/img/handle-scroll.png" class="img-noted-inner">
                     <p class="bottom-noted-inner">ou bien utiliser la frise ci-dessous:</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end row home-slider-overview -->
      <div class="row home-slider-detail">
         <div class="slider-detail-custom">
            <ul class="bxslider slider-detail">
               <?php foreach ($sliders as $key=> $slider): $slider_desktop = $slider['image_desktop']; $slider_mobile = $slider['image_mobile']; ?>
               <li>
                  <div class="slide_effect-back">
                     <div class="slide_box">
                        <img src="<?php echo $slider_desktop['url']; ?>" class="img-<?php echo ($key); ?> img-slider <?php if ($slider_desktop['width'] < 1000) echo "img-vertical"; else echo "img-horizontal"; ?>" data-slide-index="<?php echo $key; ?>" data-slide-offset="<?php echo ($key); ?>" />
                        <div class="slide_corner-box">
                           <a class="slide_page-tip" href="#">
                              <div class="slide_corner-contents">
                                 <div class="slide_corner-button btn-exit" data-slide-index="<?php echo $key; ?>" data-slide-offset="<?php echo ($key); ?>">
                                      <img class="img-rollover" src="../ratp-content/themes/ratp2016/public/img/rollover-close.png">
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                     <span class="content-<?php echo $slider['position_content_desktop']; ?> img-landscape content-img-landscape content-img">
                        <div class="content-img-detail">
                           <div class="title-img"><?php echo $slider['title_image_desktop']; ?></div>
                           <div class="content-detail-body"><?php echo $slider['content_image_desktop']; ?></div>
                        </div>
                     </span>
                  </div>
               </li>
               <?php endforeach; ?>
            </ul>
         </div>
         <div class="control-slider">
            <span id="slider-prev" class="prev-btn active"><img
               src="../ratp-content/themes/ratp2016/public/img/arrow-left.png"></span>
            <span class="box-slide-current"></span>
            <span id="slider-next" class="next-btn active"><img
               src="../ratp-content/themes/ratp2016/public/img/arrow-right.png"></span>
            <div class="share-socials">
               <img src="../ratp-content/themes/ratp2016/public/img/infobulle-partage.png">
            </div>
         </div>
      </div>
      <!-- end row home-slider-detail -->
      <div class="slider-mobile">
                <div class="control-slider-mobile">
                <?php foreach ($sliders as $key=> $slider): 
                  $slider_desktop = $slider['image_desktop']; 
                  $slider_mobile = $slider['image_mobile'];
                  if ($slider_desktop['url'] != ''):
                ?>
                <i class="fa fa-circle item-pagination-circle item-pagination-<?php echo $key; ?> <?php if ($key == 0) echo 'active'; ?>"" data-slide-index-mobile="<?php echo $key; ?>" aria-hidden="true"></i>

            <?php endif; ?>
            <?php endforeach; ?>
         </div>
          <ul class="bxslider slider-mobile">


              <?php foreach ($sliders as $key=> $slider): 
                  $slider_desktop = $slider['image_desktop']; 
                  $slider_mobile = $slider['image_mobile']; 
                  if ($slider_desktop['url'] != ''):
                  ?>

               <li data-slide-index="<?php echo $key; ?>">
                  <img src="<?php echo $slider_desktop['url']; ?>" />
                  <div class="content-img-mobile">
                           <div class="title-img-mobile"><?php echo $slider['title_image_desktop']; ?></div>
                           <div class="content-mobile-detail"><?php echo $slider['content_image_desktop']; ?></div>
                </div>
               </li>
                
                <?php endif; ?>
               <?php endforeach; ?>
          </ul>
      </div>
      <!-- end slider-mobile -->
      <div class="block-publications">
          <h1 class="title">
            Nos Publications
          </h1>
          <div class="row">
            <div class="col-md-4">
              <div class="item-publication">
                <div class="visible-desktop"></div>
                <div class="visible-mobi"></div>
                <h2 class="title-publication">
                  <div class="middel">
                    Rapport d'activité et de  développement durable 2016
                  </div>
                </h2>
                <div class="img-publication">
                  <div class="visible-desktop"><img src="../ratp-content/themes/ratp2016/html/assets/images/publication1.png" alt="publication"></div>
                  <div class="visible-mobi"><img src="../ratp-content/themes/ratp2016/html/assets/images/publication1-mobi.png" alt="publication"></div>
                </div>
                <a href="#" class="btn btn-publications">
                  télécharger le pdf <span>(18 Mo)</span>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item-publication">
                <h2 class="title-publication">
                  <div class="middel">
                    L'Essentiel 2016
                  </div>
                </h2>
                <div class="img-publication">
                  <div class="visible-desktop"><img src="../ratp-content/themes/ratp2016/html/assets/images/publication2.png" alt="publication"></div>
                  <div class="visible-mobi"><img src="../ratp-content/themes/ratp2016/html/assets/images/publication2-mobi.png" alt="publication"></div>
                  
                  
                </div>
                <a href="#" class="btn btn-publications">
                  télécharger le pdf <span>(4,0 Mo)</span>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item-publication">
                <h2 class="title-publication">
                  <div class="middel">
                    Rapport financier <br class="visible-desktop">& RSE 2016
                  </div>
                </h2>
                <div class="img-publication">
                  <div class="visible-desktop"><img src="../ratp-content/themes/ratp2016/html/assets/images/publication3.png" alt="publication"></div>
                  <div class="visible-mobi"><img src="../ratp-content/themes/ratp2016/html/assets/images/publication3-mobi.png" alt="publication"></div>
                  
                </div>
                <a href="#" class="btn btn-publications">
                  télécharger le pdf <span>(7,5 Mo)</span>
                </a>
              </div>
            </div>
          </div>
        </div><!-- end block-publications -->
   </div>
   <!-- end container -->
</div>
<!-- end page-accueil -->
<script src="../ratp-content/themes/ratp2016/public/js/slider.js"></script>