function getDependencies(tree, list, curDependency ) {
    list = (!list) ? [] : list;
    if (!tree ) {
        return list;
    }
    var string = curDependency + "@" + tree.version;
    if (!Object.hasOwnProperty.call(tree,"dependencies")) {
        if (curDependency)
            list.push(string);
        return list;
    }

    var dependencyProperties = Object.getOwnPropertyNames(tree.dependencies);

    if (dependencyProperties.length > 0) {
        dependencyProperties.forEach(function(dependencyProperty) {
            getDependencies(tree.dependencies[dependencyProperty], list, dependencyProperty);
            if (curDependency)
                list.push(string);
        });
    }
    if (!curDependency) {
        return list.sort().filter((item, idx, arr) => arr.indexOf(item) === idx);
    }
}
module.exports = getDependencies;