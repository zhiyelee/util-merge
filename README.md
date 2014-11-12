util-merge
==============

 [![Build Status](https://api.travis-ci.org/zhiyelee/util-merge.svg)](http://travis-ci.org/zhiyelee/util-merge)
[![NPM Version](http://img.shields.io/npm/v/util-merge.svg?style=flat)](https://www.npmjs.org/package/util-merge)
[![NPM Downloads](https://img.shields.io/npm/dm/util-merge.svg?style=flat)](https://www.npmjs.org/package/util-merge)

Simple `merge` function.

Return a new object containing all of the properties of all the supplied objects. The properties from later objects will overwrite those in earlier objects.

##Installation

    npm install util-merge

## Usage

```javascript
var merge = require('util-merge');
var obj1 = { name: 'zhiye' },
    obj2 = { blog: 'http://zhy.li' },
    obj3 = { email: 'github@zhiye.li', blog: 'http://zhiye.li' };

console.log(merge(obj1, obj2, obj3));
// => { name: 'zhiye', blog: 'http://zhiye.li', email: 'github@zhiye.li' }
```
