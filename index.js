module.exports = function (cb) {
    return function (elem, start, end) {
        if (!end) {
            var props = elem.properties || [];
            for (var i = 0; i < props.length; i++) {
                if (props[i].value === start) {
                    var startKey = props[i].name;
                    var endKey = startKey.replace(/(^|-)start$/, 'end');
                    elem.getAttribute(endKey);
                }
            }
        }
        
        cb({
            start: start,
            end: end,
            range: { start: start, end: end },
            element: elem
        });
    };
};
