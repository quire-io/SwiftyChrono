
test("Test - Single Expression", function() {
		 
		 var text = "五天内我们要做完功课";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '五天内', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 15, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 8-1, 15, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 
		 var text = "5天之内我们要做完功课";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '5天之内', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 15, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 8-1, 15, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "十天内我们要做完功课";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '十天内', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 20, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 8-1, 20, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "五分钟后";
		 var results = chrono.parse(text, new Date(2012,7,10,12,14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '五分钟后', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012,7,10,12,19);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 var text = "一个钟之内";
		 var results = chrono.parse(text, new Date(2012,7,10,12,14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '一个钟之内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012,7,10,13,14);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 var text = "5分钟之后我就松手";
		 var results = chrono.parse(text, new Date(2012,7,10,12,14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '5分钟之后', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012,7,10,12,19);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 var text = "系5秒之后你就会松手";
		 var results = chrono.parse(text, new Date(2012,7, 10, 12, 14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '5秒之后', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 12, 14, 5);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "半小时之内";
		 var results = chrono.parse(text, new Date(2012,7,10,12,14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '半小时之内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012,7,10,12,44);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "两个礼拜内回复我";
		 var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '两个礼拜内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 24, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "1个月之内回复我";
		 var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '1个月之内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 8, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "几个月之内回复我";
		 var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '几个月之内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 10, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "一年内回复我";
		 var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '一年内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2013, 7, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "1年之内回复我";
		 var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index');
		 ok(result.text == '1年之内', result.text );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2013, 7, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 });
