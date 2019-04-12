//
//  TestJp.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/6/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore
@testable import SwiftyChrono

class TestJP: ChronoJSXCTestCase {
    private let files = [
        "test_jp_casual",
        "test_jp_standard",
    ]
    
    func testExample() {
        Chrono.sixMinutesFixBefore1900 = true
        
        for fileName in files {
            let js = try! String(contentsOfFile: Bundle(identifier: "io.quire.lib.SwiftyChrono")!.path(forResource: fileName, ofType: "js")!)
            evalJS(js, fileName: fileName)
        }
    }
}

