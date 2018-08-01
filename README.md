# cyberflake

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

cyberflake was developing for CyberEngine. And now, she is **opensource**! cyberflake generete id like Twitter's [snowflake][twitter] and deconstruct these genereted id's to original timesamp, date or binary.

### Installation

_cyberflake_ requires [Node.js](https://nodejs.org/) v10+ to run.
**only aviable on npm (for now!)**

```sh
$ npm i cyberflake -S
```

### Usage

```js
// how to make an id
const cyberflake = require('cyberflake')
const id = cyberflake.generate()
console.log(id)

// how to deconstruct generated id to timestamp, date or binary
const data = cyberflake.deconstruct('STRING_ID')
console.log(data)
```

### Altenative Usage

```js
// how to make an id
const { generate, deconstruct } = require('cyberflake')
const id = generate()
console.log(id)

// how to deconstruct generated id to timestamp, date or binary
const data = deconstruct('STRING_ID')
console.log(data)
```

### Technology

_cyberflake_ uses a number of open source projects to work properly:

- [Node.JS] - _cyberflake_ uses this powerful programming language.
- [VScode] - We're highly recommending this awesome code editor.

And of course _cyberflake_ itself is open source with a [public repository][repository] on _GitHub_.

### Plugins

_cyberflake_ is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin      | README                                    |
| ----------- | ----------------------------------------- |
| @types/node | [plugins/definitelytyped/README.md][pldt] |
| Eslint      | [plugins/eslint/README.md][plge]          |
| Nodemon     | [plugins/nodemon/README.md][plgn]         |

### Development

Want to contribute? Great!

_cyberflake_ uses eslint for stable developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

```sh
$ git clone <url>
$ cd <cloned_folder_name>
$ npm i -d
$ npm test
```

### Our Contributors

- Yankı Küçük - [Twitter][yk]

And you can see also all contributors [here][contributors].

[twitter]: https://developer.twitter.com/en/docs/basics/twitter-ids.html
[node.js]: http://nodejs.org
[vscode]: https://code.visualstudio.com/insiders/
[repository]: https://github.com/kendinikertenkelebek/Cyberflake
[pldt]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md
[plge]: https://github.com/eslint/eslint/blob/master/README.md
[plgn]: https://github.com/remy/nodemon/blob/master/README.md
[yk]: https://twitter.com/seviyorumstop
[contributors]: https://github.com/kendinikertenkelebek/Cyberflake/graphs/contributors

## License

Aphace 2.0
