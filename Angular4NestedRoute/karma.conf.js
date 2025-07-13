module.exports = function (config) {
  config.set({
    basePath: '',

    //frameworks: ['Jasmine'],

    files: [
      'tmp/e2e-spec.js'
    ],

    exclude: [],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'//,
	  //'commonjs'
    ]
  })
}
