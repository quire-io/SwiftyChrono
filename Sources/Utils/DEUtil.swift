//
//  DEUtil.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/7/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

let DE_WEEKDAY_OFFSET = [
    "sonntag": 0,
    "so": 0,
    "montag": 1,
    "mo": 1,
    "dienstag": 2,
    "di":2,
    "mittwoch": 3,
    "mi": 3,
    "donnerstag": 4,
    "do": 4,
    "freitag": 5,
    "fr": 5,
    "samstag": 6,
    "sa": 6
]
let DE_WEEKDAY_WORDS_PATTERN = "(?:" + DE_INTEGER1_WORDS.keys.joined(separator: "|") + ")"

let DE_MONTH_OFFSET = [
    "januar": 1,
    "jan": 1,
    "jan.": 1,
    "februar": 2,
    "feb": 2,
    "feb.": 2,
    "märz": 3,
    "mar": 3,
    "mar.": 3,
    "april": 4,
    "apr": 4,
    "apr.": 4,
    "may": 5,
    "juni": 6,
    "jun": 6,
    "jun.": 6,
    "juli": 7,
    "jul": 7,
    "jul.": 7,
    "august": 8,
    "aug": 8,
    "aug.": 8,
    "september": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "oktober": 10,
    "oct": 10,
    "oct.": 10,
    "november": 11,
    "nov": 11,
    "nov.": 11,
    "dezember": 12,
    "dec": 12,
    "dec.": 12
]
let DE_MONTH_OFFSET_PATTERN = "(?:" + DE_MONTH_OFFSET.keys.joined(separator: "|") + ")"

let DE_INTEGER1_WORDS = [
    "einen": 1,
    "eine": 1,
    "einer": 1,
    "ein": 1,
    "einem": 1,
]
let DE_INTEGER1_WORDS_PATTERN = "(?:" + DE_INTEGER1_WORDS.keys.joined(separator: "|") + ")"

let DE_INTEGER_WORDS = DE_INTEGER1_WORDS.merged(with: [
    "zwei": 2,
    "drei": 3,
    "vier": 4,
    "fünf": 5,
    "sechs": 6,
    "sieben": 7,
    "acht": 8,
    "neun": 9,
    "zehn": 10,
    "elf": 11,
    "zwölf": 12
])
let DE_INTEGER_WORDS_PATTERN = "(?:" + DE_INTEGER_WORDS.keys.joined(separator: "|") + ")"

// all need /n/r/m/s
let DE_ORDINAL_WORDS = [
    "Ersten": 1,
    "Erster": 1,
    "Erste": 1,
    "Erstem": 1,
    "Erstes": 1,
    "Zweite": 2,
    "Dritte": 3,
    "Vierte": 4,
    "Fünfte": 5,
    "Sechste": 6,
    "Siebte": 7,
    "Achte": 8,
    "Neunte": 9,
    "Zehnte": 10,
    "Elfte": 11,
    "Zwölfte": 12,
    "Dreizehnte": 13,
    "Vierzehnte": 14,
    "Fünfzehnte": 15,
    "Sechzehnte": 16,
    "Siebzehnte": 17,
    "Achtzehnte": 18,
    "Neunzehnte": 19,
    "Zwanzigste": 20,
    "Einundzwanzigste": 21,
    "Zweiundzwanzigste": 22,
    "Dreiundzwanzigste": 23,
    "Viewundzwanzigste": 24,
    "Fünfundzwanzigste": 25,
    "Sechsundzwanzigste": 26,
    "Siebenundzwanzigste": 27,
    "Achtundzwanzigste": 28,
    "Neunundzwanzigste": 29,
    "Dreißigste": 30,
    "Einunddreißigste": 31
]
let DE_ORDINAL_WORDS_PATTERN = "(?:\(DE_ORDINAL_WORDS.keys.joined(separator: "|").replacingOccurrences(of: " ", with: "[ -]")))";
