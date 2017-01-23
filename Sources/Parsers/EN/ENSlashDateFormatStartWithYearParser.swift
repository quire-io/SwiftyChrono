//
//  ENSlashDateFormatStartWithYearParser.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/23/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

private let PATTERN = "(\\W|^)" +
    "([0-9]{4})[\\-\\.\\/]([0-9]{1,2})[\\-\\.\\/]([0-9]{1,2})" +
    "(?=\\W|$)"

private var yearNumberGroup = 2
private var monthNumberGroup = 3
private var dateNumberGroup = 4

public class ENSlashDateFormatStartWithYearParser: Parser {
    override var pattern: String { return PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        result.start.assign(.year, value: Int(match.string(from: text, atRangeIndex: yearNumberGroup)))
        result.start.assign(.month, value: Int(match.string(from: text, atRangeIndex: monthNumberGroup)))
        result.start.assign(.day, value: Int(match.string(from: text, atRangeIndex: dateNumberGroup)))
        
        guard let month = result.start[.month], let day = result.start[.day] else {
            return nil
        }
        
        if month > 12 || month < 1 || day > 31 || day < 1 {
            return nil
        }
        
        result.tags[.enSlashDateFormatStartWithYearParser] = true
        return result
    }
}
