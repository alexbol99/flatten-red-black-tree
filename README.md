# flatten-red-black-tree

Classic red-black tree implementation.

## Installation

    npm install flatten-red-black-tree -save

## Usage

    // require package
    let RedBlackTree = require('flatten-red-black-tree')(); //<--- parenthesis are important

    // create new instance of red-black tree
    let tree = new RedBlackTree();

    // insert {key, value} entry
    let key = "abcd";
    let value = 5;
    tree.insert(key,value);

    // check size
    console.log(tree.size);      // tree.size = 1
    
    // retrieve value
    let resp = tree.find(key);   // resp = 5

    // remove entry
    tree.remove(key);

See API reference here: https://alexbol99.github.io/flatten-red-black-tree/index.html

## Tests

    npm test

## Contributors

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License

MIT

