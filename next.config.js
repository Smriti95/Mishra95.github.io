// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }
const withOffline = require('next-offline')

const nextConfig = {}

module.exports = withOffline(nextConfig)