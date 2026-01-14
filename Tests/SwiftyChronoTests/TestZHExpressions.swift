//
//  TestZHExpressions.swift
//  SwiftyChrono
//
//  Quick test for Chinese date expressions
//

import XCTest
@testable import SwiftyChrono

class TestZHExpressions: XCTestCase {
    func testChineseDateExpressions() {
        let chrono = Chrono()
        // 2025-01-13 是周一
        let refDate = Date(timeIntervalSince1970: 1736740800)
        
        let testCases = [
            // 应该支持的
            ("周五开会", "should parse '周五'"),
            ("周四下午见", "should parse '周四'"),
            ("下周一交报告", "should parse '下周一'"),
            ("这周三见", "should parse '这周三'"),
            ("上周二讨论", "should parse '上周二'"),
            ("星期五开会", "should parse '星期五'"),
            ("下周星期一交报告", "should parse '下周星期一'"),

            // 不应该误匹配的边界情况
            ("周围环境很好", "should NOT match '周围'"),
            ("周末去哪玩", "should NOT match '周末'"),
            ("周长是多少", "should NOT match '周长'"),
            ("周期性会议", "should NOT match '周期'"),
        ]
        
        print("\n=== 测试中文日期解析 (参考日期: 2025-01-13 周一) ===\n")
        
        for (text, description) in testCases {
            print("测试: \(text)")
            let results = chrono.parse(text: text, refDate: refDate)

            if results.isEmpty {
                if description.contains("NOT match") {
                    print("  ✅ 正确拒绝 - \(description)")
                } else {
                    print("  ❌ 无法识别 - \(description)")
                }
            } else {
                for result in results {
                    let formatter = DateFormatter()
                    formatter.dateFormat = "yyyy-MM-dd EEEE"
                    let dateStr = formatter.string(from: result.start.date)
                    print("  ✅ \(result.text) -> \(dateStr)")
                }
            }
            print()
        }
    }
}
