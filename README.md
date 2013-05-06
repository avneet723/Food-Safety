Food Safety Game 100
====================

This is the Food Safety Game for VT Dining Services. You can contact the
developers at `avneet@vt.edu` and `evant@vt.edu`.

Requirements
------------

    git
    node.js
    java
    game closure

The game is built using the [game closure](http://www.gameclosure.com/)
development kit. You can find up-to-date installation instructions at
<http://docs.gameclosure.com/guide/install.html>.

After installing the devkit, register this project by navigation to the project
directory and doing `basil register`.

Development
-----------
### Running
To test the game in development mode, do `basil serve` from the project
directory. Then point your browser at [localhost:9200](http://localhost:9200).

### Project structure

    Food-Safety
    |-- src           # javascript source files
    |-- extras        # development assets
    |-- resources
        |-- images    # images that are rendered in the game
    |-- server.js     # running the release version locally
    |-- manifest.json # game closure manifest file
    |-- build
        |-- debug
        |-- release
            |-- browser-desktop # the release version

### Creating a station
You can use the skeleton below to get started on creating a new new station for
the game. Put this in `./src/[StationName]Screen.js`.

```javascript
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;

exports = Class(ui.View, function (supr) {
  this.helpText = "Text that shows up when you click 'help' in the status bar"
  this.endText = "Text that shows up when you complete the station"

  // Use these to show in info notifications with
  // 'GC.app.showNotification(this.infoText.info, "info")'.
  this.infoText = {
    info: "Periodic notifications"
  }

  // Set this to true when you have completed the station.
  this.completed = false;

  this.init = function () {
    supr(this, 'init');

    // Create all views for the station.
  };

  // Any additional station game logic.
});
```

Then add this screen to the game by adding it to the `screens` map.

```javascript
this.screens = {
  title: new TitleScreen(),
  game: new GameScreen(),
  info: new InfoScreen(),
  gameEnd: new GameEndScreen(),

  serving: new ServingScreen(),
  handwashing: new HandwashingScreen(),
  cooking: new CookingScreen(),
  // Add your screen here.
};
```

After that you can add a button to the main kitchen (`GameScreen.js`) to go to
your screen by calling `GC.app.goToScreen('[screen]')`.

### Notifications
You can make notifications show up in response to various events by calling
`GC.app.showNotification("[text]", '[type]')`. 

There are two notification types:

- `error` Shows up in red and subtracts 5 points from your score.
- `info`  Shows up in blue.

Release
-------
To build the game for release, run `basil release browser-desktop`. This outputs
compiled html and javascript files to `./build/release/browser-desktop/`. To
test the release build locally, first install the `connect` node.js library
(`npm install connect`). Then run `node server.js` from the project
directory and point your browser to [localhost:8080](http://localhost:8080).

### Important
At the time of this writing game closure dose not include the `charset` tag in
the generated index.html file, making Unicode characters show up incorrectly. To
fix this, open `./build/release/browser-desktop/index.html` and add 
`<meta charset="utf-8"/>` to the head section of the document.
