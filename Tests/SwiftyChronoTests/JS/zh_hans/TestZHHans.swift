//
//  TestZHHans.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/19/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

import XCTest
import JavaScriptCore
@testable import SwiftyChrono

class TestZHHans: ChronoJSXCTestCase {
	private let files = [
		"test_zh_hans_casual",
		"test_zh_hans_date",
		"test_zh_hans_deadline",
		"test_zh_hans_time_exp",
		"test_zh_hans_weekday",
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

