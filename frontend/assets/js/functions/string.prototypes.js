String.prototype.replaces = function (search, replacement) {
    var target = this;
    replacement = Strings.ClearTypes(replacement);
    return target.replace(new RegExp(search, 'i'), replacement);
};
String.prototype.format = function () {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        str = str.replace(reg, arguments[i]);
    }
    return str;
};


String.prototype.endsWith = function (suffix) {
    return (this.substr(this.length - suffix.length) === suffix);
};
String.prototype.startsWith = function (prefix) {
    return (this.substr(0, prefix.length) === prefix);
};

String.prototype.contains = function (str, ignoreCase) {
    return (ignoreCase ? this.toUpperCase() : this)
        .indexOf(ignoreCase ? str.toUpperCase() : str) >= 0;
};

String.prototype.replacevars = function () {
    var result = this;
    var matches = result.match(/{[^}]+}/g);
    for (var match in matches) {
        var item = matches[match];
        var extractVar = eval(item.replace(/{/g, "").replace(/}/g, ""));
        result = result.replaces(item, extractVar);
    }
    console.log(result);
    return result;
};