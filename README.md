# semver-split
A small and fast utility to split semver string in major minor patch version object


```JavaScript
const split = require('semver-split');
var semver = split("1.2.5"); // { major: 1, minor: 2, patch: 5}
var semver = split("1.2.x"); // { major: 1, minor: 2, patch: 'x'}
var semver = split("1.x"); // { major: 1, minor: 'x'}
var semver = split("*"); // { major: '*'}
```