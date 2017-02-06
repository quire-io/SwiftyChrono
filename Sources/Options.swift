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
        ENMonthNameMiddleEndianParser(strictMode: strictMode),
        ENMonthNameParser(strictMode: strictMode),
        ENSlashDateFormatParser(strictMode: strictMode),
        ENSlashDateFormatStartWithYearParser(strictMode: strictMode),
        ENSlashMonthFormatParser(strictMode: strictMode),
        ENTimeAgoFormatParser(strictMode: strictMode),
        ENTimeExpressionParser(strictMode: strictMode),
        
        // JP
        // ES
        ESTimeAgoFormatParser(strictMode: strictMode),
        ESDeadlineFormatParser(strictMode: strictMode),
        ESTimeExpressionParser(strictMode: strictMode),
        ESMonthNameLittleEndianParser(strictMode: strictMode),
        ESSlashDateFormatParser(strictMode: strictMode),
        
        // FR
        // ZH-Hant
        
    ], refiners: [
        // Removing overlaping first
        OverlapRemovalRefiner(),
        ForwardDateRefiner(),
        
        // ETC
        ENMergeDateTimeRefiner(),
        ENMergeDateRangeRefiner(),
        ENPrioritizeSpecificDateRefiner(),
        
        // Extract additional info later
        ExtractTimezoneOffsetRefiner(),
        ExtractTimezoneAbbrRefiner(),
        
        UnlikelyFormatFilter(),
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
        ENWeekdayParser(strictMode: false),
        ENRelativeDateFormatParser(strictMode: false),
        
        // JP
        // ES
        ESCasualDateParser(strictMode: false),
        ESWeekdayParser(strictMode: false),
        
        // FR
    ], at: 0)
    
    return options
}
