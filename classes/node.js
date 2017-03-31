/**
 * Created by Alex Bol on 3/27/2017.
 */
'use strict';

let CONST = require('../utils/constants');
let defaultTraits = require('../utils/default_traits');

module.exports = function(traits=defaultTraits) {
    let Node = class Node {
        constructor(key = undefined, value = undefined,
                    left=null, right=null, parent=null, color=CONST.RB_TREE_COLOR_BLACK) {
            this.item = {key:key, value:value};
            this.left = left;      // reference to left child node
            this.right = right;    // reference to right child node
            this.parent = parent;  // reference to parent node
            this.color = color;
        }

        less_than(other_node) {
            return traits.less_than(this.item, other_node.item);
        };
        equal_to(other_node) {
            return traits.equal_to(this.item, other_node.item);
        };

        copy_data(other_node) {
            traits.copy_data(this.item, other_node.item);
        };
    };

    return Node;
};

