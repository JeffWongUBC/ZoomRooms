var buttonManager = require("buttons");
const net = require("net")
const port = 2203;

//Create the socket server.
const server = net.createServer(function(client) {
  console.log("Client connected");
  
  buttonManager.on("buttonSingleOrDoubleClickOrHold", function(obj) {
    var button = buttonManager.getButton(obj.bdaddr);
    var clickType = obj.isSingleClick ? "click" : obj.isDoubleClick ? "double_click" : "hold";
    var message = "TOGGLE";

    //Send data to the connected client
    client.write(message);
  });
});

server.listen(port, function() {
  console.log("Server listening on port " + port);
});