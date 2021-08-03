// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
    publicPath: process.env.NODE_ENV === 'austin-portfolio'
    ? '/my-project/'
    : '/',
    // **optional** default: `{}`
    // override vscode settings
    // Notice: It only affects the settings used by Vetur.
    settings: {
        "vetur.useWorkspaceDependencies": true,
        "vetur.experimental.templateInterpolationService": true
    },
    // **optional** default: `[{ root: './' }]`
    // support monorepos
}