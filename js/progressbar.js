self.addEventListener('message', function(bar_element) {
  var data = bar_element.data;

  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER STARTED: ');
      console.log("thread start");
      break;
    case 'stop':
      self.postMessage('WORKER STOPPED. (buttons will no longer work)');
      self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage('Unknown command: ');
  };
}, false);

function progressbar_increment(num) {
  
}
