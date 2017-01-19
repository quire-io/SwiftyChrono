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
        ENCasualTimeParser(strictMode: strictMode),
        ENCasualDateParser(strictMode: strictMode)
    ], refiners: [
        ENMergeDateTimeRefiner()
    ])
}

func strictModeOption() -> ModeOptio {
    return baseOption(strictMode: true)
}

func casualModeOption() -> ModeOptio {
    let options = baseOption(strictMode: false)
    
    return options
}
