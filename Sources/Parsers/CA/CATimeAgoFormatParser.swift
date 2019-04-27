//
//  CATimeAgoFormatParser.swift
//  SwiftyChrono
//
//  Translated from ESTimeAgoFormatParser.swift.
//  Original work Copyright © 2017 Potix. All rights reserved.
//

import Foundation

private let PATTERN = "(\\W|^)fa\\s*([0-9]+|mig|mitja|una?)\\s*(minuts?|hores|hora|setmanes|setmana|dies|dia|mes(os)?|anys?)(?=(?:\\W|$))"



public class CATimeAgoFormatParser: Parser {
    override var pattern: String { return PATTERN }
    override var language: Language { return .catalan }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let idx = match.range(at: 0).location
        if idx > 0 && NSRegularExpression.isMatch(forPattern: "\\w", in: text.substring(from: idx - 1, to: idx)) {
            return nil
        }
        
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        
        let number: Int
        let numberText = match.string(from: text, atRangeIndex: 2).lowercased()
        let parsedNumber = Int(numberText)
        
        if parsedNumber == nil {
            if NSRegularExpression.isMatch(forPattern: "mig|mitja", in: numberText) {
                number = HALF
            } else {
                number = 1
            }
        } else {
            number = parsedNumber!
        }
        
        
        var date = ref
        let matchText3 = match.string(from: text, atRangeIndex: 3)
        func ymdResult() -> ParsedResult {
            result.start.imply(.day, to: date.day)
            result.start.imply(.month, to: date.month)
            result.start.imply(.year, to: date.year)
            result.start.assign(.hour, value: date.hour)
            result.start.assign(.minute, value: date.minute)
            result.tags[.caTimeAgoFormatParser] = true
            return result
        }
        if NSRegularExpression.isMatch(forPattern: "hor", in: matchText3) {
            date = number != HALF ? date.added(-number, .hour) : date.added(-30, .minute)
            return ymdResult()
        } else if NSRegularExpression.isMatch(forPattern: "minut", in: matchText3) {
            date = number != HALF ? date.added(-number, .minute) : date.added(-30, .second)
            return ymdResult()
        }
        
        if NSRegularExpression.isMatch(forPattern: "setman", in: matchText3) {
            date = number != HALF ? date.added(-number * 7, .day) : date.added(-3, .day).added(-12, .hour)
            
            result.start.imply(.day, to: date.day)
            result.start.imply(.month, to: date.month)
            result.start.imply(.year, to: date.year)
            result.start.imply(.weekday, to: date.weekday)
            result.tags[.caTimeAgoFormatParser] = true
            return result
        } else if NSRegularExpression.isMatch(forPattern: "di", in: matchText3) {
            date = number != HALF ? date.added(-number, .day) : date.added(-12, .hour)
        } else if NSRegularExpression.isMatch(forPattern: "mes", in: matchText3) {
            date = number != HALF ? date.added(-number, .month) : date.added(-(date.numberOf(.day, inA: .month) ?? 30)/2, .day)
        } else if NSRegularExpression.isMatch(forPattern: "any", in: matchText3) {
            date = number != HALF ? date.added(-number, .year) : date.added(-6, .month)
        }
        
        result.start.assign(.day, value: date.day)
        result.start.assign(.month, value: date.month)
        result.start.assign(.year, value: date.year)
        result.tags[.caTimeAgoFormatParser] = true
        return result
    }
}

