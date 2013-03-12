/*globals define window orion console alert PopupDialog*/
define(['orion/plugin'],

function(PluginProvider) {
    var headers = {
        name: "Java autocomplete",
        version: "0.0.1",
        description: "This plugin provides less than basic autocomplete for java."
    };
    var provider = new PluginProvider(headers);

    provider.registerService("orion.core.contenttype", {}, {
        contentTypes:
        // Text types
        [{
            id: "text/x-java-source",
            name: "java",
            extension: ["java"]
        }]
    });
    provider.registerServiceProvider("orion.edit.contentAssist", {
        computeProposals: function(buffer, offset, context) {
        	var keywords = ["assert", "break",
                "case", "catch", "continue", "default", "delete", "do", "else",
                "finally", "for", "function", "if", "int", "interface", "instanceof", "main", "new", "return", "switch",
                "this", "throw", "try", "void", "while", "with"];
            var proposals = [];
            var use = keywords;
            /*
            if (context.prefix === 'void') {
                use = ["main(String[] args) {", "set"];
            }
            */
            for (var i = 0; i < use.length; i++) {
                var keyword = use[i];
                if (keyword.indexOf(context.prefix) === 0) {
                    proposals.push({
                        proposal: keyword.substring(context.prefix.length),
                        description: keyword
                    });
                }
            }
            return proposals;
        }
    }, {
        name: "Java content assist",
        contentType: ["text/x-java-source"]
    });
    provider.connect();
});