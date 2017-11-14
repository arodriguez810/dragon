Path = {
    Combine: function (path1, path2) {
        var url1 = path1.split('/');
        var url2 = path2.split('/');
        var url3 = [];
        for (var i = 0, l = url1.length; i < l; i++) {
            if (url1[i] == '..') {
                url3.pop();
            } else if (url1[i] == '.') {
                continue;
            } else {
                url3.push(url1[i]);
            }
        }
        for (var i = 0, l = url2.length; i < l; i++) {
            if (url2[i] == '..') {
                url3.pop();
            } else if (url2[i] == '.') {
                continue;
            } else {
                url3.push(url2[i]);
            }
        }
        return url3.join('/');
    }
};

Strings = {
    ClearTypes: function (text) {
        return text ? text : '';
    }
};