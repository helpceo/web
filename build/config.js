const pkg = require('../package')

module.exports = {
    port: 4000,
    vendor: Object.keys(pkg.dependencies),
    cssModules: false
}