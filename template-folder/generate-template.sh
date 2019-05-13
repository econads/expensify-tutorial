if [[ -z $1 ]]
then
  echo "Provide the project name as an argument"
  exit
else 
  echo "Project name: ${1}"
fi

SETUP=setup.sh 

cp ../${SETUP} .

echo '{
  "name": "<project>",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Nadine ",
  "license": "MIT",
  "private": false,
  "scripts": {
    "serve": "live-server public/",
    "build": "webpack --watch",
    "dev-server": "webpack-dev-server"
  },
  "scripts-comments": {
    "build": "for the physical bundle.js file (prod)",
    "dev-server": "for in memory bundle.js file (dev)"
  },
  "dependencies": {
    "babel-cli": "6.24.1",
    "babel-core": "6.25.0",
    "babel-loader": "7.1.1",
    "babel-plugin-transform-class-properties": "6.24.1",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
    "live-server": "^1.2.1",
    "normalize.css": "7.0.0",
    "react": "16.0.0",
    "react-dom": "16.0.0",
    "react-modal": "2.2.2",
    "validator": "8.0.0",
    "webpack": "3.1.0",
    "webpack-dev-server": "2.5.1"
  }
}' > package.json

sed -i "s/<project>/${1}/" package.json

yarn global remove babel-cli live-server
sudo npm uninstall -g babel-cli live-server
yarn add live-server babel-cli@6.24.1
yarn add webpack@3.1.0
yarn add react@16.0.0 react-dom@16.0.0
yarn add babel-core@6.25.0 babel-loader@7.1.1
yarn add webpack-dev-server@2.5.1
###allows use of properties direct in the class
yarn add babel-plugin-transform-class-properties@6.24.1

yarn add react-modal@2.2.2
yarn add style-loader@0.18.2 css-loader@0.28.4
yarn add sass-loader@6.0.6 node-sass@4.5.3
yarn add normalize.css@7.0.0
yarn add uuid@3.1.0

echo "const path = require('path');

//entry point -> output
module.exports = {
   entry: './src/app.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
      }, {
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader'
         ]
      }
   ]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public')
   }
};
" > webpack.config.js

echo '{
    "presets": [
        "env",
        "react"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}' > .babelrc

./${SETUP}
