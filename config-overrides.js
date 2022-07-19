const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
  adjustStyleLoaders,
} = require('customize-cra')

const path = require('path')

module.exports = override(
  // 在这里使用 customize-cra 里的一些函数来修改配置
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true // `style: true` 会加载less文件 & `style: css` 会加载css文件
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': 'red'
      },
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  addWebpackAlias({
    hooks: path.resolve(__dirname, 'src/hooks'),
    utils: path.resolve(__dirname, 'src/utils'),
  })
)
