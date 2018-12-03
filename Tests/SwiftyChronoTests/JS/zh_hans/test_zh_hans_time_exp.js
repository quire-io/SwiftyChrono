
test("Test - Single Expression", function() {
		 
		 
		 var text = "鸡上午6点13分全部都系鸡";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) )
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index')
		 ok(result.text == '上午6点13分', result.text )
		 
		 ok(result.start, JSON.stringify(result.start) )
		 ok(result.start.get('hour') == 6, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 ok(result.start.get('minute') == 13, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 6, 13);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 
		 });

test("Test - Range Expression", function() {
		 
		 var text = "鸡由今朝八点十分至下午11点32分全部都系鸡";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) )
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index')
		 ok(result.text == '由今朝八点十分至下午11点32分', result.text )
		 
		 ok(result.start, JSON.stringify(result.start) )
		 ok(result.start.get('hour') == 8, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 ok(result.start.get('minute') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 
		 ok(result.start.isCertain('day'))
		 ok(result.start.isCertain('month'))
		 ok(result.start.isCertain('year'))
		 ok(result.start.isCertain('hour'))
		 ok(result.start.isCertain('minute'))
		 ok(!result.start.isCertain('second'))
		 ok(!result.start.isCertain('millisecond'))
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 8, 10);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 
		 ok(result.end, JSON.stringify(result.start) )
		 ok(result.end.get('hour') == 23, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 ok(result.end.get('minute') == 32, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 
		 ok(!result.end.isCertain('day'))
		 ok(!result.end.isCertain('month'))
		 ok(!result.end.isCertain('year'))
		 ok(result.end.isCertain('hour'))
		 ok(result.end.isCertain('minute'))
		 ok(!result.end.isCertain('second'))
		 ok(!result.end.isCertain('millisecond'))
		 
		 var resultDate = result.end.date();
		 var expectDate = new Date(2012, 7, 10, 23, 32);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 var text = "6点30pm-11点pm";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) )
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 0, 'Wrong index')
		 ok(result.text == '6点30pm-11点pm', result.text )
		 
		 ok(result.start, JSON.stringify(result.start) )
		 ok(result.start.get('hour') == 18, 'Test Result - (Day) ' + JSON.stringify(result.start))
		 ok(result.start.get('minute') == 30, 'Test Result - (Day) ' + JSON.stringify(result.start))
		 ok(result.start.get('meridiem') == 1, 'Test Result - (Day) ' + JSON.stringify(result.start))
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 18, 30);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 
		 ok(result.end, JSON.stringify(result.start) )
		 ok(result.end.get('hour') == 23, 'Test Result - (Day) ' + JSON.stringify(result.end) )
		 ok(result.end.get('minute') == 0, 'Test Result - (Day) ' + JSON.stringify(result.end) )
		 ok(result.end.get('meridiem') == 1, 'Test Result - (Day) ' + JSON.stringify(result.end) )
		 
		 var resultDate = result.end.date();
		 var expectDate = new Date(2012, 7, 10, 23, 0);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 });

test("Test - Date + Time Expression", function() {
		 
		 var text = "鸡二零一八年十一月廿六日下午三时半五十九秒全部都系鸡";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) )
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index')
		 ok(result.text == '二零一八年十一月廿六日下午三时半五十九秒', result.text )
		 
		 ok(result.start.get('year') == 2018, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		 ok(result.start.get('month') == 11, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		 ok(result.start.get('day') == 26, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 ok(result.start.get('hour') == 15, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		 ok(result.start.get('minute') == 30, 'Test Result - (minute) ' + JSON.stringify(result.start) )
		 ok(result.start.get('second') == 59, 'Test Result - (second) ' + JSON.stringify(result.start) )
		 ok(result.start.get('millisecond') == 0, 'Test Result - (millisecond) ' + JSON.stringify(result.start) )
		 ok(!result.start.isCertain('millisecond'))
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2018, 11-1, 26, 15, 30, 59);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.start.date ' + resultDate +'/' +expectDate)
		 }
		 
		 })


test("Test - Time Expression's Meridiem imply", function() {
		 
		 var text = "1点pm到3点";
		 var results = chrono.parse(text, new Date(2012,7,10));
		 ok(results.length == 1, JSON.stringify( results ) )
		 
		 var result = results[0];
		 if (result) {
		 ok(result.index == 0, 'Wrong index')
		 ok(result.text == '1点pm到3点', result.text )
		 
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		 ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		 ok(result.start.get('hour') == 13, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		 ok(result.start.get('minute') == 0, 'Test Result - (minute) ' + JSON.stringify(result.start) )
		 ok(result.start.get('second') == 0, 'Test Result - (second) ' + JSON.stringify(result.start) )
		 ok(result.start.get('millisecond') == 0, 'Test Result - (millisecond) ' + JSON.stringify(result.start) )
		 ok(result.start.get('meridiem') == 1, 'Test Result - (meridiem) ' + JSON.stringify(result.start) )
		 ok(result.start.isCertain('meridiem'), JSON.stringify(result))
		 
		 ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.end) )
		 ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.end) )
		 ok(result.end.get('day') == 11, 'Test Result - (Day) ' + JSON.stringify(result.end) )
		 ok(result.end.get('hour') == 3, 'Test Result - (Hour) ' + JSON.stringify(result.end) )
		 ok(result.end.get('minute') == 0, 'Test Result - (minute) ' + JSON.stringify(result.end) )
		 ok(result.end.get('second') == 0, 'Test Result - (second) ' + JSON.stringify(result.end) )
		 ok(result.end.get('millisecond') == 0, 'Test Result - (millisecond) ' + JSON.stringify(result.end) )
		 ok(!result.end.isCertain('meridiem'), JSON.stringify(result))
		 }
		 })


test("Test - Random date + time expression", function() {
		 
		 var text = "2014年, 3月5日凌晨 6 点至 7 点";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 var text = "下星期六凌晨1点30分廿九秒";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 var text = "昨天早上六点正";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 
		 var text = "六月四日3:00am";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 var text = "上个礼拜五16时";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 var text = "3月17日 20点15";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 var text = "10点";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 
		 var text = "中午12点";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text)
		 ok(result.start.get('hour') == 12, JSON.stringify(result.start))
		 ok(result.start.get('hour') == 12, JSON.stringify(result.start))
		 })
