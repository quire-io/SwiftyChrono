//
//  TestDe.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/9/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore
@testable import SwiftyChrono

class TestDE: ChronoJSXCTestCase {
    private let files = [
        "test_de_casual",
        "test_de_dash",
        "test_de_deadline",
        "test_de_little_endian",
        "test_de_slash",
        "test_de_time_ago",
        "test_de_time_exp",
        "test_de_weekday",
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

