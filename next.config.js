const withCss = require('@zeit/next-css');
module.exports = withCss({ /* extra optional config */ })

/*

module.exports = {
    webpack: (config) => {

        config.module = {
            rules: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]
        }
        return config
    }
}

config.module.rules.push(
{
  test: /\.(jpe?g|png)$/,
  use: [
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader",
              publicPath: "/_next/",
              outputPath: "static/images/",
              name: "[name]-[hash].[ext]"
            }
          }
        ]
      }
    ]
  }
);
*/