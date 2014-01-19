module.exports = function (kstart, kend, cb) {
    if (typeof start === 'object') {
        cb = kend;
        kend = kstart.end;
        kstart = kstart.start;
    }
    if (typeof kstart === 'function') {
        cb = kstart;
        kstart = undefined;
        kend = undefined;
    }
    if (typeof kend === 'function') {
        cb = kend;
        kend = undefined;
    }
    if (!kstart) kstart = 'data-start';
    if (!kend) kend = 'data-end';
    
    return function (elem) {
        var start = elem.getAttribute(kstart);
        var end = elem.getAttribute(kend);
        
        cb({
            start: start, end: end,
            range: { start: start, end: end },
            element: elem
        });
    };
};
