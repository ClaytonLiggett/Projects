function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
//Test Function
//console.log(disemvowel("This is a hard challenge to complete"));

const troll = prompt("Do your worst Troll!");

alert(disemvowel(troll) + ` HAHAHA You've been disemvoweled!🤣`);
