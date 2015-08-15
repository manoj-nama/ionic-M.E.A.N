# M.E.A.N App

This is an `ionic` project to overcome the problem of separation of tools like, Google DOCS, Spreadsheets, Mail etc
 and aims to club them all together in a unified experience for the TO THE NEW Digital's `M.E.A.N` Team

This app will consist of all of the various functions on the go. i.e. `Bootcamp`, `Hiring`, `Meetings` etc.

##Getting Started

This is a default `ionic` app based on `angular`. Android __SDK__, iOS __SDK__ is required for building the app.

This app also uses underlying device features using `ngCordova`. Following plugins have been used:

* `cordova-plugin-splashscreen` (_default_)
* `cordova-plugin-device` (_default_)
* `cordova-plugin-console` (_default_)
* `cordova-plugin-whitelist` (_default_)
* `com-ionic-keyboard` (_default_)
* `cordova-plugin-statusbar` [Statusbar](http://ngcordova.com/docs/plugins/statusbar/)
* `cordova-plugin-local-notifications` [Local Notifications](http://ngcordova.com/docs/plugins/localNotification/)

##Setting up

0. `npm install -g ionic cordova`
1. clone the repo `git clone git@github.com:manoj-nama/ionic-M.E.A.N.git`
2. cd `ionic-M.E.A.N` && `bower install`
3. Add desired platform. i.e `ionic platform add android` or `ionic platform add ios` (_Requires SDK to be present_)
4. Install the above non-default plugins (_refer to the links on how to install_)
5. `ionic build android` or `ionic build ios`
6. `ionic run android` | `ionic run ios` (_connect device to run in device directly_)