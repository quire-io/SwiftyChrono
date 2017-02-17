
test("Test - Single Expression", function() {


    var text = '13 bis 15 Uhr';
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index')
        ok(result.text == '13 bis 15 Uhr', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('hour') == 13, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
        ok(result.start.get('meridiem') == 1, 'Test Result - (Meridiem) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 13, 00);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    
        ok(result.end, JSON.stringify(result.start) )
        ok(result.end.get('hour') == 15, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.end.get('minute') == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
        ok(result.end.get('meridiem') == 1, 'Test Result - (Meridiem) ' + JSON.stringify(result.start) )

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 7, 10, 15, 00);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});

test("Test - Random date + time expression", function() {

    var text = "am Mittag";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)
    ok(result.start.get('hour') == 12, JSON.stringify(result.start))
    ok(result.start.get('hour') == 12, JSON.stringify(result.start))

    var text = "mitternacht";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)
})
