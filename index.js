const commonFunc = {
    tiny: function(string) {
        if (typeof string !== 'string') {
            throw new TypeError("tiny wants a string");
        }
        return string.replace(/\s/g, "");
    },

    array: {
        remove: function(arr, index) {
            if (index < 0 || index > arr.length) {
                throw new TypeError("index must between 0 and index");
            } 
            return Array.prototype.filter.call(arr, function(item) {
                return item !== arr[index];
            });
        }
    }
};

module.exports = commonFunc;