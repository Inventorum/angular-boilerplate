// Generated on 2014-03-18 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var configFile = '__grunt_config.js'

  // Define the configuration for all the tasks
  grunt.initConfig({
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': ['app/*.html', 'app/partials/{,*/}*.html', 'app/scripts/{,*/}*.js']
        }
      }
    },
    ngconstant: {
      serve_staging: {
        options: {
          name: 'config',
          dest: '<%= directories.app %>/' + configFile,
          constants: {
            $package: grunt.file.readJSON('package.json'),
            Config: grunt.file.readJSON('app/settings/staging.json')
          }
        }
      },
      serve_dist: {
        options: {
          dest: '<%= directories.app %>/' + configFile,
          name: 'config',
          constants: {
            $package: grunt.file.readJSON('package.json'),
            Config: grunt.file.readJSON('app/settings/staging.json')
          },
          values: {
            debug: true
          }
        }
      },
      dist: {
        options: {
          dest: '<%= directories.app %>/' + configFile,
          name: 'config',
          constants: {
            $package: grunt.file.readJSON('package.json'),
            Config: grunt.file.readJSON('app/settings/default.json')
          },
          values: {
            debug: true
          }
        }
      },
      test: {
        options: {
          dest: '<%= directories.app %>/' + configFile,
          name: 'config',
          constants: {
            $package: grunt.file.readJSON('package.json'),
            Config: grunt.file.readJSON('app/settings/test.json')
          },
          values: {
            debug: true
          }
        }
      },
      staging: {
        options: {
          name: 'config',
          dest: '<%= directories.build %>/' + configFile,
          constants: {
            $package: grunt.file.readJSON('package.json'),
            Config: grunt.file.readJSON('app/settings/staging.json')
          }
        }
      },
      production: {
        options: {
          name: 'config',
          dest: '<%= directories.build %>/' + configFile,
          constants: {
            $package: grunt.file.readJSON('package.json'),
            Config: grunt.file.readJSON('app/settings/production.json')
          }
        }
      }
    },
    // Project settings
    directories: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      build: 'build/staging/' //default is always staging
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= directories.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= directories.app %>/styles/{,*/}*.less'],
        tasks: ['less', 'newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= directories.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= directories.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    less: {
      dist: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          '<%= directories.app %>/styles/all.css': '<%= directories.app %>/styles/{,*/}*.less'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        protocol: 'https'
      },
      livereload: {
        options: {
          protocol: 'https',
          open: true,
          base: [
            '.tmp',
            '<%= directories.app %>'
          ],
          middleware: function (connect, options) {
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }
            console.log("\n\n" + JSON.stringify(options) + "\n\n")

            // Setup the proxy
            var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

            // Serve static files.
            options.base.forEach(function (base) {
              middlewares.push(connect.static(base));
            });

            // Make directory browse-able.
            var directory = options.directory || options.base[options.base.length - 1];
            middlewares.push(connect.directory(directory));
            return middlewares;
          }
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= directories.app %>'
          ]
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= directories.app %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= directories.build %>/*',
              '!<%= directories.build %>/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }
        ]
      }
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= directories.app %>/index.html',
        ignorePath: '<%= directories.app %>/'
      }
    },


    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= directories.build %>/scripts/{,*/}*.js',
            '<%= directories.build %>/styles/{,*/}*.css',
            '<%= directories.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= directories.build %>/fonts/{,*/}*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= directories.app %>/index.html',
      css: ['<%= directories.app %>/styles/{,*/}*.css'],
      options: {
        dest: '<%= directories.build %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= directories.build %>/{,*/}*.html'],
      css: ['<%= directories.build %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= directories.build %>', '<%= directories.build %>/images', '<%= directories.build %>/fonts']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= directories.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= directories.build %>/images'
          }
        ]
      }
    },
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= directories.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= directories.build %>/images'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= directories.build %>',
            src: ['*.html', 'views/{,*/}*.html'],
            dest: '<%= directories.build %>'
          }
        ]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: 'scripts.js',
            dest: '.tmp/concat/scripts'
          }
        ]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= directories.build %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= directories.app %>',
            dest: '<%= directories.build %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'views/{,*/}*.html',
              'partials/{,*/}*.html',
              'files/{,*/}*',
              'images/{,*/}*.{webp}',
              'images/{,*/}*', //when imagemin will be active we have to disable this
              'libs/pdfjs/generic/build/*',
              'libs/inventorum.receipt/src/generators/fonts/*',
              'fonts/*',
              'styles/*.css'
            ]
          },
          {
            expand: true,
            dot: true,
            flatten: true,
            cwd: '<%= directories.app %>',
            dest: '<%= directories.build %>/styles/',
            src: [
              'bower_components/{,*/}*.png'
            ]
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= directories.build %>/images',
            src: ['generated/*']
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= directories.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
//        'imagemin',
        'svgmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= directories.build %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= directories.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      options: {
        mangle: false
      }
    },
//    concat: {
//      dist: {
//        src: ['.tmp/concat/scripts/*.js'],
//        dest: '<%= directories.build %>/scripts/all.js',
//      }
//    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', function (target) {
    if (!target) {
      target = 'dist';
    }

    grunt.task.run([
      'clean:server',
      'bower-install',
      'concurrent:server',
        'ngconstant:serve_' + target,
        'configureProxies:' + target,
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'ngconstant:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);


  grunt.registerTask('build', function (target) {
    target = target || 'all';

    if (target == 'all') {
      grunt.task.run(['build:staging', 'build:production']);
      return;
    }

    var directories = grunt.config('directories');
    directories['build'] = 'build/' + target;
    grunt.config('directories', directories);

    var buildOptions = [
      'clean:dist',
      'less',
      'bower-install',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'ngmin',
      'copy:dist',
      'cdnify',
      'cssmin',
        'ngconstant:' + target,
      'uglify',
      'rev',
      'usemin',
      'htmlmin'
    ];

    // To be sure that whatever target you ran, development will always be builded.
    if (buildOptions.indexOf('ngconstant:dist') == -1) {
      buildOptions.push('ngconstant:dist');
    }
    grunt.task.run(buildOptions);
  });
  grunt.loadNpmTasks('grunt-ng-constant');

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
  grunt.registerTask('translations', [
    'nggettext_extract'
  ]);
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-angular-gettext');


};