/**
 * @author me
 */

var _ = require( 'underscore' );

var obj = {
    '123': true,
    '121': true
};

var arr = _.map( obj, function( obj, key ) {
    return key;
});

console.log( arr );