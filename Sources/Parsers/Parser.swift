//
//  Parser.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/18/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

public class Parser {
    let strictMode: Bool
    var pattern: String { return "" }
    var language: Language { return .english }
    
    public init(strictMode: Bool) {
        self.strictMode = strictMode
    }
    
    public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        return nil
    }
    
    public func execute(text: String, ref: Date, opt: [OptionType: Int]) -> [ParsedResult] {
        var results = [ParsedResult]()
        
        let regex = try? NSRegularExpression(pattern: pattern, options: .caseInsensitive)
        
        var startIndex = 0
        var remainingText = text
        var match = regex?.firstMatch(in: text, range: NSRange(location: startIndex, length: remainingText.count))
        
        while let existingMatch = match {
            let result = extract(text: text, ref: ref, match: existingMatch, opt: opt)
            if let result = result {
                if !result.isMoveIndexMode { // extraction is success, normal mode
                    // If success, start from the end of the result
                    startIndex = result.index + result.text.count
                    remainingText = String(text[text.index(text.startIndex, offsetBy: startIndex)...])
                    
                    if !strictMode || result.hasPossibleDates() {
                        results.append(result)
                    }
                } else { // extraction is failure, skip this extraction and move on to specific index
                    startIndex = result.index
                    remainingText = text.substring(from: startIndex)
                }
            } else { // extraction is failure
                // If fail, move on by 1
                let location = existingMatch.range.location + 1
                remainingText = String(text[text.index(text.startIndex, offsetBy: location)...])
                startIndex = location
            }
            
            let remainingTextLength = remainingText.count
            
            match = remainingTextLength > 0 ?
                regex?.firstMatch(in: text, range: NSRange(location: startIndex, length: remainingTextLength)) : nil
        }
        
        return results
    }
    
    final func matchTextAndIndex(from text: String, andMatchResult matchResult: NSTextCheckingResult) -> (matchText: String, index: Int) {
        let index1Length = matchResult.range(at: 1).length
        let matchText = matchResult.string(from: text, atRangeIndex: 0).substring(from: index1Length)
        let index = matchResult.range(at: 0).location + index1Length
        
        return (matchText, index)
    }
    
    final func matchTextAndIndexForCHHant(from text: String, andMatchResult matchResult: NSTextCheckingResult) -> (matchText: String, index: Int) {
        let matchText = matchResult.string(from: text, atRangeIndex: 0)
        let range = matchResult.range

        // 将 NSRange 转换为正确的 String.Range，获取字符位置
        // 这样可以正确处理 emoji 等由多个 UTF-16 code units 组成的字符
        guard let stringRange = Range(range, in: text) else {
            // 如果转换失败，说明 NSRange 与实际字符串不匹配，返回 0 作为安全值
            return (matchText, 0)
        }

        // 计算从字符串开始到匹配位置的字符距离
        let index = text.distance(from: text.startIndex, to: stringRange.lowerBound)
        return (matchText, index)
    }
}
