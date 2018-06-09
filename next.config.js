const withCss = require("@zeit/next-css"); //  just in case if you use css
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const {assocPath} = require("ramda");

module.exports = withSass(withCss({ 
	webpack: (config, { dev }) => {
		const eslintRule = {
			test: /\.js$/,
			enforce: "pre",
			exclude: /node_modules/,
			loader: "eslint-loader",
			options: {
				// Emit errors as warnings for dev to not break webpack build.
				// Eslint errors are shown in console for dev, yay :-)
				emitWarning: dev,
			},
		};
		const rules = [].concat(eslintRule, config.module.rules);
		return assocPath(["module", "rules"], rules, config);
	}
}));
/* extra optional config */ 

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

/*
module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      })
    }
    return config
  }
}
*/