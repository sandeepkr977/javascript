var Ob = Rx.Observable;


// array
var names = new Array("radhika", "sonali", "monali", "mitali", "sheetal");

// creating observable
$arr = Ob.from(names);


$interval = Ob.interval(2000);


// $interval.mergeMap(function(res) {
//     return $arr.map(function(n) {
//         return n;
//     });
// }).subscribe(function(n) {
//     console.log(n)
// })