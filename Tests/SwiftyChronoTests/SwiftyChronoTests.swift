//
//  SwiftyChronoTests.swift
//  SwiftyChrono
//
//  Created by Jerrywell on 2017-01-17.
//  Copyright © 2017 Potix.
//

import XCTest
@testable import SwiftyChrono

class SwiftyChronoTests: XCTestCase {
    
    let chrono = Chrono()
    
    override func setUp() {
        super.setUp()
    }
    
    func testHello() {
//        XCTAssertEqual(hello(), "Hello!")
        
        let chrono = Chrono()
        let results = chrono.parse(text: "FRI 13SEP 1:29 PM - FRI 13SEP 3:29 PM")
        let d = results.first?.start.date
        let c = results.first?.end?.date
        print("\(d) \(c)")
    }
    
    //func test1() {
    //
    //    var text = "Something happen on 2014-04-18 13:00 - 16:00 as";
    //    var results = chrono.parse(text, Date(2012,7,10));
    //    ok(results.length == 1, JSON.stringify( results ) )
    //    ok(results[0].text == "2014-04-18 13:00 - 16:00")
    //
    //}
}
