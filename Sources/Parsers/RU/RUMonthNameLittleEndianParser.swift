//
//  RUMonthNameLittleEndianParser.swift
//  SwiftyChrono
//
//  Created by Nickolay Truhin on 06.04.2021.
//

import Foundation

private let PATTERN = "(\\W|^)" +
    "(?:(?:в|с)\\s*?)?" +
    "(?:(Понедельник|Вторник|Среда|Четверг|Пятница|Суббота|Воскресенье|Пн|Вт|Ср|Чт|Пт|Сб|Вс)\\s*,?\\s*)?" +
    "(([0-9]{1,2})(?:е|й|я|го)?|\(RU_ORDINAL_WORDS_PATTERN))" +
    "(?:\\s*" +
        "(?:до|\\-|\\–|по|\\s)\\s*" +
        "(([0-9]{1,2})(?:е|й|я|го)?|\(RU_ORDINAL_WORDS_PATTERN))" +
    ")?\\s*(?:of)?\\s*" +
    "(Янв(?:аря|\\.)?|Фев(?:раля|\\.)?|Мар(?:та|\\.)?|Апр(?:еля|\\.)?|Мая|Июн(?:я|\\.)?|Июл(?:я|\\.)?|Авг(?:уста|\\.)?|Сент(?:ября|\\.)?|Окт(?:ября|\\.)?|Ноя(?:бря|\\.)?|Дек(?:абря|\\.)?)" +
    "(?:" +
        ",?\\s*([0-9]{1,4}(?![^\\s]\\d))" +
        "(\\s*(?:BE|AD|BC))?" +
    ")?" +
    "(?=\\W|$)"

private let weekdayGroup = 2
private let dateGroup = 3
private let dateNumGroup = 4
private let dateToGroup = 5
private let dateToNumGroup = 6
private let monthNameGroup = 7
private let yearGroup = 8
private let yearBeGroup = 9

public class RUMonthNameLittleEndianParser: Parser {
    override var pattern: String { PATTERN }
    override var language: Language { .russian }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        let month = RU_MONTH_OFFSET[match.string(from: text, atRangeIndex: monthNameGroup).lowercased()]!
        
        let day = Int(match.string(from: text, atRangeIndex: dateGroup))!
        
        if match.isNotEmpty(atRangeIndex: yearGroup) {
            var year = Int(match.string(from: text, atRangeIndex: yearGroup))!
            
            if match.isNotEmpty(atRangeIndex: yearBeGroup) {
                let yearBe = match.string(from: text, atRangeIndex: yearBeGroup)
                
                if NSRegularExpression.isMatch(forPattern: "BE", in: yearBe) {
                    // Buddhist Era
                    year = year - 543
                } else if NSRegularExpression.isMatch(forPattern: "BC", in: yearBe) {
                    // Before Christ
                    year = -year
                }
            } else if year < 10 {
                // require single digit years to always have BC/AD
                return nil
            } else if year < 100 {
                year += 2000
            }
            
            result.start.assign(.day, value: day)
            result.start.assign(.month, value: month)
            result.start.assign(.year, value: year)
        } else {
            //Find the most appropriated year
            var refMoment = ref
            refMoment = refMoment.setOrAdded(month, .month)
            refMoment = refMoment.setOrAdded(day, .day)
            refMoment = refMoment.setOrAdded(ref.year, .year)
            
            let nextYear = refMoment.added(1, .year)
            let lastYear = refMoment.added(-1, .year)
            if abs(nextYear.differenceOfTimeInterval(to: ref)) < abs(refMoment.differenceOfTimeInterval(to: ref)) {
                refMoment = nextYear
            } else if abs(lastYear.differenceOfTimeInterval(to: ref)) < abs(refMoment.differenceOfTimeInterval(to: ref)) {
                refMoment = lastYear
            }
            
            result.start.assign(.day, value: day)
            result.start.assign(.month, value: month)
            result.start.imply(.year, to: refMoment.year)
        }
        
        // Weekday component
        if match.isNotEmpty(atRangeIndex: weekdayGroup) {
            let weekday = RU_WEEKDAY_OFFSET[match.string(from: text, atRangeIndex: weekdayGroup).lowercased()]
            result.start.assign(.weekday, value: weekday)
        }
        
        // Text can be "range" value. Such as "12 - 13 January 2012"
        if match.isNotEmpty(atRangeIndex: dateToGroup) {
            result.end = result.start.clone()
            result.end?.assign(.day, value: Int(match.string(from: text, atRangeIndex: dateToGroup))!)
        }
        
        result.tags[.ruMonthNameLittleEndianParser] = true
        return result
    }
}
