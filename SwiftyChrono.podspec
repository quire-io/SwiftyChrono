Pod::Spec.new do |spec|
    spec.name         = 'SwiftyChrono'
    spec.version      = '0.5.1'
    spec.osx.deployment_target = "10.9"
    spec.ios.deployment_target = "8.0"
    spec.tvos.deployment_target = "9.0"
    spec.watchos.deployment_target = "2.0"
    spec.summary      = 'A natural language date parser in Swift (ported from chrono.js)'
    spec.author       = 'Jerrywell'
    spec.homepage     = 'https://github.com/quire-io/SwiftyChrono'
    spec.license      = { :type => 'MIT', :file => 'LICENSE.md' }
    spec.source       = { :git => 'https://github.com/quire-io/SwiftyChrono.git', :tag => 'v0.5.1' }
    spec.source_files = 'Sources/**/*.swift'
    spec.social_media_url = 'https://twitter.com/quire_io'
    spec.documentation_url = 'https://github.com/quire-io/SwiftyChrono'
end
