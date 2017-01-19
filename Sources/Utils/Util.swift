//
//  Util.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/18/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

extension NSTextCheckingResult {
    func isNotEmpty(atRangeIndex index: Int) -> Bool {
        return rangeAt(index).length != 0
    }
    
    func string(from text: String, atRangeIndex index: Int) -> String {
        return text.subString(with: rangeAt(index))
    }
}

extension String {
    func subString(with range: NSRange) -> String {
        return (self as NSString).substring(with: range)
    }
    
    func substring(from idx: Int) -> String {
        return substring(from: index(startIndex, offsetBy: idx))
    }
}
