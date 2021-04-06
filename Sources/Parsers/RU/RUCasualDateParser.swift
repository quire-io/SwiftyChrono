//
//  RUCasualDateParser.swift
//  SwiftyChrono
//
//  Created by Nickolay Truhin on 06.04.2021.
//

import Foundation

private let PATTERN = "(\\W|^)(сейчас|сегодня|вчера|ночью|прошлым\\s*вечером|сегодня ночью|прошлой\\s*ночью|(?:завтра|вчера)\\s*|послезавтра|позавчера)(?=\\W|$)"

public class RUCasualDateParser: Parser {
    override var pattern: String { return PATTERN }
    
    override public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        let (matchText, index) = matchTextAndIndex(from: text, andMatchResult: match)
        var result = ParsedResult(ref: ref, index: index, text: matchText)
        
        let refMoment = ref
        var startMoment = refMoment
        let lowerText = matchText.lowercased()
        
        if lowerText == "сегодня ночью" {
            // Normally means this coming midnight
            result.start.imply(.hour, to: 22)
            result.start.imply(.meridiem, to: 1)
            
        } else if NSRegularExpression.isMatch(forPattern: "^завтра", in: lowerText) {
            // Check not "Tomorrow" on late night
            if refMoment.hour > 1 {
                startMoment = startMoment.added(1, .day)
            }
        } else if NSRegularExpression.isMatch(forPattern: "^послезавтра", in: lowerText) {
            // Check not "Tomorrow" on late night
            if refMoment.hour > 1 {
                startMoment = startMoment.added(2, .day)
            }
        } else if NSRegularExpression.isMatch(forPattern: "^вчера", in: lowerText) {
            startMoment = startMoment.added(-1, .day)
        } else if NSRegularExpression.isMatch(forPattern: "^позавчера", in: lowerText) {
            startMoment = startMoment.added(-2, .day)
        } else if NSRegularExpression.isMatch(forPattern: "прошлой\\s*ночью", in: lowerText) {
            result.start.imply(.hour, to: 0)
            if refMoment.hour > 6 {
                startMoment = startMoment.added(-1, .day)
            }
        } else if NSRegularExpression.isMatch(forPattern: "прошлым\\s*вечером", in: lowerText) {
            result.start.imply(.hour, to: 15)
            if refMoment.hour > 6 {
                startMoment = startMoment.added(-1, .day)
            }
        } else if NSRegularExpression.isMatch(forPattern: "сейчас", in: lowerText) {
            result.start.imply(.hour, to: refMoment.hour)
            result.start.imply(.minute, to: refMoment.minute)
            result.start.imply(.second, to: refMoment.second)
            result.start.imply(.millisecond, to: refMoment.millisecond)
        }
        
        result.start.assign(.day, value: startMoment.day)
        result.start.assign(.month, value: startMoment.month)
        result.start.assign(.year, value: startMoment.year)
        result.tags[.ruCasualDateParser] = true
        return result
    }
}
