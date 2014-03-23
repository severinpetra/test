/**
 * @author me
 */

var _ = require( 'underscore' );

var obj = {
    '123': true,
    '121': true
};

var arr = _.map( obj, function( obj ) {
    return obj;
});

console.log( arr );