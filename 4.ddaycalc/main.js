var now = new Date();
var start = new Date('2020-06-30');
const Valentine = new Date('2023-03-15');

var timeDiff = now.getTime() - start.getTime() +1;
var day = Math.floor(timeDiff/(1000 * 60 * 60 * 24));
$('#love').text(day);

var timeDiff = Valentine.getTime() - now.getTime() +1;
var day2 = Math.floor(timeDiff/(1000 * 60 * 60 * 24));
$('#valentine').text(`${day2}일 남음`);

var ms = start.getTime() + 999*(1000 * 60 * 60 * 24);
var thousand = new Date(ms);
$('#thousand-date').text((`${thousand.getFullYear()}.${thousand.getMonth()+1}.${thousand.getDate()}`));

var thousandDiff = thousand.getTime() - now.getTime();
var day3 = Math.floor(thousandDiff/(1000 * 60 * 60 * 24));
$('#thousand').text(`${day3}일 남음`);