//
//  TestFr.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/6/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore
@testable import SwiftyChrono

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
            var jsPath: String?
            jsPath = Bundle(identifier: "io.quire.lib.SwiftyChrono")?.path(forResource: fileName, ofType: "js")
            if jsPath == nil {
                let testDir = URL(fileURLWithPath: #file).deletingLastPathComponent()
                jsPath = testDir.appendingPathComponent("\(fileName).js").path
            }
            let js = try! String(contentsOfFile: jsPath!)
            evalJS(js, fileName: fileName)
        }
    }
}
