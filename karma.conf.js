process.env.NODE_ENV = 'karma';

const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = config => {
    require('dotenv').config({silent: true});

    config.set({
        frameworks: ['jasmine'],

        reporters: ['coverage-istanbul', 'mocha'],

        preprocessors: {
            'src/**/*.ts': ['webpack']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        coverageIstanbulReporter: {
            reports: ['lcov', 'text-summary'],
            dir: path.join(__dirname, '.coverage'),
            fixWebpackSourcePaths: true
            // 'report-config': {
            //     html: {outdir: 'html'}
            // }
        },

        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },

        files: [
            {pattern: './audio/**/*.ogg', included: false},
            './src/*.spec.ts' //TODO Consider using https://github.com/webpack-contrib/karma-webpack#alternative-usage
        ],

        // logLevel: config.LOG_INFO,

        browsers: [
            //TODO Firefox
            'ChromeNoSecurity'
        ],

        browserNoActivityTimeout: 60000,

        customLaunchers: {
            ChromeNoSecurity: {
                flags: [
                    '--use-fake-ui-for-media-stream',
                    '--use-fake-device-for-media-stream',
                    '--allow-http-screen-capture',
                    '--disable-web-security'
                ].concat(process.env.CI || process.env.TRAVIS ? ['--no-sandbox'] : []),
                chromeDataDir: path.resolve(__dirname, '.chrome'),
                base: 'Chrome'
            }
        },

        client: {
            // captureConsole: true,
            // showDebugMessages: true,
            env: process.env
        }
    });
};
