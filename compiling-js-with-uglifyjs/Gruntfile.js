module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			'dist/all.min.js': ['js/index.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']); // Register Default Task
};