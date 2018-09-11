/* eslint
no-var: 0,
no-multi-spaces: 0,
no-mixed-spaces-and-tabs: 0,
no-multiple-empty-lines: 0
*/

var gulp  = require('gulp');
var gutil = require('gulp-util');

// utils
var lazyQuire      = require('./gulp/core/utils/lazyQuire');

// gulpfile booting message
gutil.log(gutil.colors.green('Starting to Gulp! Please wait...'));


/**
 * Browser
 */
gulp.task('browser:sync', lazyQuire(require, './gulp/core/recipes/browser-sync'));


/**
 * Fonts
 */
gulp.task('fonts:clean', lazyQuire(require, './gulp/core/recipes/fonts/clean'));
gulp.task('fonts:dev', gulp.parallel('fonts:clean', lazyQuire(require, './gulp/core/recipes/fonts/dev')));
gulp.task('fonts:prod', gulp.parallel('fonts:clean', lazyQuire(require, './gulp/core/recipes/fonts/prod')));
gulp.task('fonts:watch', gulp.parallel('fonts:dev', lazyQuire(require, './gulp/core/recipes/fonts/watch')));


/**
 * Svgs
 */
gulp.task('svg:clean', lazyQuire(require, './gulp/core/recipes/svg/clean'));
gulp.task('svg:dev', gulp.parallel('svg:clean', lazyQuire(require, './gulp/core/recipes/svg/dev')));
gulp.task('svg:prod', gulp.parallel('svg:clean', lazyQuire(require, './gulp/core/recipes/svg/prod')));
gulp.task('svg:watch', gulp.parallel('svg:dev', lazyQuire(require, './gulp/core/recipes/svg/watch')));


/**
 * Svg Sprites
 */
gulp.task('sprite:clean', lazyQuire(require, './gulp/core/recipes/sprite/clean'));
gulp.task('sprite:dev', gulp.parallel('sprite:clean', lazyQuire(require, './gulp/core/recipes/sprite/dev')));
gulp.task('sprite:prod', gulp.parallel('sprite:clean', lazyQuire(require, './gulp/core/recipes/sprite/prod')));
gulp.task('sprite:watch', gulp.parallel('sprite:dev', lazyQuire(require, './gulp/core/recipes/sprite/watch')));


/**
 * Images
 */
gulp.task('images:clean', lazyQuire(require, './gulp/core/recipes/images/clean'));
gulp.task('images:dev', gulp.parallel('images:clean', lazyQuire(require, './gulp/core/recipes/images/dev')));
gulp.task('images:prod', gulp.parallel('images:clean', lazyQuire(require, './gulp/core/recipes/images/prod')));
gulp.task('images:watch', gulp.parallel('images:dev', lazyQuire(require, './gulp/core/recipes/images/watch')));


/**
 * Scripts
 */
gulp.task('scripts:clean', lazyQuire(require, './gulp/core/recipes/scripts/clean'));
gulp.task('scripts:dev', gulp.parallel('scripts:clean', lazyQuire(require, './gulp/core/recipes/scripts/dev')));
gulp.task('scripts:prod', gulp.parallel('scripts:clean', lazyQuire(require, './gulp/core/recipes/scripts/prod')));
gulp.task('scripts:watch', gulp.parallel('scripts:dev', lazyQuire(require, './gulp/core/recipes/scripts/watch')));


/**
 * Styles
 */
gulp.task('styles:clean', lazyQuire(require, './gulp/core/recipes/styles/clean'));
gulp.task('styles:dev', gulp.parallel('styles:clean', lazyQuire(require, './gulp/core/recipes/styles/dev')));
gulp.task('styles:prod', gulp.parallel('styles:clean', lazyQuire(require, './gulp/core/recipes/styles/prod')));
gulp.task('styles:watch', gulp.parallel('styles:dev', lazyQuire(require, './gulp/core/recipes/styles/watch')));

/**
 * Grouped
 */
gulp.task('default', gulp.parallel(
	'fonts:watch',
	'svg:watch',
	'sprite:watch',
	'images:watch',
	'scripts:watch',
	'styles:watch'
	//'browser:sync',
	)
);

gulp.task('build', gulp.parallel(
	'fonts:prod',
	'svg:prod',
	'sprite:prod',
	'images:prod',
	'scripts:prod',
	'styles:prod'
	)
);