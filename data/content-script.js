self.on('context', function() {
        var text = window.getSelection().toString();
        if (text.length > 20)
          text = text.substr(0, 20) + '...';
          return "Search iDigBio for \'" + text + "\'";
        });
self.on('click', function(node, data) {
        var text = window.getSelection().toString();
        var searchURL = data + text;
        var endTxt = '%22}';
        if (data.length > 66)
         endTxt = '%22}}';
         self.postMessage(searchURL + endTxt);
        });
