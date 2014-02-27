// Karma configuration

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  	'app/lib/angular/angular.js',
			'app/lib/angular-route/angular-route.js',
			'test/lib/angular/angular-mocks.js',
      'app/js/*.js',
      'test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'junit', 'coverage'],

		preprocessors: {
		    // source files, that you wanna generate coverage for
		    // do not include tests or libraries
		    // (these files will be instrumented by Istanbul)
		    'app/js/*.js': ['coverage'],
		    'app/js/*.js': ['jshint']		    
		  },
		  
    junitReporter: {
      // will be resolved to basePath (in the same way as files/exclude patterns)
      outputFile: 'logs/test-results.xml'
    },

		coverageReporter: {
		  type : 'html',
		  dir : 'logs/'
		},

		//hostname - set to 127.0.0.1 to speed-up start
		hostname: '127.0.0.1',

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    //browsers: ['Chrome', 'Firefox', 'IE', 'Safari'],
		browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-junit-reporter',
      'karma-coverage',
      'karma-jshint-preprocessor'
    ]

  });
};
