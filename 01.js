// FizzBuzz

// サンプル: "1" という文字列を出力
//console.log("1");

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
for ( let i = 0; i < 16; i++ ){
	if ( i % 3 === 0 && i % 5 == 0 ){
		console.log("FizzBuzz");
	}else if ( i % 3 === 0 ){
		console.log("Fizz");
        }else if ( i % 5 === 0 ){
		console.log("Buzz");
        } else {
		console.log(i);
}}
