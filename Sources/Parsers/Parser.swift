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
    
    public init(strictMode: Bool) {
        self.strictMode = strictMode
    }
    
    public func extract(text: String, ref: Date, match: NSTextCheckingResult, opt: [OptionType: Int]) -> ParsedResult? {
        return nil
    }
    
    public func execute(text: String, ref: Date, opt: [OptionType: Int]) -> [ParsedResult] {
        var results = [ParsedResult]()
        
//        do {
            let regex = try? NSRegularExpression(pattern: pattern)
        
            var startIndex = 0
            var remainingText = text
            var match = regex?.firstMatch(in: remainingText, range: NSRange(location: startIndex, length: remainingText.characters.count))
            
            while let existingMatch = match {
                if let result = extract(text: text, ref: ref, match: existingMatch, opt: opt) {
                    // If success, start from the end of the result
                    startIndex = result.index + result.text.characters.count
                    remainingText = text.substring(from: text.index(text.startIndex, offsetBy: startIndex))
                    
                    if !strictMode || result.hasPossibleDates() {
                        results.append(result)
                    }
                } else {
                    // If fail, move on by 1
                    remainingText = text.substring(from: text.index(text.startIndex, offsetBy: existingMatch.range.location + 1))
                }
                
                let remainingTextLength = remainingText.characters.count
                
                match = remainingTextLength > 0 ?
                    regex?.firstMatch(in: remainingText, range: NSRange(location: startIndex, length: remainingTextLength)) : nil
            }
            
            return results
//        } catch {
//            return []
//        }
    }
}
