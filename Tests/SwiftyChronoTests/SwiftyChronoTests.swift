//
//  SwiftyChronoTests.swift
//  SwiftyChrono
//
//  Created by Jerrywell on 2017-01-17.
//  Copyright © 2017 Potix.
//

import XCTest
@testable import SwiftyChrono

/// for manual debug
class SwiftyChronoTests: XCTestCase {
    func testRussian() {
        Chrono.preferredLanguage = .russian
        XCTAssertFalse(Chrono().parse(text: "25 Мая").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "Через неделю").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "В следующий понедельник").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "1 февраля").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "Первого февраля").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "Двадцать первого февраля").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "Вторник").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "12:30").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "Завтра в полдень").isEmpty)
        XCTAssertFalse(Chrono().parse(text: "Завтра в 19:30").isEmpty)
    }
}
