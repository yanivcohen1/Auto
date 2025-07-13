"use strict";
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['e2e-spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=conf.js.map