var cm = require('sdk/context-menu');
var elf = require('sdk/self');
var tabs = require('sdk/tabs');


var allItem = cm.Item({
  label: 'in any field',
  data: 'https://www.idigbio.org/portal/search?rq={%22data%22:{%22type%22:%22fulltext%22,%22value%22:%22'
});
var collectorItem = cm.Item({
  label: 'in Collector',
  data: 'https://www.idigbio.org/portal/search?rq={%22collector%22:%22'
});
var localityItem = cm.Item({
  label: 'in Locality',
  data: 'https://www.idigbio.org/portal/search?rq={%22locality%22:%22'
});
var genusItem = cm.Item({
  label: 'Genus',
  data: 'https://www.idigbio.org/portal/search?rq={%22genus%22:%22'
});
var commonItem = cm.Item({
  label: 'Common Name',
  data: 'https://www.idigbio.org/portal/search?rq={%22commonname%22:%22'
});
var scientificnameItem = cm.Item({
  label: 'Scientific Name',
  data: 'https://www.idigbio.org/portal/search?rq={%22scientificname%22:%22'
});
var moreMenu = cm.Menu({
  label: 'in occurrence name fields:',
  items: [commonItem, scientificnameItem, genusItem]
});
var searchMenu = cm.Menu({
  label: 'Search iDigBio for',
  context: cm.SelectionContext(),
  contentScriptFile: elf.data.url('content-script.js'),
  items: [moreMenu, collectorItem, localityItem, allItem],
  image: elf.data.url('iDigBio_Favicon-16.png'),
    onMessage: function(data) {
        tabs.open(data);
    }
});




