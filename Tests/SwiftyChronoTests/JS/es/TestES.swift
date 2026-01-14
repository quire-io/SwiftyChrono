//
//  TestEs.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/6/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore
@testable import SwiftyChrono

class TestES: ChronoJSXCTestCase {
    private let files = [
        "test_es_casual",
        "test_es_dash",
        "test_es_deadline",
        "test_es_little_endian",
        "test_es_slash",
        "test_es_time_ago",
        "test_es_time_exp",
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
