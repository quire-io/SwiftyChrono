//
//  Options.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/18/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

struct ModeOptio {
    var parsers: [Parser]
    var refiners: [Refiner]
    
    init(parsers: [Parser], refiners: [Refiner]) {
        self.parsers = parsers
        self.refiners = refiners
    }
}

private func baseOption(strictMode: Bool) -> ModeOptio {
    return ModeOptio(parsers: [
        // EN
        ENISOFormatParser(strictMode: strictMode),
        ENDeadlineFormatParser(strictMode: strictMode),
        ENMonthNameLittleEndianParser(strictMode: strictMode),
        
        // JP
        // ES
        // FR
        // ZH-Hant
        
    ], refiners: [
        // Removing overlaping first
        
        // ETC
        ENMergeDateTimeRefiner(),
        ENMergeDateRangeRefiner(),
        
        // Extract additional info later
    ])
}

func strictModeOption() -> ModeOptio {
    return baseOption(strictMode: true)
}

func casualModeOption() -> ModeOptio {
    var options = baseOption(strictMode: false)
    
    options.parsers.insert(contentsOf: [
        // EN
        ENCasualTimeParser(strictMode: false),
        ENCasualDateParser(strictMode: false),
        
        // JP
        // ES
        // FR
    ], at: 0)
    
    return options
}
