//
//  RuCasualTimeParser.swift
//  SwiftyChrono
//
//  Created by Nickolay Truhin on 06.04.2021.
//


import Foundation

private let PATTERN = "(\\W|^)((утром|обед|в полдень|вечером|в полночь|ночью|ночь))"
private let timeMatch = 4

public class RUCasualTimeParser: Parser {
    override var pattern: String { PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        if match.isNotEmpty(atRangeIndex: timeMatch) {
            let time = match.string(from: text, atRangeIndex: timeMatch)
            switch time {
            case "обед":
                result.start.imply(.hour, to: opt[.afternoon] ?? 15)
            case "вечером", "ночью":
                result.start.imply(.hour, to: opt[.evening] ?? 22)
            case "утром":
                result.start.imply(.hour, to: opt[.morning] ?? 6)
            case "в полдень":
                result.start.imply(.hour, to: opt[.noon] ?? 12)
            default: break
            }
        }
        
        result.tags[.ruCasualTimeParser] = true
        return result
    }
}
