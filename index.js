module.exports = function (cb) {
    return function (elem, startKey) {
        var endKey = startKey.replace(/-start$/, 'end');
        var dataKey = startKey.replace(/-start$/, 'data');
        
        var range = {
            start: elem.getAttribute(startKey),
            end: elem.getAttribute(endKey),
        };
        cb({
            start: range.start,
            end: range.end,
            range: range,
            element: elem,
            query: function (key) {
                return elem.querySelector('*[' + dataKey + '="' + key + '"]');
            }
        });
    };
};
