module.exports = {
    options: {
       curly: true,
        eqeqeq: true,
        evil: true,
        expr: true,
        forin: true,
        immed: true,
        latedef: true,
        maxdepth: 4,
        maxlen: 120,
        maxparams: 4,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        quotmark: 'single',
        sub: true,
        trailing: true,
        undef: true,
        unused: true
    },
    groups: {
        client: {
            options: {
                browser: true,
                debug: false,
                devel: false,
                jquery: true,
                predef: ['BEM', 'BEMHTML', 'Lego']
            },
            includes: ['*.blocks/**/*.js'],
            excludes: [
                '*.blocks/**/*examples/**/*.js',
                '*.blocks/**/*.deps.js',
                '*.blocks/**/*.bemjson.js',
                '*.blocks/**/*.i18n/*.js'
            ]
        },
        i18n: {
            options: {
                node: true,
                quotmark: 'double'
            },
            includes: ['*.blocks/**/*.i18n/*.js']
        },
        deps: {
            options: { asi: true },
            includes: ['*.blocks/**/*.deps.js']
        },
        bemjson: {
            options: { asi: true },
            includes: ['*.blocks/**/*.bemjson.js']
        }
    }
};
