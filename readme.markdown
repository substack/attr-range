# attr-range

find ranges for wiring up live automatically updating collections

# example

``` js
var arange = require('attr-range');
var rangef = arange(function (range) {
    // ...
});

var elems = document.querySelectorAll('*[data-start]');
for (var i = 0; i < elems.length; i++) {
    rangef(elems[i], 'data-start');
}
```

# methods

``` js
var arange = require('attr-range');
```

## var rangef = arange(function (range) {})

Register a callback to fire when range elements have been gathered.

range objects have:

* `range.start` - start key in the collection range
* `range.end` - end key in the collection range
* `range.element` - container element for all the items in the range
* `range.query(key)` - query for a data-key element by its key

## rangef(elem, attrName)

Call the `rangef()` function on each element `elem` and data attribute name
`attrName` you want to construct range objects for.

Data items in the range should have the same name as `attrName` except that the
trailing `-start` should be `-data`.

# install

With [npm](https://npmjs.org) do:

```
npm install attr-range
```

# license

MIT
