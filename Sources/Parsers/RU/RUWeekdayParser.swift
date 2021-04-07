//
//  RUWeekdayParser.swift
//  SwiftyChrono
//
//  Created by Nickolay Truhin on 06.04.2021.
//

import Foundation

private let DAYS_OFFSET = Dictionary(uniqueKeysWithValues: RU_WEEKDAY_OFFSET.map { ($0.key.count == 2 ? $0.key + "." : $0.key, $0.value) })

private let PATTERN = "(\\W|^)" +
    "(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:в\\s*?)?" +
    "(?:(эту|это|этот|прошлый|прошлую|прошлое|прошлая|следующий|следующую|следующее|следующая)\\s*)?" +
    "(" + DAYS_OFFSET.keys.joined(separator: "|") + ")" +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(этой|прошлой|следующей)\\s*недели)?" +
    "(?=\\W|$)"

private let prefixGroup = 2
private let weekdayGroup = 3
private let postfixGroup = 4

public func ruUpdateParsedComponent(result: ParsedResult, ref: Date, offset: Int, modifier: String) -> ParsedResult {
    var result = result
    
    var startMoment = ref
    var startMomentFixed = false
    let refOffset = startMoment.weekday
    
    var weekday: Int
    
    if modifier == "прошлый" || modifier == "прошлую" || modifier == "прошлое" || modifier == "прошлая" {
        weekday = offset - 7
        startMomentFixed = true
    } else if modifier == "следующий" || modifier == "следующую" || modifier == "следующее" || modifier == "следующая" {
        weekday = offset + 7
        startMomentFixed = true
    } else if modifier == "эту" || modifier == "это" || modifier == "этот" {
        weekday = offset
    } else {
        if abs(offset - 7 - refOffset) < abs(offset - refOffset) {
            weekday = offset - 7
        } else if abs(offset + 7 - refOffset) < abs(offset - refOffset) {
            weekday = offset + 7
        } else {
            weekday = offset
        }
    }
    
    startMoment = startMoment.setOrAdded(weekday, .weekday)
    
    result.start.assign(.weekday, value: offset)
    if startMomentFixed {
        result.start.assign(.day, value: startMoment.day)
        result.start.assign(.month, value: startMoment.month)
        result.start.assign(.year, value: startMoment.year)
    } else {
        result.start.imply(.day, to: startMoment.day)
        result.start.imply(.month, to: startMoment.month)
        result.start.imply(.year, to: startMoment.year)
    }
    
    return result
}

public class RUWeekdayParser: Parser {
    override var pattern: String { PATTERN }
    override var language: Language { .russian }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        let dayOfWeek = match.string(from: text, atRangeIndex: weekdayGroup).lowercased()
        guard let offset = DAYS_OFFSET[dayOfWeek] else {
            return nil
        }
        
        let prefix: String? = match.isNotEmpty(atRangeIndex: prefixGroup) ? match.string(from: text, atRangeIndex: prefixGroup) : nil
        let postfix: String? = match.isNotEmpty(atRangeIndex: postfixGroup) ? match.string(from: text, atRangeIndex: postfixGroup) : nil
        let norm = (prefix ?? postfix ?? "").lowercased()
        
        result = ruUpdateParsedComponent(result: result, ref: ref, offset: offset, modifier: norm)
        result.tags[.ruWeekdayParser] = true
        return result
    }
}
