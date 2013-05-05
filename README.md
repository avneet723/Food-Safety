Food-Safety
===========

Food safety game for VT Dining Services

Requirements
------------
node.js
game closure

### Development
basil serve

### Relese
To build the game for release, run:
    basil release browser-desktop

To test the release build locally, run:
    node server.js
Note - you need to have node.js installed and the connect library (npm install
connect)

For some reason game closure dose not include the charset in the generated
index.html file, making Unicode characters show up incorrectly. To fix, open
build/release/browser-desktop/index.html and add
    `<meta charset="html"/>`
to the head section of the document.
