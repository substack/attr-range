module.exports = function (cb) {
    return function (elem, startKey) {
        var endKey = attr.replace(/-start$/, 'end');
        var dataKey = attr.replace(/-start$/, 'data');
        
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
