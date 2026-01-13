//
//  TestEn.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/23/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import XCTest
import JavaScriptCore
@testable import SwiftyChrono

class TestEN: ChronoJSXCTestCase {
    private let files = [
        "test_en",
        "test_en_casual",
        "test_en_dash",
        "test_en_deadline",
        "test_en_inter_std",
        "test_en_little_endian",
        "test_en_middle_endian",
        "test_en_month",
        "test_en_option_forward",
        "test_en_relative",
        "test_en_slash",
        "test_en_time_ago",
        "test_en_time_exp",
        "test_en_weekday",
    ]
    
    func testExample() {
        Chrono.sixMinutesFixBefore1900 = true
        // there are few words conflict with german day keywords
        Chrono.preferredLanguage = .english
        
        for fileName in files {
            let js = try! String(contentsOfFile: Bundle(identifier: "io.quire.lib.SwiftyChrono")!.path(forResource: fileName, ofType: "js")!)
            evalJS(js, fileName: fileName)
        }
    }
}
