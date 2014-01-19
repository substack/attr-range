# attr-range

find ranges for wiring up live automatically updating collections

# example

``` js
var arange = require('attr-range');
var rangef = arange(function (range) {
    console.log(range);
});

var elems = document.querySelectorAll('*[data-start]');
for (var i = 0; i < elems.length; i++) {
    rangef(elems[i]);
}
```

# methods

``` js
var arange = require('attr-range');
```

## var rangef = arange(start='data-start', end='data-end', function (range) {})

Register a callback to fire when range elements have been gathered.

range objects have:

* `range.start` - start key in the collection range
* `range.end` - end key in the collection range
* `range.range` - object with only `start` and `end` keys; useful for handing to
`db.createReadStream()`
* `range.element` - container element for all the items in the range

## rangef(elem)

Call the `rangef()` function on each element `elem` that has the start and end
keys to populate the callback with.

# install

With [npm](https://npmjs.org) do:

```
npm install attr-range
```

# license

MIT
