/**
 * Custom debug shortcuts.
 * Replace console.log() by log(), etc...
 */
(function (context) {
  // Define vars.
  var shortcuts = {
      log: 'log',
      error: 'err',
      debug: 'deb',
      warn: 'warn',
      info: 'info'
    }, i = 0, key, items = Object.keys(shortcuts),
    console = context.console;
  // Loop through shortcuts.
  while (key = items[i++]) {
    // Save shortcut functions.
    context[shortcuts[key]] = (function (key) {
      // Build a new custom function.
      return function (msg) {
        return console[key](msg);
      };
    })(key);
  }
}(this));
