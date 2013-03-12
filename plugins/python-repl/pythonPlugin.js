/*globals define window orion console*/
define(['orion/plugin', 'orion/xhr', 'orion/Deferred' ],
	function(PluginProvider, xhr, Deferred) {
  
	 var serviceImpl = {
	   callback: function(args) {
			var deferred = new Deferred();
			xhr('POST', 'http://localhost:3002/cmd/python', 
			{
				headers: {
					"Content-type": "application/x-www-form-urlencoded"
				},
				data: "cmd=" + encodeURIComponent(args.command)
			}).then(
				function(x) { deferred.resolve(x.responseText); }, 
				function(x) { deferred.resolve(x.responseText); }, 
				function(x) { deferred.progress(x.responseText); });
			return deferred;
	   }
	 };
	 var serviceProperties = { 
	   name: "python",
	   description: "run python command",
	   parameters: [{
	     name: "command",
	     type: "string",
	     description: "The python statement"
	   }]
	 };
	 var provider = new PluginProvider({name:'Python REPL', description:'Run-execute-print loop for python'});
	 provider.registerServiceProvider(
	   "orion.shell.command",
	   serviceImpl,
	   serviceProperties);
	 provider.connect();

  });

 