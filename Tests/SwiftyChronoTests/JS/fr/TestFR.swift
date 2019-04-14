//
//  TestFr.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/6/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore

class TestFR: ChronoJSXCTestCase {
    private let files = [
        "test_fr_casual",
        "test_fr_dash",
        "test_fr_deadline",
        "test_fr_little_endian",
        "test_fr_slash",
        "test_fr_time_ago",
        "test_fr_time_exp",
        "test_fr_weekday",
    ]
    
    func testExample() {
        Chrono.sixMinutesFixBefore1900 = true
        
        for fileName in files {
            let js = try! String(contentsOfFile: resourcePath(name: fileName, type: "js"))
            evalJS(js, fileName: fileName)
        }
    }
}
