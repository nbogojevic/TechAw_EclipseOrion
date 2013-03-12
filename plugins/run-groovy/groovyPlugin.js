/*globals define window orion console alert PopupDialog*/
define(['orion/plugin', 'orion/xhr', 'orion/Deferred' ],
	function(PluginProvider, xhr, Deferred) {
		var headers = {name: "Run groovy", version: "0.0.1", description: "This plugin runs groovy script and displays result."};
		var provider = new PluginProvider(headers);

      provider.registerService("orion.core.contenttype", {}, {
		contentTypes:
			// Text types
			[{	id: "text/x-groovy",
				name: "groovy",
				extension: ["groovy"]
			}]
			});
      var serviceImpl = {
              run: function(text) {
                 var xhrReply = xhr('POST', 'http://localhost:3004/run/groovy', {data:text});
                 xhrReply.then(function(x) { alert(x.responseText); }, function(x) { console.error(x); }, function(x) { console.info(x); });
                 return text;
              }
          };
      var serviceProperties = { 
              name: "Run groovy", 
			  contentType: ["text/x-groovy"],
              key: ["e", true, true] // Ctrl+Shift+r
          };
      provider.registerService("orion.edit.command", serviceImpl, serviceProperties);
      provider.connect();
  });