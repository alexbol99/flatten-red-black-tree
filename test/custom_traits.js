/**
 * Created by Alex Bol on 3/31/2017.
 */
'use strict';

let expect = require('chai').expect;

let traits = {
    equal_to: function(item1, item2) {
        return (item1.value && item2.value) ? item1.key == item2.key && item1.value  == item2.value :
            item1.key == item2.key;
    },
    less_than: function(item1, item2) {
        return item1.key.length < item2.key.length;
    },
    copy_data: function(item_dst, item_src) {
        item_dst.key = item_src.key;
        if (item_dst.value && item_src.value) {
            item_dst.value = item_src.value;
        }
    }
};

let RedBlackTree = require('../index')(traits);

describe('#RedBlackTree', function() {
    it('May create new RedBlackTree with custom traits ', function() {
        // custom traits: sort array of strings by string length
        let tree = new RedBlackTree();
        let a = ['abrakadabra', 'da', 'kadabra', 'dabra', 'abrakada', 'a'];
        a.forEach( (item) => tree.insert(item) );
        expect(tree.keys).to.deep.equal(['a','da','dabra','kadabra','abrakada','abrakadabra']);
    });
});