const path = require('path')

const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addBabelPlugin
} = require('customize-cra')

module.exports = override(
  addBabelPlugin([
    '@quickbaseoss/babel-plugin-styled-components-css-namespace',
    {
      cssNamespace: '&&&'
    }
  ]),
  addWebpackAlias({
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.ts')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
)