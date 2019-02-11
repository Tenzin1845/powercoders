module.exports = function (grunt) {
  // Project configuration.
  grunt.initiConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/! <%= pkg.name %> <%=grunt.template.today("yyyy-mm-dd") %> /\n'
      },
      build: {
        src: ['src/js/view.js', 'src/js/model.js', 'src/js/controller.js',
          'src/js/shopping-list-item.js', 'src/js/ui.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};

