//
//  ENSlashMonthFormatParser.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/23/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

/*
 Month/Year date format with slash "/" (also "-" and ".") between numbers
 - 11/05
 - 06/2005
 */

private let PATTERN = "(^|[^\\d/]\\s+|[^\\w\\s])" +
    "([0-9]|0[1-9]|1[012])/([0-9]{4})" +
    "([^\\d/]|$)"

private let openningGroup = 1
private let endingGroup = 4

private let yearGroup = 2
private let monthGroup = 3

public class ENSlashMonthFormatParser: Parser {
    override var pattern: String { return PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        result.start.assign(.year, value: Int(match.string(from: text, atRangeIndex: yearGroup)))
        result.start.assign(.month, value: Int(match.string(from: text, atRangeIndex: monthGroup)))
        result.start.assign(.day, value: 1)
        
        result.tags[.enSlashMonthFormatParser] = true
        return result
    }
}
