/**
 * Created by Alex Bol on 3/30/2017.
 */

'use strict';

let expect = require('chai').expect;
let RedBlackTree = require('../index');

describe('#RedBlackTree Node', function() {
    it('Node class exist when required', function () {
        let Node = require('../classes/node')();
        expect(Node).to.exist;
    });
    it('Node class required without traits has default traits defined', function () {
        let Node = require('../classes/node')();
        expect(Node.prototype.less_than).to.be.a('function');
        expect(Node.prototype.equal_to).to.be.a('function');
        expect(Node.prototype.copy_data).to.be.a('function');
    });
    it('May create new default instance of Node', function () {
        let Node = require('../classes/node')();
        let node = new Node();
        expect(node).to.be.an.instanceof(Node);
    });
    it('May create new instance of Node', function () {
        let Node = require('../classes/node')();
        let node = new Node(3, "1");
        expect(node.item).to.be.deep.equal({key:3, value:"1"});
    });
    it('May compare instances of Node using default traits', function () {
        let Node = require('../classes/node')();
        let node1 = new Node(3, "1");
        let node2 = new Node(5, "2");
        let node3 = new Node(5, "2");
        expect(node1.less_than(node2)).to.equal(true);
        expect(node1.less_than(node3)).to.equal(true);
        expect(node2.less_than(node2)).to.equal(false);
        expect(node3.equal_to(node2)).to.equal(true);
    });
});

