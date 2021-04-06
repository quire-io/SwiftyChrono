//
//  RUDeadlineDateParser.swift
//  SwiftyChrono
//
//  Created by Nickolay Truhin on 06.04.2021.
//

import Foundation

private let PATTERN = "(\\W|^)" +
    "(через|спустя)\\s*" +
    "(" + RU_INTEGER_WORDS_PATTERN + "|[0-9]+|несколько|одну|один\\s*пол|одну)?\\s*" +
    "((секунда|секунд|секунды|секунду)|(минут|минуту|минуты)|(часов|час|часа)|(дней|день|дня)|(недель|неделю|неделя|недели)|(месяцев|месяц|месяца)|(лет|год|года))" +
    "(?=\\W|$)"



private let STRICT_PATTERN = "(\\W|^)" +
    "(через|спустя)\\s*" +
    "(" + RU_INTEGER_WORDS_PATTERN + "|[0-9]+|одну(?:r|m)?)\\s*" +
    "((секунд|секунду|секунды)|(минут|минуту|минуты)|(часов|часа|час)|(дней|день|дня))\\s*" +
    "(?=\\W|$)"



public class RUDeadlineFormatParser: Parser {
    override var pattern: String { return strictMode ? STRICT_PATTERN : PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        result.tags[.ruDeadlineFormatParser] = true
        
        let number: Int
        let numberText = match.string(from: text, atRangeIndex: 3).lowercased()
        if let number0 = EN_INTEGER_WORDS[numberText] {
            number = number0
        } else if numberText == "один" || numberText == "одну" {
            number = 1
        } else if NSRegularExpression.isMatch(forPattern: "несколько", in: numberText) {
            number = 3
        } else if NSRegularExpression.isMatch(forPattern: "пол", in: numberText) {
            number = HALF
        } else {
            number = Int(numberText)!
        }
        
        var date = ref
        let matchText4 = match.string(from: text, atRangeIndex: 4)
        func ymdResult() -> ParsedResult {
            result.start.assign(.year, value: date.year)
            result.start.assign(.month, value: date.month)
            result.start.assign(.day, value: date.day)
            return result
        }
        if NSRegularExpression.isMatch(forPattern: "день|дня|дней", in: matchText4) {
            date = number != HALF ? date.added(number, .day) : date.added(12, .hour)
            return ymdResult()
        } else if NSRegularExpression.isMatch(forPattern: "недель|неделю|неделя|недели", in: matchText4) {
            date = number != HALF ? date.added(number * 7, .day) : date.added(3, .day).added(12, .hour)
            return ymdResult()
        } else if NSRegularExpression.isMatch(forPattern: "месяц|месяцев|месяца", in: matchText4) {
            date = number != HALF ? date.added(number, .month) : date.added((date.numberOf(.day, inA: .month) ?? 30)/2, .day)
            return ymdResult()
        } else if NSRegularExpression.isMatch(forPattern: "год|года|лет", in: matchText4) {
            date = number != HALF ? date.added(number, .year) : date.added(6, .month)
            return ymdResult()
        }
        
        
        
        if NSRegularExpression.isMatch(forPattern: "часов|час|часа", in: matchText4) {
            date = number != HALF ? date.added(number, .hour) : date.added(30, .minute)
        } else if NSRegularExpression.isMatch(forPattern: "минут|минуту|минуты", in: matchText4) {
            date = number != HALF ? date.added(number, .minute) : date.added(30, .second)
        } else if NSRegularExpression.isMatch(forPattern: "секунд|секунду|секунды", in: matchText4) {
            date = number != HALF ? date.added(number, .second) : date.added(HALF_SECOND_IN_MS, .nanosecond)
        }
        
        
        result.start.imply(.year, to: date.year)
        result.start.imply(.month, to: date.month)
        result.start.imply(.day, to: date.day)
        result.start.assign(.hour, value: date.hour)
        result.start.assign(.minute, value: date.minute)
        result.start.assign(.second, value: date.second)
        
        return result
    }
}
