var arange = require('../');
var rangef = arange(function (range) {
    // ...
});

var elems = document.querySelectorAll('*[data-start]');
for (var i = 0; i < elems.length; i++) {
    rangef(elems[i]);
}
