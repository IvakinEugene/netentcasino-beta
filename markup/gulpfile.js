var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync'),
	sourcemaps	= require('gulp-sourcemaps'),
	pug 		= require('gulp-pug'),
	imagemin 	= require('gulp-imagemin'),
	run 		= require('run-sequence'),
	watch 		= require('gulp-watch'),
	clean 		= require('gulp-contrib-clean');
	src 		= './src',
	dist 		= './dist';

gulp.task('sass', function(){
	gulp.src(src + '/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dist))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: dist,
			directory: true
		},
		notify: false
	});
});

gulp.task('pug', function(){
	gulp.src(src + '/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(dist))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('images', function() {
	gulp.src([src + '/images/*'])
		.pipe(watch(src + '/images/*'))
		.pipe(gulp.dest(dist + '/images'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('js', function() {
	gulp.src(src + '/js/*')
		.pipe(gulp.dest(dist + '/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('fonts', function() {
	gulp.src([src + '/fonts/*'])
		.pipe(watch(src + '/fonts/*'))
		.pipe(gulp.dest(dist + '/fonts'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('clean', function(){
	gulp.src(dist, {read:false})
		.pipe(clean());
});

gulp.task('build', function(){
	run(
		'clean',
		'js',
		'fonts',
		'images',
		'sass',
		'pug');
});

gulp.task('default', ['browser-sync', 'build'], function() {
	gulp.watch(src + '/scss/**/*.scss', ['sass']);
	gulp.watch(src + '/*.html', browserSync.reload);
	gulp.watch(src + '/js/**/*.js', ['js']);
	gulp.watch(src + '/**/*.pug', ['pug']);
	// gulp.watch(src + '/images/*.*', ['images']);
	// gulp.watch(src + '/fonts/*.*', ['fonts']);
});