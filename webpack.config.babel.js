import path from 'path';
import nodeExternals from 'webpack-node-externals';

const client = {
  entry: {
    js: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: { loader: 'babel-loader' }
      }
    ]
  }
};

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [ nodeExternals({ modulesFromFile: true }) ],
  entry: ["babel-polyfill", "./src/server.js"],
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'server-es5.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: { loader: 'babel-loader' }
      }
    ]
  }
};

export default [client, server];
