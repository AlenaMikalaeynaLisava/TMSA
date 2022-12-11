
import StringOperation from "../stringOperation"

describe("getJestSymbolQuantity", function(){
    it("result is a number when index is wrong type", function() {
        const string1 = new StringOperation("aaabert");
        console.log(string1);
         expect(typeof string1.getSymbolQuantity("1" as any)).toBe('number');
    })
    it("result is 3 with 0 index", function() {
        const string1 = new StringOperation("aaabert");
        expect(string1.getSymbolQuantity(0)).toEqual(3);
    })
    it("result is 0 with no index", function() {
        const string1 = new StringOperation("aaabert");
        expect(string1.getSymbolQuantity("" as any)).toEqual(0);
    })
})

describe("getSymbolQuantity", function(){
    
  it("result is a number when index is wrong type", function() {
    const string1 = new StringOperation("aaabert");
    expect(typeof string1.getSymbolQuantity("1" as any)).toBe('number');
  })
  it("result is 3 with 0 index", function() {
    const string1 = new StringOperation("aaabert");
    expect(string1.getSymbolQuantity(0)).toEqual(3);
  })
  it("result is 0 with no index", function() {
    const string1 = new StringOperation("aaabert");
    expect(string1.getSymbolQuantity("" as any)).toEqual(0);
  })
  });


describe("check getAllSubStrIndex", function(){
    
  it("result with 'ab'", function() {
    const string1 = new StringOperation("abttabb");
    expect(string1.getAllSubStrIndex("ab")).toEqual([ 0, 4 ]);
  })
  it("result if substr is not a string", function() {
    const string1 = new StringOperation("3476");
    expect(string1.getAllSubStrIndex(4 as any)).toThrow(new Error("this is not a string value"))
  })
  it("arr length shoul be 3", function() {
    const string1 = new StringOperation("e3rtye3hje3");
    expect( string1.getAllSubStrIndex("e3")).toHaveLength(3);
  })
  });



describe("check deleteExclude", function(){
    
  it("is substr is not a string", function() {
    const string1 = new StringOperation("34abt44tabb");
    expect(string1.deleteExclude(34 as any, 1)).toThrow(new Error("substr has not a string value"));
  })
  it("arr length shoul be 3", function() {
    const string1 = new StringOperation("e3rtye3hje3");
    expect(string1.deleteExclude("e3", 0)).toEqual("e3rtyhj");
  })
  });


describe("Symbol Change Quantity", function(){
    
    it("change 0,1,2 symbols to 4,5,6", function() {
        const string1 = new StringOperation("aaabert");
        expect(string1.changeSymbols([0, 1, 2], [4, 5, 6])).toBe("ertbert");
      }); 
      it("the passed index is an integer", function() {
        const string1 = new StringOperation("aaabert");
        expect(string1.changeSymbols(["0", 1, 2] as any[], [4, 5, 6])).toThrow()
      });
})




