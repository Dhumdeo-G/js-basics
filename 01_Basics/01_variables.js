const accountId = 12345;
let accountEmail = 'akshay@gmail.com';
var accountState = 'Maharashtra';
accountphone = '909099';
let accountCity;
// accountId = 1234556;  // redeclaration and reinitialization is not allowed here
accountEmail = 'aksha@gmail.com';
accountState = 'MAH';
accountphone = '8908998';
/* prefer not to use var , instead use let*/
console.table([accountEmail,accountCity,accountId,accountState,accountphone]);

console.log(accountId);
