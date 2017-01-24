//
//  Chrono.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/18/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

public enum OptionType: String { case
    morning = "morning",
    afternoon = "afternoon",
    evening = "evening",
    noon = "noon",
    forwardDate = "forwardDate",
    forwardDatesOnly = "forwardDatesOnly"
}

struct Chrono {
    let modeOption: ModeOptio
    var parsers: [Parser] { return modeOption.parsers }
    var refiners: [Refiner] { return modeOption.refiners }
    
    init(modeOption: ModeOptio = casualModeOption()) {
        self.modeOption = modeOption
    }
    
    func parse(text: String, refDate: Date = Date(), opt: [OptionType: Int] = [:]) -> [ParsedResult] {
        var allResults = [ParsedResult]()
        
        for parser in parsers {
            allResults += parser.execute(text: text, ref: refDate, opt: opt)
        }
        
        allResults.sort { $0.index < $1.index }
        
        for refiner in refiners {
            allResults = refiner.refine(text: text, results: allResults, opt: opt)
        }
        
        return allResults
    }
    
    func parseDate(text: String, refDate: Date, opt: [OptionType: Int]) -> Date? {
        let results = Chrono.casual.parse(text: text, refDate: refDate, opt: opt)
        return results.first?.start.date
    }
    
    private static let strict = Chrono(modeOption: strictModeOption())
    private static let casual = Chrono(modeOption: casualModeOption())
}
