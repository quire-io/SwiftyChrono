// swift-tools-version:5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "SwiftyChrono",
    platforms: [
        .iOS(.v12),
        .macOS(.v10_13),
        .tvOS(.v12),
        .watchOS(.v4),
    ],
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
            path: "Sources"),
        .testTarget(
            name: "SwiftyChronoTests",
            dependencies: ["SwiftyChrono"],
            path: "Tests/SwiftyChronoTests",
            resources: [.copy("JS")]),
    ],
    swiftLanguageVersions: [.v5]
)
