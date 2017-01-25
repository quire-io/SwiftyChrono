//
//  TestEn.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/23/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore

class TestEn: XCTestCase {
    
    let jsContext = JSContext()!
    let chrono = Chrono()
    var testTitle = ""
    
    override func setUp() {
        super.setUp()
        
        /// Handle Error
        jsContext.exceptionHandler = { context, exception in
            let stacktrace = exception?.objectForKeyedSubscript("stack").toString()
            let lineNumber = exception?.objectForKeyedSubscript("line").toString()
            let column = exception?.objectForKeyedSubscript("column")
            
            assertionFailure("error: \(exception?.description)\n stack trace: \(stacktrace)\n line number: \(lineNumber) \ncolumn: \(column)")
        }
        
        /// register classs to js context
        //jsContext.setObject(TestParsedResult.self, forKeyedSubscript: "ParsedResult" as (NSCopying & NSObjectProtocol)!)
        //jsContext.setObject(TestParsedComponents.self, forKeyedSubscript: "ParsedComponents" as (NSCopying & NSObjectProtocol)!)
        
        /// set function callbacks
        //  setTestTitle(title: String)
        let setTestTitle: @convention(block) (String) -> Void = { title in
            self.testTitle = title
        }
        jsContext.setObject(unsafeBitCast(setTestTitle, to: AnyObject.self), forKeyedSubscript: "setTestTitle" as (NSCopying & NSObjectProtocol)!)
        
        /// set function callbacks
        //  clearTestTitle()
        let clearTestTitle: @convention(block) () -> Void = { () in
            self.testTitle = ""
        }
        jsContext.setObject(unsafeBitCast(clearTestTitle, to: AnyObject.self), forKeyedSubscript: "clearTestTitle" as (NSCopying & NSObjectProtocol)!)
        
        /// set function callbacks
        //  ok(passed: Bool, message: String)
        let ok: @convention(block) (Bool, String?) -> Void = { (passed, message) in
            if let message = message {
                XCTAssert(passed, message)
            } else {
                XCTAssert(passed)
            }
        }
        jsContext.setObject(unsafeBitCast(ok, to: AnyObject.self), forKeyedSubscript: "ok" as (NSCopying & NSObjectProtocol)!)
        
        /// set function callbacks
        //  chronoParse()
        let chronoParse: @convention(block) (String, NSDate, NSDictionary) -> NSArray = { (text, ref, opt) -> NSArray in
            var opts = [OptionType: Int]()
            for o in opt {
                opts[OptionType(rawValue: o.key as! String)!] = o.value as? Int ?? 1
            }
            
            let results = self.chrono.parse(text: text, refDate: ref as Date, opt: opts).map{ TestParsedResult($0) }
            return results as NSArray
        }
        jsContext.setObject(unsafeBitCast(chronoParse, to: AnyObject.self), forKeyedSubscript: "chronoParse" as (NSCopying & NSObjectProtocol)!)
        
        /// set function callbacks
        //  chronoParseDate()
        let chronoParseDate: @convention(block) (String, NSDate, NSDictionary) -> NSDate = { (text, ref, opt) in
            var opts = [OptionType: Int]()
            for o in opt {
                opts[OptionType(rawValue: o.key as! String)!] = o.value as? Int ?? 1
            }
            
            return (self.chrono.parseDate(text: text, refDate: ref as Date, opt: opts) ?? Date()) as NSDate
        }
        jsContext.setObject(unsafeBitCast(chronoParseDate, to: AnyObject.self), forKeyedSubscript: "chronoParseDate" as (NSCopying & NSObjectProtocol)!)
        
        
        /// expose test() at the top scope for using objectForKeyedSubscript
        jsContext.evaluateScript(
            "test = function(title, testFunc) {" +
            "    setTestTitle(title);" +
            "    testFunc();" +
            "    clearTestTitle();" +
            "};"
        )
        
        /// expose test() at the top scope for using objectForKeyedSubscript
        jsContext.evaluateScript(
            "chrono = {" +
            "    parse: function(text) {" +
            "        return chronoParse(text);" +
            "    }," +
            "    parseDate: function(text) {" +
            "        return chronoParseDate(text);" +
            "    }" +
            "};"
        )
    }
    
    func testExample() {
        let js = try! String(contentsOfFile: Bundle(identifier: "io.quire.lib.SwiftyChrono.iOS")!.path(forResource: "test_en", ofType: "js")!)
        //let js = try! String(contentsOfFile: Bundle.main.path(forResource: "test_en", ofType: "js")!)
        jsContext.evaluateScript(js)
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
}
