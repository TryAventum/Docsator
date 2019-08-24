# Docsator

Docs generator(docs~~gener~~ator) for Aventum!
Docsator accepts any JSDoc style comments and group the comments by tag and formats them to Markdown files.

**Currently it is can collect only Aventum Hooks**

## Table of Contents

1.  [Documentation](#documentation)
    1.  [Requirements](#requirements)
    2.  [Installation](#installation)
    3.  [How to use it](#usage)
    4.  [How it works](#howitworks)
    5.  [docsator.config.json](#docsator-config-json)

2.  [Support](#support)
3.  [License](#license)

## [Documentation](#documentation)

<a name="documentation"></a>

### Requirements

<a name="requirements"></a>

1. Make sure you have the latest version of [Node.js](https://nodejs.org) installed.
2. Proper docsator.config.json file.

### Installation

<a name="installation"></a>

Run:

```shell
npm install @aventum/docsator -g
```

### How to use it?

<a name="usage"></a>

Go to the folder that contains the js(files/folders) and you have permissions to write into it and run:

```shell
docsator
```

Docsator will recursively collect the js files from the folders.

### How it works

<a name="howitworks"></a>

Docsator uses comment-parser behind the scenes to parse the comments.

### docsator.config.json

<a name="docsator-config-json"></a>

Docsator reads its configurations from this file, here is a sample of what this file must contain:

```json
{
  "replace": "__dirname",
  "with": "",
  "folder": "docs",
  "tags": [
    {
      "tag": "hook",
      "file": "hooks.md"
    }
  ]
}
```

You can create this file manually using any text editor, here is what every configuration means:

- **replace and with**: (String) Replace `replace` with the `with` option in the file name that will be printed in the documentation(the file that contains the comment, i.e. the source file), use either __dirname to refer the current folder or a hardcoded path.
- **folder**: (String) The folder that Docsator will put the documentation files in.
- **tags**: (Array) Array of tags, for the example above Docsator will generate hooks.md file that contains the formatted comments, these comments contain the `hook` tag.

## Support

<a name="support"></a>

You are welcome to contribute code and provide pull requests for Docsator, also please feel free to suggest or request any features or enhancements.

## License

<a name="license"></a>

Copyright (c) 2019 [Mohammed Al-Mahdawi](https://al-mahdawi.com)
Licensed under the **MIT** license.
