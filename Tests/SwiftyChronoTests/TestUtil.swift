//
//  TestUtil.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/23/17.
//  Copyright © 2017 Potix. All rights reserved.
//
import Foundation
import XCTest
import JavaScriptCore
@testable import SwiftyChrono

extension XCTestCase {
    func ok(_ result: Bool) {
        XCTAssert(result)
    }
    
    func ok(_ result: Bool, _ message: String) {
        XCTAssert(result, message)
    }
    
    public struct JSON {
        static func stringify(_ value: Any) -> String {
            if let data = try? JSONSerialization.data(withJSONObject: value, options: .prettyPrinted) {
                return String(data: data, encoding: String.Encoding.utf8) ?? ""
            } else {
                return ""
            }
        }
    }
}

extension Chrono {
    func parse(_ text: String, _ refDate: Date = Date(), _ opt: [OptionType: Int] = [:]) -> [ParsedResult] {
        return parse(text: text, refDate: refDate, opt: opt)
    }
}

extension Date {
    init(valueString: String) {
        let dateFormatter = DateFormatter()
        dateFormatter.locale = Locale(identifier: "en_US_POSIX")
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZZZZ" // ISO 8601
        let date = dateFormatter.date(from: valueString)
        
        if let date = date {
            self = date
        } else {
            dateFormatter.dateFormat = "EEE, dd MMM yyyy HH:mm:ss Z"; //RFC2822-Format
            self = dateFormatter.date(from: valueString) ?? Date()
        }
    }
    
    /// ATTENTION: this is Javascript compatible init function.
    /// the range of month is between 0 ~ 11
    init(_ year: Int, _ month: Int, _ date: Int = 1, _ hours: Int = 0, _ minutes: Int = 0, _ seconds: Int = 0, _ milliseconds: Int = 0) {
        let component = DateComponents(calendar: cal, timeZone: TimeZone.current, year: year, month: month + 1, day: date, hour: hours, minute: minutes, second: seconds, nanosecond: millisecondsToNanoSeconds(milliseconds))
        self = component.date ?? Date()
    }
    
    static let iso8601Formatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .iso8601)
        formatter.locale = Locale(identifier: "en_US_POSIX")
        formatter.timeZone = TimeZone(secondsFromGMT: 0)
        formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX"
        return formatter
    }()
    var iso8601: String {
        return Date.iso8601Formatter.string(from: self)
    }
}

extension Array {
    var length: Int {
        return Int(count)
    }
}


extension String {
    var dateFromISO8601: Date? {
        return Date.iso8601Formatter.date(from: self)
    }
}


//MARK: JS
@objc protocol JSParsedResult: JSExport {
    var ref: Date { get }
    var index: Int { get }
    var text: String { get }
    var start: JSParsedComponents { get }
    var end: JSParsedComponents? { get }
}

@objc protocol JSParsedComponents: JSExport {
    func date() -> Date
    func get(_ key: String) -> Int
    func isCertain(_ key: String) -> Bool
}

class TestParsedResult: NSObject, JSParsedResult {
    private let parsedResult: ParsedResult
    init(_ parsedResult: ParsedResult) {
        self.parsedResult = parsedResult
    }
    
    var ref: Date { return parsedResult.ref }
    var index: Int { return parsedResult.index }
    var text: String { return parsedResult.text }
    private var _start: JSParsedComponents? = nil
    var start: JSParsedComponents {
        if _start == nil {
            _start = TestParsedComponents(parsedResult.start)
        }
        return _start!
    }
    private var _end: JSParsedComponents? = nil
    var end: JSParsedComponents? {
        if _end == nil { // will query every time if parsedResult.end is nil. but it's not a big deal in test case, we keep it simple.
            _end = parsedResult.end != nil ? TestParsedComponents(parsedResult.end!) : nil
        }
        return _end
    }
}
class TestParsedComponents: NSObject, JSParsedComponents {
    private let parsedComponents: ParsedComponents
    init(_ parsedComponents: ParsedComponents) {
        self.parsedComponents = parsedComponents
    }
    
    func date() -> Date {
        return parsedComponents.date
    }

    func get(_ key: String) -> Int {
        return parsedComponents[keyToComponentUnit(key)] ?? 0
    }
    
    func isCertain(_ key: String) -> Bool {
        return parsedComponents.isCertain(component: keyToComponentUnit(key))
    }
}

private func keyToComponentUnit(_ key: String) -> ComponentUnit {
    let k: ComponentUnit
    switch key {
    case "year":
        k = .year
    case "month":
        k = .month
    case "day":
        k = .day
    case "hour":
        k = .hour
    case "minute":
        k = .minute
    case "second":
        k = .second
    case "millisecond":
        k = .millisecond
    case "weekday":
        k = .weekday
    case "timezoneOffset":
        fallthrough
    case "timeZoneOffset":
        k = .timeZoneOffset
    case "meridiem":
        k = .meridiem
    default:
        assert(false, "won't enter in this case...")
        k = .year
    }
    return k
}








