var merge = require('../');
var should = require('chai').should();

describe('util-merge', function(){
    it('returned object has all the properties of the supplied objects', function() {
        var obj = merge(
            { name: 'zhiye', blog: 'http://zhiye.li' },
            { twitter: 'https://twitter.com/zhiyelee' }
        );

        obj.should.eql({
            name: 'zhiye'
            , blog: 'http://zhiye.li'
            , twitter: 'https://twitter.com/zhiyelee'
        });
    });
    it('properties of the later objects will overhide those in the earlier objects', function() {
        var obj = merge(
            { blog: 'http://zhiye.li', location: 'China' },
            { blog: 'http://zhy.li' },
            { location: 'Beijing' }
        );

        obj['blog'].should.equal('http://zhy.li' );
        obj['location'].should.equal('Beijing');
    });
});
