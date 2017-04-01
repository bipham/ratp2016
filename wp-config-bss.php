<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define( 'WP_CONTENT_DIR', '/users/www/html/ratp2016/ratp-content' ); // Do not remove. Removing this line could break your site. Added by Security > Settings > Change Content Directory.
define( 'WP_CONTENT_URL', 'http://web.beesightsoft.com/rapt2016/ratp-content' ); // Do not remove. Removing this line could break your site. Added by Security > Settings > Change Content Directory.


// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rapt2016-dev');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ',SLV|%qvHud)c7|ISzikiCY;)i7*pLpiSwmFv~o0B?peFb 4NX,Jn&a$K?t$8ha.');
define('SECURE_AUTH_KEY',  '=t};*k3mE?Wo6~JJ%I>2j*5Rq=6WABD72+YHK_nT0A<6hP z9}hV98RR3;bmL2ne');
define('LOGGED_IN_KEY',    'h%5gt?RK8.g_1a{DS#hgU1hoXv**neyu8d+@(a%Q&{08i|)jhm<^)?k_ImL.0`V+');
define('NONCE_KEY',        ')Z*..}f/>9QtYr:(*17&71= FBaz7/C_`(k.;#typqC9JjbE5#{s~yv_gBkJY;Yg');
define('AUTH_SALT',        'bO.@N@RGwdtZwZB)>WX}DDJ))s^WR->q`gHVQ.Bx;upyQ}u<> W+7sGvn!ry gsD');
define('SECURE_AUTH_SALT', '1dHC~}JhpEP0y[44gL%{r JCtalO0zZp8nSw8ukn4_Xl{*9`~v4!Yx^zAmj^/&-j');
define('LOGGED_IN_SALT',   '+yD+XJ.:p@1%HC4B/~wv.$n]E<D>XK@3B^(,omdcn<]8S%%tj<7/C%TBn/MuDyQA');
define('NONCE_SALT',       '~~.X)rJo6OBdrE9VfO7>xN_#Iu:_e.F$}ctL_Bf(R=kK_{a/a/*nrf_x=IIiT8_.');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ratp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
