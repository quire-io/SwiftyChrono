//
//  Date.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/17/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

var cal: Calendar { return Calendar.current }
var utcCal: Calendar {
    var cal = Calendar(identifier: Calendar.Identifier.gregorian)
    cal.timeZone = utcTimeZone
    return cal
}
let utcTimeZone: TimeZone = TimeZone(identifier: "UTC")!

extension Date {
    var year: Int {
        return cal.component(.year, from: self)
    }
    
    var month: Int {
        return cal.component(.month, from: self)
    }
    
    var day: Int {
        return cal.component(.day, from: self)
    }
    
    var hour: Int {
        return cal.component(.hour, from: self)
    }
    
    var minute: Int {
        return cal.component(.minute, from: self)
    }
    
    var second: Int {
        return cal.component(.second, from: self)
    }
    
    var millisecond: Int {
        return cal.component(.second, from: self)
    }
    
    var weekday: Int {
        return cal.component(.weekday, from: self)
    }
    
    /// offset minutes between UTC and current time zone, the value could be 60, 0, -60, etc.
    var utcOffset: Int {
        get {
            let timeZone = NSTimeZone.local
            let offsetSeconds = timeZone.secondsFromGMT(for: self)
            return offsetSeconds / 60
        }
        set {
            let interval = TimeInterval(newValue * 60)
            self = Date(timeInterval: interval, since: self)
        }
    }
    
    func added(_ value: Int, _ unit: Calendar.Component) -> Date {
        return cal.date(byAdding: unit, value: value, to: self)!
    }
}
