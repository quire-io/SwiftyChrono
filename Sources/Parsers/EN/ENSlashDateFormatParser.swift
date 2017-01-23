//
//  ENSlashDateFormatParser.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/23/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

private let PATTERN = "(\\W|^)" +
    "(?:" +
        "(?:on\\s*?)?" +
        "((?:sun|mon|tues?|wed(?:nes)?|thu(?:rs?)?|fri|sat(?:ur)?)(?:day)?)" +
        "\\s*\\,?\\s*" +
    ")?" +
    "([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})" +
    "(?:" +
        "[\\/\\.\\-]" +
        "([0-9]{4}\\s*\\,?\\s*|[0-9]{2}\\s*\\,?\\s*)" +
    ")?" +
    "(\\W|$)"

private var daysOffset = [
    "sunday": 0,
    "sun": 0,
    "monday": 1,
    "mon": 1,"tuesday": 2,
    "wednesday": 3,
    "wed": 3,
    
    "thursday": 4,
    "thur": 4,"friday": 5,
    "fri": 5,"saturday": 6,
    "sat": 6,
]

private var openningGroup = 1
private var endingGroup = 6

private var weekdayGroup = 2
private var monthGroup = 3
private var dayGroup = 4
private var yearGroup = 5

public class ENSlashDateFormatParser: Parser {
    override var pattern: String { return PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        if (match.isNotEmpty(atRangeIndex: openningGroup) && match.string(from: text, atRangeIndex: openningGroup) == "/") ||
            (match.isNotEmpty(atRangeIndex: endingGroup) && match.string(from: text, atRangeIndex: endingGroup) == "/") {
            // Long skip, if there is some overlapping like:
            // XX[/YY/ZZ]
            // [XX/YY/]ZZ
            return nil
        }
        
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        if NSRegularExpression.isMatch(forPattern: "^\\d\\.\\d$", in: matchText) ||
            NSRegularExpression.isMatch(forPattern: "^\\d\\.\\d{1,2}\\.\\d{1,2}$", in: matchText) {
            return nil
        }
        
        // MM/dd -> OK
        // MM.dd -> NG
        if match.isEmpty(atRangeIndex: yearGroup) && (text.range(of: "/")?.isEmpty ?? true) {
            return nil
        }
        
        let date: Int? = nil
        var year = match.isNotEmpty(atRangeIndex: yearGroup) ? Int(match.string(from: text, atRangeIndex: yearGroup)) ?? ref.year : ref.year
        var month = match.isNotEmpty(atRangeIndex: monthGroup) ? Int(match.string(from: text, atRangeIndex: monthGroup)) ?? 0 : 0
        var day = match.isNotEmpty(atRangeIndex: dayGroup) ? Int(match.string(from: text, atRangeIndex: dayGroup)) ?? 0 : 0
        
        if month < 1 || month > 12 {
            if month > 12 {
                // dd/mm/yyyy date format if day looks like a month, and month
                // looks like a day.
                if day >= 1 && day <= 12 && month >= 13 && month <= 31 {
                    // unambiguous
                    let tday = month
                    month = day
                    day = tday
                } else {
                    // both month and day are <= 12
                    return nil
                }
            }
        }
        
        if day < 1 || day > 31 {
            return nil
        }
        
        if year < 100 {
            year += year > 50 ? 1900 : 2000
        }
        
        result.start.assign(.day, value: day)
        result.start.assign(.month, value: month)
        result.start.assign(.year, value: year)
        
        //Day of week
        if match.isNotEmpty(atRangeIndex: weekdayGroup) {
            let weekday = match.string(from: text, atRangeIndex: weekdayGroup)
            result.start.assign(.weekday, value: daysOffset[weekday])
        }
        
        result.tags[.enSlashDateFormatParser] = true
        return result
    }
}
