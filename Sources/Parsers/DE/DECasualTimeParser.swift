//
//  DECasualTimeParser.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/16/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

private let PATTERN = "(\\W|^)((?:(heute)?\\s*(früh|nachmittag|abend|mittag))|(heute\\s+morgen))"
private let timeMatch = 4
private let thisMorning = 5

public class DECasualTimeParser: Parser {
    override var pattern: String { return PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        if match.isNotEmpty(atRangeIndex: timeMatch) {
            let time = match.string(from: text, atRangeIndex: timeMatch).lowercased()
            switch time {
            case "früh":
                result.start.imply(.hour, to: opt[.morning] ?? 6)
            case "nachmittag":
                result.start.imply(.hour, to: opt[.afternoon] ?? 15)
                result.start.imply(.meridiem, to: 1)
            case "abend":
                result.start.imply(.hour, to: opt[.evening] ?? 18)
                result.start.imply(.meridiem, to: 1)
            case "mittag":
                result.start.imply(.hour, to: opt[.noon] ?? 12)
            default: break
            }
        }
        
        if match.isNotEmpty(atRangeIndex: thisMorning) {
            result.start.imply(.hour, to: opt[.morning] ?? 6)
        }
        
        result.tags[.deCasualTimeParser] = true
        return result
    }
}
