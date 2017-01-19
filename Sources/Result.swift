//
//  Result.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/17/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

public struct ParsedResult {
    public let ref: Date
    public let index: Int
    public let text: String
    public var tags: [TagUnit: Bool]
    public var start: ParsedComponents
    public var end: ParsedComponents?
    
    init(ref: Date, index: Int, text: String, tags: [TagUnit: Bool] = [TagUnit: Bool](), start: [ComponentUnit: Int]? = nil, end: [ComponentUnit: Int]? = nil) {
        self.ref = ref
        self.index = index
        self.text = text
        self.tags = tags
        self.start = ParsedComponents(components: start, ref: ref)
        if let end = end {
            self.end = ParsedComponents(components: end, ref: ref)
        }
    }
    
    func clone() -> ParsedResult {
        var result = ParsedResult(ref: ref, index: index, text: text, tags: tags)
        
        result.start = start
        result.end = end
        
        return result
    }
    
    func hasPossibleDates() -> Bool {
        return start.isPossibleDate() && end?.isPossibleDate() ?? true
    }
}

public struct ParsedComponents {
    public var knownValues = [ComponentUnit: Int]()
    public var impliedValues = [ComponentUnit: Int]()
    
    init(components: [ComponentUnit: Int]?, ref: Date?) {
        if let components = components {
            knownValues = components
        }
        
        if let ref = ref {
            imply(.day, to: ref.day)
            imply(.month, to: ref.month + 1)
            imply(.year, to: ref.year)
        }
        
        imply(.hour, to: 12)
        imply(.minute, to: 0)
        imply(.second, to: 0)
        imply(.millisecond, to: 0)
    }
    
    private init(parsedComponents: ParsedComponents) {
        knownValues = parsedComponents.knownValues
        impliedValues = parsedComponents.impliedValues
    }
    
    public func clone() -> ParsedComponents {
        return ParsedComponents(parsedComponents: self)
    }
    
    public func get(component: ComponentUnit) -> Int? {
        if knownValues.keys.contains(component) { return knownValues[component]! }
        if impliedValues.keys.contains(component) { return impliedValues[component]! }
        
        return nil
    }
    
    public mutating func assign(component: ComponentUnit, value: Int) {
        knownValues[component] = value
        impliedValues.removeValue(forKey: component)
    }
    
    public mutating func imply(_ component: ComponentUnit, to value: Int) {
        if knownValues.keys.contains(component) { return }
        impliedValues[component] = value
    }
    
    public func isCertain(component: ComponentUnit) -> Bool {
        return knownValues.keys.contains(component)
    }
    
    public func isPossibleDate() -> Bool {
        var date = moment
        if isCertain(component: .timeZoneOffset) {
            date.utcOffset = get(component: .timeZoneOffset)!
        }
        
        if date.year != get(component: .year) { return false }
        if date.month != get(component: .month) { return false }
        if date.day != get(component: .day) { return false }
        if date.hour != get(component: .hour) { return false }
        if date.minute != get(component: .minute) { return false }
        
        return true
    }
    
    public var date: Date {
        return moment
    }
    
    public var moment: Date {
        var calendar = Calendar(identifier: Calendar.Identifier.gregorian)
        calendar.timeZone = utcTimeZone
        
        var comps = DateComponents()
        
        if let year = get(component: .year) {
            comps.year = year
        }
        
        if let month = get(component: .month) {
            comps.month = month
        }
        
        if let day = get(component: .day) {
            comps.day = day
        }
        
        if let hour = get(component: .hour) {
            comps.hour = hour
        }
        
        if let minute = get(component: .minute) {
            comps.minute = minute
        }
        
        if let second = get(component: .second) {
            comps.second = second
        }
        
        if let millisecond = get(component: .millisecond) {
            comps.nanosecond = millisecond * 1000
        }
        
        let date = calendar.date(from: comps)!
        
        let currenttimeZoneOffset = date.utcOffset
        let targettimeZoneOffset =
            isCertain(component: .timeZoneOffset) ? get(component: .timeZoneOffset)! : currenttimeZoneOffset
        
        let adjustedtimeZoneOffset = targettimeZoneOffset - currenttimeZoneOffset
        
        return date.add(-adjustedtimeZoneOffset, .minute)
    }
}

public enum ComponentUnit {
    case year, month, day, hour, minute, second, millisecond, timeZoneOffset
}

public enum TagUnit {
    case ENCasualTimeParser
}











