
test("Test - Single Expression", function() {


    var text = "La data límit és ara";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 8, 9, 10, 11));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 17, 'Wrong index')
        ok(result.text == 'ara', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 8, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 9, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
        ok(result.start.get('second') == 10, 'Test Result - (Second) ' + JSON.stringify(result.start) )
        ok(result.start.get('millisecond') == 11, 'Test Result - (Millisecond) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 8, 9, 10, 11);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data límit és avui";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 17, 'Wrong index')
        ok(result.text == 'avui', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data límit és Demà";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 17, 'Wrong index')
        ok(result.text == 'Demà', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 11, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 11, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    // Say.."Tomorrow" in the late night (1 AM)
    var text = "La data límit és Demà";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 1));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data límit va ser ahir";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 21, 'Wrong index')
        ok(result.text == 'ahir', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 9, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data límit era ahir a la nit ";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 18, 'Wrong index')
        ok(result.text == 'ahir a la nit', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 0, 'Test Result - (Hour) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 9, 0);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data límit era aquest matí ";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 18, 'Wrong index')
        ok(result.text == 'aquest matí', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 6, 'Test Result - (Hour) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 6);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data límit fou aquesta tarda ";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 18, 'Wrong index')
        ok(result.text == 'aquesta tarda', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 18, 'Test Result - (Hour) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 18);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});


test("Test - Combined Expression", function() {


    var text = "La data límit és avui 5PM";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 17, 'Wrong index')
        ok(result.text == 'avui 5PM', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 17, 'Test Result - (Hour) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 17);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});


test('Test - Random text', function() {

    var text = "aquesta nit";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result, text)
    if(result) {
        ok(result.text == text, result.text)
        ok(result.start.get('year') == 2012, JSON.stringify(result.start))
        ok(result.start.get('month') == 1, JSON.stringify(result.start))
        ok(result.start.get('day') == 1, JSON.stringify(result.start))
        ok(result.start.get('hour') == 22, JSON.stringify(result.start))
        ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start))
    }

    var text = "aquesta nit 8pm";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result, text)
    if(result) {
        ok(result.text == text, result.text)
        ok(result.start.get('hour')  == 20, JSON.stringify(result.start))
        ok(result.start.get('year')  == 2012, JSON.stringify(result.start))
        ok(result.start.get('month') == 1, JSON.stringify(result.start))
        ok(result.start.get('day')   == 1, JSON.stringify(result.start))
        ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start))
    }


    var text = "aquesta nit a les 8";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result, text)
    if(result) {
        ok(result.text == text, result.text)
        ok(result.start.get('hour')  == 20, JSON.stringify(result.start))
        ok(result.start.get('year')  == 2012, JSON.stringify(result.start))
        ok(result.start.get('month') == 1, JSON.stringify(result.start))
        ok(result.start.get('day')   == 1, JSON.stringify(result.start))
        ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start))
    }


    var text = "dijous";
    var result = chrono.parse(text)[0];
    ok(result, text)
    if(result) {
        ok(result.text == text, result.text)
        ok(result.start.get('weekday') == 4, result.text)
    }


    var text = "divendres";
    var result = chrono.parse(text)[0];
    ok(result, text)
    if(result) {
        ok(result.text == text, result.text)
        ok(result.start.get('weekday') == 5, result.text)
    }
})


test('Test - Random negative text', function() {

    var text = "noavui";
    var results = chrono.parse(text);
    ok(results.length == 0, JSON.stringify(results) )


    var text = "hydemà";
    var results = chrono.parse(text);
    ok(results.length == 0, JSON.stringify(results) )

    var text = "xahir";
    var results = chrono.parse(text);
    ok(results.length == 0, JSON.stringify(results) )

    var text = "perara";
    var results = chrono.parse(text);
    ok(results.length == 0, JSON.stringify(results) )

    var text = "araxsd";
    var results = chrono.parse(text);
    ok(results.length == 0, JSON.stringify(results) )

})
