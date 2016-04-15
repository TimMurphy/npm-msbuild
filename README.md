# npm-msbuild

Run msbuild.exe from [Node.js](https://nodejs.org/).

**The following README is used a design guide. Implementation is taking place on the `dev` branch.**

## Why

npm-msbuild make calling msbuild.exe from node.js, especially from npm's package.json, as simple as possible.
 
## Installation

The recommended installation method is a local [npm](https://www.npmjs.com/) install for your project:

```cmd
> npm install npm-msbuild --save-dev
```

...and add a "script" entry within your project's `package.json` file:

```
# Inside package.json...
  "scripts": {    
    "build": "msbuild"
  },
```

With the above script entry, you can then build the solution (.sln) in your project`s root via:

```cmd
> npm run build
```

Other options for running locally installed NPM binaries is discussed in this Stack Overflow question: [How to use package installed locally in node_modules](http://stackoverflow.com/q/9679932)

## Custom Configuration

**todo**

## Contributing

1. Fork and clone it
1. Install dependencies: `npm install`
1. Create a feature branch: `git checkout -b new-feature`
1. Commit changes: `git commit -am "Add feature 'new-feature'"`
1. **todo** Run static code analysis and unit tests: `npm test`
1. Push to the remote branch: `git push origin new-feature`
1. Create a new [Pull Request](https://github.com/timmurphy/npm-msbuild/pull/new/master)

## License

Code released under the [MIT license](./LICENSE).
