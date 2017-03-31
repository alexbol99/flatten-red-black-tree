/**
 * Created by Alex Bol on 3/30/2017.
 */
'use strict';

let expect = require('chai').expect;
let RedBlackTree = require('../index')();

describe('#RedBlackTree', function() {
    it('Create new instanse of RedBlackTree ', function () {
        let tree = new RedBlackTree();
        expect(tree).to.be.an.instanceof(RedBlackTree);
    });
    it('May insert single item which is key and value at the same time', function () {
        let tree = new RedBlackTree();
        tree.insert(5);
        expect(tree.size).to.equal(1);
    });
    it('May insert many items (key is an item) and return keys as sorted array', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) => tree.insert(item) );
        expect(tree.size).to.equal(9);
        expect(tree.keys).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    });
    it('Should keep red-black property #4: all red nodes have exactly two black child nodes', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) => tree.insert(item) );
        expect(tree.testRedBlackProperty()).to.equal(true);
    });
    it('May find value by given key', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) => tree.insert(item) );
        expect(tree.find(3)).to.equal(3);
    });
    it('May not find value when key was not inserted', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) => tree.insert(item) );
        expect(tree.find(0)).to.be.undefined;
    });
    it('May not find value after key was deleted', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) =>
            tree.insert(item)
        );
        tree.remove(7);
        expect(tree.size).to.equal(8);
        expect(tree.find(7)).to.be.undefined;
    });
    it('May delete all keys', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) => tree.insert(item) );
        a.forEach( (item) => tree.remove(item) );
        expect(tree.size).to.equal(0);
        expect(tree.isEmpty).to.equal(true);
    });
    it('May allow insert again after delete all keys', function () {
        let tree = new RedBlackTree();
        let a = [5,4,3,6,7,9,1,8,2];
        a.forEach( (item) => tree.insert(item) );
        a.forEach( (item) => tree.remove(item) );
        let b = [12, -5, 0, 7];
        b.forEach( (item) => tree.insert(item) );
        expect(tree.size).to.equal(4);
        expect(tree.keys).to.deep.equal([-5,0,7,12]);
    });
    it('May allow to insert strings as well', function() {
        let tree = new RedBlackTree();
        let a = ['giga', 'abba', 'buba', 'tree', 'red', 'black'];
        a.forEach( (item) => tree.insert(item) );
        expect(tree.size).to.equal(6);
        expect(tree.keys).to.deep.equal(['abba','black','buba','giga','red','tree']);
    });
    it('May allow to insert {key,value} pairs as well', function() {
        let tree = new RedBlackTree();
        let a = [{key:'giga',value:1}, {key:'abba',value:2}, {key:'buba',value:3}, {key:'tree',value:4}, {key:'red',value:5}, {key:'black',value:6}];
        a.forEach( (item) => tree.insert(item.key, item.value) );
        expect(tree.size).to.equal(6);
        expect(tree.keys).to.deep.equal(['abba','black','buba','giga','red','tree']);
    });
    it('May find {key,value} after insertion', function() {
        let tree = new RedBlackTree();
        let a = [{key:'giga',value:1}, {key:'abba',value:2}, {key:'buba',value:3}, {key:'tree',value:4}, {key:'red',value:5}, {key:'black',value:6}];
        a.forEach( (item) => tree.insert(item.key, item.value) );
        let value = tree.find('abba');
        expect(value).to.equal(2);
    });
    it('May visit every node with forEach method', function() {
        let tree = new RedBlackTree();
        let a = [{key:'giga',value:1}, {key:'abba',value:2}, {key:'buba',value:3}, {key:'tree',value:4}, {key:'red',value:5}, {key:'black',value:6}];
        a.forEach( (item) => tree.insert(item.key, item.value) );
        let sum = 0;
        tree.forEach( (key,value) =>
            sum += value
        );
        expect(sum).to.equal(21);
    });
});

