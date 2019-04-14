//
//  testZHHant.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/19/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

import XCTest
import JavaScriptCore

class TestZHHant: ChronoJSXCTestCase {
    private let files = [
        "test_zh_hant_casual",
        "test_zh_hant_date",
        "test_zh_hant_deadline",
        "test_zh_hant_time_exp",
        "test_zh_hant_weekday",
    ]
    
    func testExample() {
        Chrono.sixMinutesFixBefore1900 = true
        
        for fileName in files {
            let js = try! String(contentsOfFile: resourcePath(name: fileName, type: "js"))
            evalJS(js, fileName: fileName)
        }
    }
}

