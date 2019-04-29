
test("Test - Single expression", function() {


    var text = "10 d'Agost de 2012";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if (result) {
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 d\'Agost de 2012', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

//    var text = "10 Agost 234 AC";
//    var results = chrono.parse(text, new Date(2012,7,10));
//    ok(results.length == 1, JSON.stringify( results ) )
//
//    var result = results[0];
//    if (result) {
//        ok(result.index == 0, 'Wrong index')
//        ok(result.text == '10 Agost 234 AC', result.text )
//
//        ok(result.start, JSON.stringify(result.start) )
//        ok(result.start.get('year') == -234, 'Test Result - (Year) ' + JSON.stringify(result.start) )
//        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
//        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
//
//        var resultDate = result.start.date();
//        var expectDate = new Date(-234, 8-1, 10, 12);
//        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
//    }
//
//
//    var text = "10 Agost 88 d. C.";
//    var results = chrono.parse(text, new Date(2012,7,10));
//    ok(results.length == 1, JSON.stringify( results ) )
//
//    var result = results[0];
//    if (result) {
//        ok(result.index == 0, 'Wrong index')
//        ok(result.text == '10 Agost 88 d. C.', result.text )
//
//        ok(result.start, JSON.stringify(result.start) )
//        ok(result.start.get('year') == 88, 'Test Result - (Year) ' + JSON.stringify(result.start) )
//        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
//        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
//
//        var resultDate = result.start.date();
//        var expectDate = new Date(88, 8-1, 10, 12);
//        expectDate.setFullYear(88);
//        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
//    }


    var text = 'Dg 15Set';
    var results = chrono.parse(text, new Date(2013,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'Dg 15Set', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 9, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 15, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2013, 9-1, 15, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = 'DG 15SET';
    var results = chrono.parse(text, new Date(2013,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'DG 15SET', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 9, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 15, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2013, 9-1, 15, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = "La data final és el 10 d'Agost";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if (result) {

        ok(result.index == 20, 'Wrong index')
        ok(result.text == '10 d\'Agost', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data final és el Dimarts, 10 Gener";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if (result) {

        ok(result.index == 20, 'Wrong index')
        ok(result.text == 'Dimarts, 10 Gener', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 1, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('weekday') == 2, 'Test Result - (Weekday) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2013, 1-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "La data final és el Dt, 10 Gener";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if (result) {

        ok(result.index == 20, 'Wrong index')
        ok(result.text == 'Dt, 10 Gener', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 1, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('weekday') == 2, 'Test Result - (Weekday) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2013, 1-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

});


test("Test - Range expression", function() {


    var text = "10 - 22 Agost 2012";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 - 22 Agost 2012', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)


        ok(result.end, JSON.stringify(result.end) )
        if(result.end) {
            ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
            ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
            ok(result.end.get('day') == 22, 'Test Result - (Day) ' + JSON.stringify(result.start) )

            var resultDate = result.end.date();
            var expectDate = new Date(2012, 8-1, 22, 12);
            ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
        }
    }


    var text = "10 al 22 Agost 2012";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 al 22 Agost 2012', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)


        ok(result.end, JSON.stringify(result.end) )
        if(result.end) {
            ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.end) )
            ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.end) )
            ok(result.end.get('day') == 22, 'Test Result - (Day) ' + JSON.stringify(result.end) )

            var resultDate = result.end.date();
            var expectDate = new Date(2012, 8-1, 22, 12);
            ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
        }
    }

    var text = "10 Agost - 12 Setembre";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 Agost - 12 Setembre', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)


        ok(result.end, JSON.stringify(result.end) )
        ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.end) )
        ok(result.end.get('month') == 9, 'Test Result - (Month) ' + JSON.stringify(result.end) )
        ok(result.end.get('day') == 12, 'Test Result - (Day) ' + JSON.stringify(result.end) )

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 9-1, 12, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = "10 Agost - 12 Setembre 2013";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 Agost - 12 Setembre 2013', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2013, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)


        ok(result.end, JSON.stringify(result.end) )
        if(result.end) {
            ok(result.end.get('year') == 2013, 'Test Result - (Year) ' + JSON.stringify(result.end) )
            ok(result.end.get('month') == 9, 'Test Result - (Month) ' + JSON.stringify(result.end) )
            ok(result.end.get('day') == 12, 'Test Result - (Day) ' + JSON.stringify(result.end) )

            var resultDate = result.end.date();
            var expectDate = new Date(2013, 9-1, 12, 12);
            ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
        }
    }
});


test("Test - Combined expression", function() {

    var text = "12 de Juliol a les 19:00";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index')
        ok(result.text == '12 de Juliol a les 19:00', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 7, 'Test Result - (Month) ' + JSON.stringify(result) )
        ok(result.start.get('day') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )


        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7-1, 12, 19, 0);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

});

test("Test - Impossible Dates (Strict Mode)", function() {

    var text = "32 Agost 2014";
    var results = chrono.strict.parse(text, new Date(2012,7,10));
    ok(results.length == 0, JSON.stringify( results ) )

    var text = "29 Febrer 2014";
    var results = chrono.strict.parse(text, new Date(2012,7,10));
    ok(results.length == 0, JSON.stringify( results ))

    var text = "32 Agost";
    var results = chrono.strict.parse(text, new Date(2012,7,10));
    ok(results.length == 0, JSON.stringify( results ))

    var text = "29 Febre";
    var results = chrono.strict.parse(text, new Date(2012,7,10));
    ok(results.length == 0, JSON.stringify( results ))

});

test("Test - Impossible Dates (Casual Mode)", function() {

    var text = "32 Agost 2015";
    var expectDate = new Date(2015, 8, 1, 12, 0);
    var results = chrono.parse(text);
    ok(results.length == 1, JSON.stringify( results ) );
    var result = results[0];
    ok(result, JSON.stringify( results ) );
    if(result) {
        var resultDate = result.start.date();
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, resultDate +'/' +expectDate);
    }
});
