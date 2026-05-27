//
//  CAWeekdayParser.swift
//  SwiftyChrono
//
//  Translated from ESWeekdayParser.swift.
//  Original work Copyright © 2017 Potix. All rights reserved.
//

import Foundation

private let PATTERN = "(\\W|^)" +
    "(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(aquest|passat|pròxim|proper)\\s*)?" +
    "(\(CA_WEEKDAY_OFFSET.keys.joined(separator: "|")))" +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(aquesta|passad|pròxima|propera)\\s*setmana)?" +
    "(?=\\W|$)"

private let prefixGroup = 2
private let weekdayGroup = 3
private let postfixGroup = 4

public class CAWeekdayParser: Parser {
    override var pattern: String { return PATTERN }
    override var language: Language { return .catalan }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        let dayOfWeek = match.string(from: text, atRangeIndex: weekdayGroup).lowercased()
        guard let offset = CA_WEEKDAY_OFFSET[dayOfWeek] else {
            return nil
        }
        
        let prefix: String? = match.isNotEmpty(atRangeIndex: prefixGroup) ? match.string(from: text, atRangeIndex: prefixGroup) : nil
        let postfix: String? = match.isNotEmpty(atRangeIndex: postfixGroup) ? match.string(from: text, atRangeIndex: postfixGroup) : nil
        var modifier = ""
        if prefix != nil || postfix != nil {
            let norm = (prefix ?? postfix ?? "").lowercased()
            
            if norm == "passat" || norm == "passada" {
                modifier = "last"
            }
            else if norm == "pròxim" || norm == "proper" || norm == "pròxima" || norm == "propera" {
                modifier = "next"
            }
            else if norm == "aquest" || norm == "aquesta" {
                modifier =  "this"
            }
        }
        
        result = updateParsedComponent(result: result, ref: ref, offset: offset, modifier: modifier)
        result.tags[.caWeekdayParser] = true
        return result
    }
}

