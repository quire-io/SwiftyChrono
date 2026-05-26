// swift-tools-version:5.9
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
            path: "Sources"),
        .testTarget(
            name: "SwiftyChronoTests",
            dependencies: ["SwiftyChrono"],
            path: "Tests"),
    ]
)
