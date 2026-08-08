//
//  TestMonthNameCrash.swift
//  SwiftyChrono
//
//  Regression test: a month name parser must never terminate the process.
//

import XCTest
@testable import SwiftyChrono

/// These inputs used to trap inside a month name parser, taking the host
/// application with them. A trap cannot be caught in Swift, so this test passes
/// by completing at all: if a parser regresses, the whole test run dies here
/// rather than reporting a failure.
class TestMonthNameCrash: XCTestCase {

    private var previousLanguage: Language?

    override func setUp() {
        super.setUp()
        previousLanguage = Chrono.preferredLanguage
        // The library default, and the configuration that reaches every parser:
        // with no preferred language, each locale runs against every input, so a
        // fault in one locale is reachable from any text.
        Chrono.preferredLanguage = nil
    }

    override func tearDown() {
        Chrono.preferredLanguage = previousLanguage
        super.tearDown()
    }

    /// Abbreviations a month pattern matches but its offset table does not carry.
    func testAbbreviationsOutsideTheMonthTableDoNotTrap() {
        let chrono = Chrono()
        let ref = Date()

        let inputs = [
            "Meeting on 9 Feb 2012",              // bare English abbreviation
            "due 9 Feb. 2012",
            "reunion el 9 ago 2012",
            "Levering gepland op 9 feb. 2012",
            "Leverans planerad till 9 feb 2012",
            "9 mar 2012",
            // The German month pattern is assembled from its table's keys, and
            // "jun." carries an unescaped period that matches any character, so
            // "Juny" is read as "jun" plus one. Unlike the other whitespace
            // cases this one does not depend on dictionary order: bare "jun"
            // cannot complete the match against "Juny", so backtracking is
            // forced down the wildcard path on every run.
            "9 Juny 2012",
        ]

        for text in inputs {
            _ = chrono.parse(text: text, refDate: ref)
        }
    }

    /// The Catalan forms the offset table does carry must still resolve, so the
    /// crash fix cannot be mistaken for dropping the locale's own spellings.
    func testCatalanMonthNamesStillParse() {
        Chrono.preferredLanguage = .catalan
        let chrono = Chrono()
        let ref = Date()

        let expected: [(String, Int)] = [
            ("9 de febrer de 2012", 2),
            ("9 de febr. de 2012", 2),
            ("9 d'agost de 2012", 8),
        ]

        for (text, month) in expected {
            let results = chrono.parse(text: text, refDate: ref)
            XCTAssertFalse(results.isEmpty, "expected a result for \(text)")
            XCTAssertEqual(results.first?.start[.month], month, "wrong month for \(text)")
            XCTAssertEqual(results.first?.start[.day], 9, "wrong day for \(text)")
        }
    }
}
