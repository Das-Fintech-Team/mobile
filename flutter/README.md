# Flutter Templates



Prerequisits:

Depending on your environment follow:
https://flutter.dev/docs/get-started/install

We tested this on a mac following: https://flutter.dev/docs/get-started/install/macos

1) Install XCode and run:
 	sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
 	sudo xcodebuild -runFirstLaunch
2) Install Android Studio (download some of the emulators in Android Studio)
3) install the flutter sdk using: brew install --cask flutter
4) Test the installation using: flutter doctor


Steps used to create this starter project:

- flutter create starter
- cd starter
- add dependencies to pubspec.yaml (We added flutter_web3: to access the Ethereum Blockchain using the URI: https://eth.dft.one, an Ethereum Node provided by Cloudflare)
  command:  
  		flutter pub add flutter_web3
  		flutter pub add get
  		
- edit the code in starter/lib/main.dart
- flutter run  (Will open in Chrome)

