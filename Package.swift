// swift-tools-version:5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "SwiftyChrono",
    products: [
        .library(
            name: "SwiftyChrono",
            targets: ["SwiftyChrono"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "SwiftyChrono",
            dependencies: [],
            path: "Sources",
            exclude: ["Info.plist"]),
        .testTarget(
            name: "SwiftyChronoTests",
            dependencies: ["SwiftyChrono"],
            path: "Tests/SwiftyChronoTests",
            exclude: ["Info.plist"],
            resources: [.copy("JS")]),
    ],
    swiftLanguageVersions: [.v5]
)
