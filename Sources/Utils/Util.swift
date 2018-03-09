//
//  Util.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/18/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

let HALF = Int.min
let HALF_SECOND_IN_MS = millisecondsToNanoSeconds(500) // unit: nanosecond

/// get ascending order from two number.
/// ATTENSION:
func sortTwoNumbers(_ index1: Int, _ index2: Int) -> (lessNumber: Int, greaterNumber: Int) {
    if index1 == index2 {
        return (index1, index2)
    }
    
    let lessNumber = index1 < index2 ? index1 : index2
    let greaterNumber = index1 > index2 ? index1 : index2
    return (lessNumber, greaterNumber)
}

extension NSTextCheckingResult {
    func isNotEmpty(atRangeIndex index: Int) -> Bool {
        return range(at: index).length != 0
    }
    
    func isEmpty(atRangeIndex index: Int) -> Bool {
        return range(at: index).length == 0
    }
    
    func string(from text: String, atRangeIndex index: Int) -> String {
        return text.subString(with: range(at: index))
    }
}

extension String {
    var firstString: String? {
        guard let char = self.first else {
            return nil
        }
        
        return String(char)
    }
    
    func subString(with range: NSRange) -> String {
        return (self as NSString).substring(with: range)
    }
    
    func substring(from idx: Int) -> String {
        let startIdx = index(startIndex, offsetBy: idx)
        let endIdx = index(endIndex, offsetBy: 0)
        let range = startIdx..<endIdx
        return String(self[range])
    }
    
    func substring(from startIdx: Int, to endIdx: Int? = nil) -> String {
        if startIdx < 0 || (endIdx != nil && endIdx! < 0) {
            return ""
        }
        let start = self.index(startIndex, offsetBy: startIdx)
        let end = endIdx != nil ? self.index(startIndex, offsetBy: endIdx!) : endIndex
        let rangeFix = start..<end
        return String(self[rangeFix])
    }
    
    func range(ofStartIndex idx: Int, length: Int) -> Range<String.Index> {
        let startIndex0 = index(startIndex, offsetBy: idx)
        let endIndex0: String.Index
        if idx + length > self.count {
            // causes out of bound error
            // so we just set by length
            endIndex0 = index(startIndex, offsetBy: self.count)
        } else {
            endIndex0 = index(startIndex, offsetBy: idx + length)
        }
        return Range(uncheckedBounds: (lower: startIndex0, upper: endIndex0))
    }
    
    func range(ofStartIndex startIdx: Int, andEndIndex endIdx: Int) -> Range<String.Index> {
        let startIndex0 = index(startIndex, offsetBy: startIdx)
        let endIndex0 = index(startIndex, offsetBy: endIdx)
        return Range(uncheckedBounds: (lower: startIndex0, upper: endIndex0))
    }
    
    func trimmed() -> String {
        return trimmingCharacters(in: .whitespacesAndNewlines)
    }
}

extension NSRegularExpression {
    static func isMatch(forPattern pattern: String, in text: String) -> Bool {
        return (try? NSRegularExpression(pattern: pattern, options: .caseInsensitive))?.firstMatch(in: text, range: NSRange(location: 0, length: text.count)) != nil
    }
}

extension Dictionary {
    
    mutating func merge(with dictionary: Dictionary) {
        dictionary.forEach { updateValue($1, forKey: $0) }
    }
    
    func merged(with dictionary: Dictionary) -> Dictionary {
        var dict = self
        dict.merge(with: dictionary)
        return dict
    }
}
