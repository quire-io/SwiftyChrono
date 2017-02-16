
test("Test - Single Expression", function() {

//     var text = "we have to do something in 5 days.";
    var text = "In 5 Tagen müssen wir fertig sein.";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'in 5 days', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 15, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 15, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "we have to do something in five days.";
    var text = "In fünf Tagen müssen wir fertig sein.";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 24, 'Wrong index');
        ok(result.text == 'in five days', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 15, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 15, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "we have to do something within 10 day"; // innerhalb von 10 Tagen
    var text = "Wir müssen etwas innerhalb von 10 Tagen tun";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 24, 'Wrong index');
        ok(result.text == 'innerhalb von 10 Tagen', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 20, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 20, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "in 5 minutes";
     var text = "in 5 Minuten";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'in 5 minutes', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,12,19);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

//     var text = "within 1 hour";
    var text = "innerhalb 1 Stunde";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'within 1 hour', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,13,14);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

//     var text = "In 5 minutes I will go home";
    var text = "In 5 Minuten gehe ich nach Hause";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'In 5 minutes', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,12,19);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "This car needs to move in 5 minutes";
    var text = "Diese Auto muss sich in 5 minuten bewegen";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'In 5 minutes', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,12,19);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "In 5 seconds A car need to move";
    var text = "Diese Auto muss sich in 5 Sekunden bewegen";
    var results = chrono.parse(text, new Date(2012,7, 10, 12, 14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'In 5 seconds', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12, 14, 5);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "within half an hour";
    var text = "Innerhalb einer halben Stunde";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'within half an hour', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,12,44);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "within two weeks";
    var text = "innerhalb von zwei Wochen";
    var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'within two weeks', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 24, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "within a month";
    var text = "innerhalb eines Monats";
    var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'within a month', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "within a few months";
    var text = "Innerhalb weniger Monate";
    var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'within a few months', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 10, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "within one Year";
    var text = "innerhalb eines Jahres";
    var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index');
        ok(result.text == 'within one Year', result.text );

        var resultDate = result.start.date();
        var expectDate = new Date(2013, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

});


test("Test - Single Expression (Strict)", function() {
//     var text = "within a few months";
    var text = "Innerhalb weniger Monate";
    var results = chrono.strict.parse(text, new Date(2012, 8-1, 3));
    ok(results.length == 0, JSON.stringify( results ) )


//     var text = "within a few days";
    var text = "innerhalb weniger Tage";
    var results = chrono.strict.parse(text, new Date(2012, 8-1, 3));
    ok(results.length == 0, JSON.stringify( results ) )
});
