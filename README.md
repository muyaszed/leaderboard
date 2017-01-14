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
	npm install webpack --save  
```

 create webpack.config.js
```
	var webpack = require("webpack");
	var path = require("path");
	 
	var DEV = path.resolve(__dirname, "dev");
	var OUTPUT = path.resolve(__dirname, "output");
	 
	var config = {
	  entry: DEV + "/index.jsx",
	  output: {
	    path: OUTPUT,
	    filename: "app.js"
	  }
	};
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
	    loaders: [{
	        include: DEV,
	        loader: "babel",
	    }]
	  }
```
9. Compile to test app
```
	./node_modules/.bin/webpack
```
