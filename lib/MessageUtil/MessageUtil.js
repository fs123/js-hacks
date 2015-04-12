/**
 * Created by fs on 11.04.15.
 */
module.exports.print = function(message) {
    if (!message) {
        message = "no message";
    }

    return '...*' + message + '*...';
};