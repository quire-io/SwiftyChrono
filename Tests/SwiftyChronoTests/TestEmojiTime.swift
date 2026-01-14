import XCTest
@testable import SwiftyChrono

class TestEmojiTime: XCTestCase {

    func testEmojiTimeParsing() {
        let chrono = Chrono()
        let refDate = Date()

        // 测试用例: (输入文本, 期望匹配的文本)
        let testCases: [(String, String)] = [
            ("明天 14 点", "明天"),
            ("🇨🇳明天 14 点", "明天"),
            ("明天下午2点", "明天下午2点"),
            ("🇨🇳明天下午2点", "明天下午2点"),
            ("✨后天开会", "后天"),
            ("😊下周三见", "下周三"),
        ]

        for (input, expectedText) in testCases {
            let results = chrono.parse(text: input, refDate: refDate)

            XCTAssertFalse(results.isEmpty, "输入 '\(input)' 应该能被解析")

            if !results.isEmpty {
                XCTAssertEqual(results[0].text, expectedText, "输入 '\(input)' 的匹配文本应为 '\(expectedText)'")
            }
        }
    }

    func testEmojiIndexAccuracy() {
        let chrono = Chrono()

        // 创建一个固定的参考日期
        let calendar = Calendar(identifier: .gregorian)
        let components = DateComponents(year: 2025, month: 1, day: 15, hour: 10, minute: 0)
        guard let refDate = calendar.date(from: components) else {
            XCTFail("无法创建参考日期")
            return
        }

        // 测试 emoji 前缀不影响日期计算
        let withEmoji = chrono.parse(text: "🇨🇳明天 14 点", refDate: refDate)
        let withoutEmoji = chrono.parse(text: "明天 14 点", refDate: refDate)

        XCTAssertEqual(withEmoji.count, withoutEmoji.count, "有无 emoji 解析结果数量应相同")

        if !withEmoji.isEmpty && !withoutEmoji.isEmpty {
            let emojiResult = withEmoji[0]
            let normalResult = withoutEmoji[0]

            // 验证解析出的日期应该相同
            let timeDifference = emojiResult.start.date.timeIntervalSince(normalResult.start.date)
            XCTAssertEqual(timeDifference, 0, accuracy: 1.0, "有无 emoji 解析出的日期应该相同")

            // 验证匹配文本相同
            XCTAssertEqual(emojiResult.text, normalResult.text, "有无 emoji 匹配的文本应相同")
        }
    }
}
