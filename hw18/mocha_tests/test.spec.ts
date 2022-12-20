import {assert, expect, should} from "chai";
import StringOperation from "../stringOperation.js"

//"test": "mocha --config mocharc.json"
describe("getSymbolQuantity", function(){
    
  it("result is a number when index is wrong type", function() {
    const string1 = new StringOperation("aaabert");
    expect(string1.getSymbolQuantity("1" as any)).to.be.a('number');
  })
  it("result is 3 with 0 index", function() {
    const string1 = new StringOperation("aaabert");
    expect(string1.getSymbolQuantity(0)).to.equal(3);
  })
  it("result is 0 with no index", function() {
    const string1 = new StringOperation("aaabert");
    expect(string1.getSymbolQuantity("" as any)).to.equal(0);
  })
  });

describe("check getAllSubStrIndex", function(){
    
  it("result with 'ab'", function() {
    const string1 = new StringOperation("abttabb");
    expect(string1.getAllSubStrIndex("ab")).to.deep.equal([ 0, 4 ]);
  })
  it("result if substr is not a string", function() {
    const string1 = new StringOperation("3476");
    expect(() => string1.getAllSubStrIndex(4 as any)).to.throw(new Error("this is not a string value"))
  })
  it("arr length shoul be 3", function() {
    const string1 = new StringOperation("e3rtye3hje3");
    string1.getAllSubStrIndex("e3").should.have.length(3);
  })
  });



describe("check deleteExclude", function(){
    
  it("is substr is not a string", function() {
    const string1 = new StringOperation("34abt44tabb");
    expect(() => string1.deleteExclude(34 as any, 1)).to.throw(new Error("substr has not a string value"));
  })
  it("arr length shoul be 3", function() {
    const string1 = new StringOperation("e3rtye3hje3");
    expect(string1.deleteExclude("e3", 0)).to.equal("e3rtyhj");
  })
  });


describe("Symbol Change Quantity", function(){
    
    it("change 0,1,2 symbols to 4,5,6", function() {
        const string1 = new StringOperation("aaabert");
        assert.equal(string1.changeSymbols([0, 1, 2], [4, 5, 6]), "ertbert");
      }); 
      it("the passed index is an integer", function() {
        const string1 = new StringOperation("aaabert");
        expect(() => string1.changeSymbols([0, 1, 2] as any[], [4, 5, 6])).to.throw()
      });
})




