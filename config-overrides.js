const path = require('path')

const {
  override,
  fixBabelImports,
  addWebpackAlias
} = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.ts')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
)