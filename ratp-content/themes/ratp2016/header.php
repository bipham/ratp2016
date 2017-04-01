<?php
/**
 * @package WordPress
 * @subpackage Theme_Compat
 * @deprecated 3.0.0
 *
 * This file is here for backward compatibility with old themes and will be removed in a future version.
 */
_deprecated_file(
	/* translators: %s: template name */
	sprintf( __( 'Theme without %s' ), basename( __FILE__ ) ),
	'3.0.0',
	null,
	/* translators: %s: template name */
	sprintf( __( 'Please include a %s template in your theme.' ), basename( __FILE__ ) )
);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

<title><?php echo wp_get_document_title(); ?></title>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<?php if ( file_exists( get_stylesheet_directory() . '/images/kubrickbgwide.jpg' ) ) { ?>
<style type="text/css" media="screen">

<?php
// Checks to see whether it needs a sidebar
if ( empty($withcomments) && !is_single() ) {
?>
	#page { background: url("<?php bloginfo('stylesheet_directory'); ?>/images/kubrickbg-<?php bloginfo('text_direction'); ?>.jpg") repeat-y top; border: none; }
<?php } else { // No sidebar ?>
	#page { background: url("<?php bloginfo('stylesheet_directory'); ?>/images/kubrickbgwide.jpg") repeat-y top; border: none; }
<?php } ?>

</style>
<?php } ?>

<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="page">
<div class="page-accueil">
   <div class="container">
           <div class="menu-justified-page-accueil">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#">
                <div class="middel">
                  <span class="visible-desktop">Une dynamique de transformation</span>
                  <span class="visible-mobi">2016 en images</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="middel">
                  Une dynamique stratégique
                </div>
              </a>
            </li>
            <li class="visible-desktop"><button href="#" class="btn btn-publications">Publications</button></li>
          </ul>
          <?php if (!is_front_page()): ?>
          <ul class="nav nav-justified">
              <li>
                <a href="#">
                  <div class="middel">
                    <span class="visible-desktop">Le Groupe en 2016</span>
                    <span class="visible-mobi">Groupe</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="middel">
                    <span class="visible-desktop">Acteur essentiel de la ville durable</span>
                    <span class="visible-mobi">Ville durable</span>
                  </div>
                </a>
              </li>
              <li class="active">
                <a href="#">
                  <div class="middel">
                    <span class="visible-desktop">Au rendez-vous de l’excellence</br>voyageurs</span>
                    <span class="visible-mobi">Excellence</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="middel">
                    <span class="visible-desktop">L’innovation dans tous les</br>domaines</span>
                    <span class="visible-mobi">Innovation</span>
                  </div>
                </a>
              </li>
            </ul>
        <?php endif; ?>
        </div>