/**
 * Created by Alex Bol on 3/28/2017.
 */

'use strict';

module.exports = {
    equal_to: function(item1, item2) {
        return (item1.value && item2.value) ? item1.key == item2.key && item1.value  == item2.value :
            item1.key == item2.key;
    },
    less_than: function(item1, item2) {
        return item1.key < item2.key;
    },
    copy_data: function(item_dst, item_src) {
        item_dst.key = item_src.key;
        if (item_dst.value && item_src.value) {
            item_dst.value = item_src.value;
        }
    }
};