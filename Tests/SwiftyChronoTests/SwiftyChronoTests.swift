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
    
    func testHello() {
//        XCTAssertEqual(hello(), "Hello!")
        
        let chrono = Chrono()
        let results = chrono.parse(text: "sleep 1/12")
        let d = results.first?.start.date
        let c = results.first?.end?.date
        print("\(d) \(c)")
    }
}
