
test("Test - Single Expression", function() {

    var text = "fa 5 dies, vem fer quelcom";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 5, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'fa 5 dies', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 5, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = "fa 10 dies, vem fer quelcom";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 31, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'fa 10 dies', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7-1, 31, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "fa 15 minuts";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'fa 15 minuts', result.text )
        ok(result.start.get('hour') == 11, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 59, 'Test Result - (Minute) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,11,59);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = "   fa 12 hores";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 3, 'Wrong index')
        ok(result.text == 'fa 12 hores', result.text )
        ok(result.start.get('hour') == 0, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 14, 'Test Result - (Minute) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,0,14);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});


test("Test - Single Expression (Casual)", function() {

    var text = "fa 5 mesos, vem fer quelcom";
    var results = chrono.parse(text, new Date(2012, 8-1,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 3, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'fa 5 mesos', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 3-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = "fa 5 anys, vem fer quelcom";
    var results = chrono.parse(text, new Date(2012, 8-1,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2007, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'fa 5 anys', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2007, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "fa una setmana, vem fer quelcom";
    var results = chrono.parse(text, new Date(2012, 8-1, 3));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 27, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'fa una setmana', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7-1, 27, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});
