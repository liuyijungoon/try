"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    //sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    it("测试用例2", function(){
        sinon.spy(console, 'log');
        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';
        for(var i=99;i>1;i--)
    {
        expect_string=expect_string+i+' bottles of beer on the wall,'+i+' bottles of beer.\n'+'Take one down and pass it around,'+(i-1)+' bottles of beer on the wall.\n';
        //console.log(i+' bottles of beer on the wall,'+i+' bottles of beer.\n'+'Take one down and pass it around,'+(i-1)+' bottles of beer on the wall.')
    }
    expect_string=expect_string+1+' bottles of beer on the wall,'+1+' bottles of beer.\n'+'Take one down and pass it around,'+'no more bottles of beer on the wall.\n'+'No more bottles of beer on the wall,no more bottles of beer.\n'+'Go to the store and buy some more,99 bottles of beer on the wall.'


        expect(expect_string).to.equal(result);
    });
});