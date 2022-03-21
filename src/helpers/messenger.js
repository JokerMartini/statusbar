const { app } = require("electron");
const path = require("path");

// just doing random stuff with electron module to demonstrate this file can't be imported
export function showMessage(msg) {
  // into the Renderer
  const dir = path.join(app.getPath("documents"), "presets");
  console.log(dir);
  // this should send a message back to the renderer
  // TODO: send message...
}

export function doWork() {
  console.log("Doing working...");

  // step 1: long process
  showMessage("Processing step 1...");

  // step 2: long process
  showMessage("Processing step 2...");

  // step 3: long process
  showMessage("Processing step 3...");
}
