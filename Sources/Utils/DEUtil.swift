//
//  DEUtil.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 2/7/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

let DE_WEEKDAY_OFFSET = [
    "Sonntag": 0,
    "sun": 0,
    "Montag": 1,
    "mon": 1,
    "Dienstag": 2,
    "tue":2,
    "Mittwoch": 3,
    "wed": 3,
    "Donnerstag": 4,
    "thurs": 4,
    "thur": 4,
    "thu": 4,
    "Freitag": 5,
    "fri": 5,
    "Samstag": 6,
    "sat": 6
]

let DE_MONTH_OFFSET = [
    "Januar": 1,
    "jan": 1,
    "jan.": 1,
    "Februar": 2,
    "feb": 2,
    "feb.": 2,
    "März": 3,
    "mar": 3,
    "mar.": 3,
    "April": 4,
    "apr": 4,
    "apr.": 4,
    "may": 5,
    "Juni": 6,
    "jun": 6,
    "jun.": 6,
    "Juli": 7,
    "jul": 7,
    "jul.": 7,
    "August": 8,
    "aug": 8,
    "aug.": 8,
    "September": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "Oktober": 10,
    "oct": 10,
    "oct.": 10,
    "November": 11,
    "nov": 11,
    "nov.": 11,
    "Dezember": 12,
    "dec": 12,
    "dec.": 12
]

let DE_INTEGER1_WORDS = [
    "einen": 1,
    "eine": 1,
    "einer": 1,
    "ein": 1,
    "einem": 1,
]
let DE_INTEGER1_WORDS_PATTERN = "(?:" + DE_INTEGER1_WORDS.keys.joined(separator: "|") + ")"

let DE_INTEGER_WORDS = DE_INTEGER1_WORDS.merged(with: [
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12
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
