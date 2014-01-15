module.exports = function (cb) {
    return function (elem, startKey) {
        var endKey = startKey.replace(/-start$/, 'end');
        var dataKey = startKey.replace(/-start$/, 'data');
        
        cb({
            start: elem.getAttribute(startKey),
            end: elem.getAttribute(endKey),
            element: elem,
            query: function (key) {
                return elem.querySelector('*[' + dataKey + '="' + key + '"]');
            }
        });
    };
};
