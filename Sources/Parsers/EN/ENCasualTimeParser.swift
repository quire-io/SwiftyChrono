//
//  ENCasualTimeParser.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/18/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

private let morning = OptionType.morning.rawValue
private let afternoon = OptionType.afternoon.rawValue
private let evening = OptionType.evening.rawValue
private let noon = OptionType.noon.rawValue

private let PATTERN = "(\\W|^)((this)?\\s*(\(morning)|\(afternoon)|\(evening)|\(noon)))"
private let timeMatch = 4

public class ENCasualTimeParser: Parser {
    override var pattern: String { return PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        
        let index1Length = match.rangeAt(1).length
        let matchText = match.string(from: text, atRangeIndex: 0).substring(from: index1Length)
        let index = match.rangeAt(0).location + index1Length
        
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        if match.isNotEmpty(atRangeIndex: timeMatch) {
            let time = match.string(from: text, atRangeIndex: timeMatch)
            switch time {
            case afternoon:
                result.start.imply(.hour, to: opt[.afternoon] ?? 15)
            case evening:
                result.start.imply(.hour, to: opt[.evening] ?? 18)
            case morning:
                result.start.imply(.hour, to: opt[.morning] ?? 6)
            case noon:
                result.start.imply(.hour, to: opt[.noon] ?? 12)
            default: break
            }
        }
        
        result.tags[.ENCasualTimeParser] = true
        return result
    }
}
