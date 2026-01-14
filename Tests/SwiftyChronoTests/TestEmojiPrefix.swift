//
//  TestEmojiPrefix.swift
//  SwiftyChrono
//
//  Test emoji prefix handling in Chinese date parsing
//

import XCTest
@testable import SwiftyChrono

class TestEmojiPrefix: XCTestCase {

    func testEmojiPrefixBasic() {
        let chrono = Chrono()
        let refDate = Date()

        // 国旗 emoji + 时间
        let results1 = chrono.parse(text: "🇨🇳明天 14 点", refDate: refDate)
        XCTAssertEqual(results1.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results1[0].text, "明天", "匹配文本应为 '明天'")

        // 表情 emoji + 时间
        let results2 = chrono.parse(text: "😊明天开会", refDate: refDate)
        XCTAssertEqual(results2.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results2[0].text, "明天", "匹配文本应为 '明天'")

        // 多个 emoji + 时间
        let results3 = chrono.parse(text: "🔥下周一交报告", refDate: refDate)
        XCTAssertEqual(results3.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results3[0].text, "下周一", "匹配文本应为 '下周一'")

        // 无 emoji 对照组
        let results4 = chrono.parse(text: "明天14点", refDate: refDate)
        XCTAssertEqual(results4.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results4[0].text, "明天", "匹配文本应为 '明天'")

        let results5 = chrono.parse(text: "下周一交报告", refDate: refDate)
        XCTAssertEqual(results5.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results5[0].text, "下周一", "匹配文本应为 '下周一'")
    }

    func testEmojiWithTimeExpression() {
        let chrono = Chrono()
        let refDate = Date()

        // 国旗 emoji + 下午时间
        let results1 = chrono.parse(text: "🇨🇳明天下午2点", refDate: refDate)
        XCTAssertEqual(results1.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results1[0].text, "明天下午2点", "匹配文本应为 '明天下午2点'")

        // 无 emoji 对照组
        let results2 = chrono.parse(text: "明天下午2点", refDate: refDate)
        XCTAssertEqual(results2.count, 1, "应解析出 1 个结果")
        XCTAssertEqual(results2[0].text, "明天下午2点", "匹配文本应为 '明天下午2点'")
    }

    func testComplexEmojiSequences() {
        let chrono = Chrono()
        let refDate = Date()

        // 多个表情符号
        let results1 = chrono.parse(text: "✨💫这周五见", refDate: refDate)
        XCTAssertFalse(results1.isEmpty, "多个 emoji 前缀应该能被解析")
        if !results1.isEmpty {
            XCTAssertEqual(results1[0].text, "这周五", "匹配文本应为 '这周五'")
        }

        // emoji + skin tone modifier
        let results2 = chrono.parse(text: "👋后天见", refDate: refDate)
        XCTAssertFalse(results2.isEmpty, "emoji 前缀应该能被解析")
        if !results2.isEmpty {
            XCTAssertEqual(results2[0].text, "后天", "匹配文本应为 '后天'")
        }
    }
}
