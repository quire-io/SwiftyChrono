//
//  RUMergeDateTimeRefiner.swift
//  SwiftyChrono
//
//  Created by Nickolay Truhin on 06.04.2021.
//

import Foundation

class RUMergeDateTimeRefiner: MergeDateTimeRefiner {
    override var PATTERN: String { "^\\s*(T|в|после|до|по|с|,|-)?\\s*$" }
    override var TAGS: TagUnit { .ruMergeDateAndTimeRefiner }
}

