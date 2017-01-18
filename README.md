## Steps to setup React environment - credit to [Kirupa](https://www.kirupa.com/react/setting_up_react_environment.htm)

1. Folder arrangement

 Inside the application folder create seperate Developmment and Output folder

 MyAppFolder

  devFolder

  outputFolder

2. Create and prepare your index.html in the root of the application folder

 Make sure to link to the correct javascript file that will be created in the outpufolder later
 ```html
	<script src="outputFolder/app.js"></script>
 ```
3. Install node (skip this if node is already installed)

4. Initialized npm inside the application folder and setup the package.json file

5. Install react dependencies.
 ```
	npm install react react-dom --save
 ```

6. Create your jsx file inside the devFolder

7. Install and setup webpack
 ```
	npm install webpack --save-dev
 ```

 create webpack.config.js
 ```
	module.exports = {
	  context: __dirname + "/app",
	  entry: {
	  	javascript: "./app.js"
		
	  },
	  output: {
	    filename: "app.js",
	    path: __dirname + "/dist",
	  },

	 
	}
 ```

8. Install and setup babel
 ```
	npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save
 ```

 added to package.jsom
 ```
	"babel": {
	    "presets": [
	      "es2015",
	      "react"
	    ]
	  }
 ```
 added to webpack.config.js
 ```
	 module: {
	  loaders: [
		    {
		      test: /\.js$/,
		      exclude: /node_modules/,
		      loaders: ["babel"],
		    },
		    
		  ],
		},
 ```
9. Install and setup file loader
 ```
	npm install file-loader --save-dev
 ```

 added to webpack.config.js 

 inside the entry
 ```
	 html: "./index.html"
	
 ```

 inside the loaders
 ```
	 {
		  test: /\.html$/,
		  loader: "file?name=[name].[ext]",
	},
 ```
10. Install webpack server
 ```
	npm install webpack-dev-server --save-dev
 ```
11. Install and setup hot loader replacement
 ```
	npm install react-hot-loader --save-dev
 ```
 added to webpack.config.js
 ```
	 module: {
	  loaders: [
		    {
		      test: /\.js$/,
		      exclude: /node_modules/,
		      loaders: ["react-hot", "babel"],
		    },
		    
		  ],
		},
 ```
 create a start command inside the script properties in package.json
 ```
	 "scripts": {
	  "start": "webpack-dev-server --hot --inline"
	 },
 ```
9. Compile to test app
 ```
	npm start
 ```
