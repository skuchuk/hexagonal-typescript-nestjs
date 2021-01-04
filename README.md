# Template NestJs using Ports & Adapters (hexagonal) Architecture (TypeScript)

> **hexagonal-typescript-nestjs** is a template project, based on [Templ Project](http://templ-project.github.io).
>
> **hexagonal-typescript-nestjs** includes instructions for initializing a new
> **[NestJs](https://nestjs.com/)** project, and configuring it for development, unit
> testing as well as code linting and analysis.
>
> **hexagonal-typescript-nestjs** implements:
>
> - [jscpd](https://github.com/kucherenko/jscpd), [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) for code analisys
> - [prettier](https://prettier.io/) for code formatting
> - [eslint](https://eslint.org/) for linting
>
> By default, this implementation uses [npm](https://yarnpkg.com/), but you can easily change it to [yarn](https://www.npmjs.com/) or [pnpm](https://pnpm.js.org/) or any other package manager.

## Getting Started

### Prerequisites / Dependencies

##### For Windows

- Please install [git-scm](https://git-scm.com/download/win) tool.
- Please install a form of make
  - Install [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)
  - Install [make](https://sourceforge.net/projects/ezwinports/files/) from [ezwinports](https://sourceforge.net/projects/ezwinports/files/)
  - Install [chocolatey](https://chocolatey.org/), run `choco install make`

##### For Linux/Unix/OSX

- Please install `git` and `make`

```bash
# i.e debian
sudo apt-get install git make -y
# i.e mac OS
brew install make git
```
#### Known Issues / Troubleshooting

* latest versions of [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) will dismiss [Node v11.x](https://www.google.com/search?q=node+11&oq=node+11&aqs=chrome..69i57.1064j0j4&sourceid=chrome&ie=UTF-8); change to older version of [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) on your own risk.
* Windows tests do pass, however they encounter some issues at caching node_modules afterwards

### Installation

```bash
git clone https://github.com/templ-project/typescript-nestjs your_project
cd your_project
rm -rf .git
git init
git add remote origin https://url/to/your/project/repository
git add .
git commit -am "init"
git push origin master
yarn install
# npm install
# pnpm install
```

### Development

#### Requirements

- Please install [NodeJs](https://nodejs.org/en/). We support version 10.x and above.
- Please instal a JavaScript/TypeScript IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev Babel Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-babel-extension-pack) or [ITMCDev TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-typescript-extension-pack)
  - [Jetbrains WebStorm](https://www.jetbrains.com/webstorm/)
  - [Vim](https://www.vim.org/) with [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) and [HerringtonDarkholme/yats.vim](https://github.com/HerringtonDarkholme/yats.vim) extensions.
  - Any other IDE you trust.


### Testing

Run unit tests using `npm run test`.

Testing is currently set to use unittest.

#### Single Tests

Run single unit tests file, by calling `npm run test:single -- test/path/to/file.test.js`

```bash
npm run test:single -- test/path/to/index.test.js
```

#### E2E Tests

Run end to end tests using `npm run test:e2e`.

### Deployment

Please check [release-it](https://www.npmjs.com/package/release-it) for making releases to [npmjs.com](https://www.npmjs.com/) or any other repository tool, then run:

```bash
npm run release
```

## Authors

* [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work
* [Shahar Kuchuk](mailto:skuchuk@gmail.com) - Add Ports & Adapters structure and example code

## Issues / Support

Add a set of links to the [issues](/templ-project/typescript-nestjs/issues) page/website, so people can know where to add issues/bugs or ask for support.

## License

(If the package is public, add licence)
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog -->

> Remove Everything above this line

<hr />