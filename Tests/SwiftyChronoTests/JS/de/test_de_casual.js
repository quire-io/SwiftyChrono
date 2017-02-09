
test("Test - Single Expression", function() {


//    var text = "The Deadline is now";
    var text = "Die Frist endet jetzt";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 8, 9, 10, 11));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 14, 'Wrong index');
        ok(result.text == 'jetzt', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 8, 'Test Result - (Hour) ' + JSON.stringify(result.start) );
        ok(result.start.get('minute') == 9, 'Test Result - (Minute) ' + JSON.stringify(result.start) );
        ok(result.start.get('second') == 10, 'Test Result - (Second) ' + JSON.stringify(result.start) );
        ok(result.start.get('millisecond') == 11, 'Test Result - (Millisecond) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 8, 9, 10, 11);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//    var text = "The Deadline is today";
     var text = "Die Frist endet heute";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 16, 'Wrong index');
        ok(result.text == 'heute', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//    var text = "The Deadline is Tomorrow";
    var text = "Der Termin ist morgen";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 15, 'Wrong index');
        ok(result.text == 'morgen', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 11, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 11, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    // Say.."Tomorrow" in the late night (1 AM)
//    var text = "The Deadline is Tomorrow";
    var text = "Der Termin ist morgen";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 1));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//    var text = "The Deadline was yesterday";
    var text = "Die Frist endete gestern";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 17, 'Wrong index');
        ok(result.text == 'gestern', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 9, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//    var text = "The Deadline was last night ";
    var text = "Die Frist ist letzte Nacht abgelaufen";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 17, 'Wrong index');
        ok(result.text == 'Nacht abgelaufen', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 0, 'Test Result - (hour) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 9, 0);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

     
//    var text = "The Deadline was this morning ";
    var text = "Der Termin war heute Morgen ";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 14, 'Wrong index');
        ok(result.text == 'heute Morgen', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 6, 'Test Result - (hour) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 6);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "The Deadline was this afternoon ";
    var text = "Die Frist wurde heute Nachmittag ";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 16, 'Wrong index');
        ok(result.text == 'heute Nachmittag', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 15, 'Test Result - (hour) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 15);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


//     var text = "The Deadline was this evening ";
    var text = "Die Frist wurde an diesem Abend ";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 19, 'Wrong index');
        ok(result.text == 'diesem Abend', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 18, 'Test Result - (hour) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 18);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});


test("Test - Combined Expression", function() {


//     var text = "The Deadline is today 5PM";
    var text = "Die Frist ist heute 17 Uhr";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 14, 'Wrong index');
        ok(result.text == 'heute 17 Uhr', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 17, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 17);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});


test("Test - Casual date range", function() {

//     var text = "The event is today - next friday";
    var text = "Die Veranstaltung wird heute - am kommenden Freitag";
    var results = chrono.casual.parse(text, new Date(2012, 7, 4, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 23, 'Wrong index');
        ok(result.text == 'heute - am kommenden Freitag', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 4, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 4, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)


        ok(result.end, JSON.stringify(result.start) );
        ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.end.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.end.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }



//     var text = "The event is today - next friday";
    var text = "Die Veranstaltung wird heute - am kommenden Freitag";
    var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
    ok(results.length == 1, JSON.stringify( results ) );

    var result = results[0];
    if(result){
        ok(result.index == 23, 'Wrong index');
        ok(result.text == 'heute - am kommenden Freitag', result.text );

        ok(result.start, JSON.stringify(result.start) );
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.start.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)


        ok(result.end, JSON.stringify(result.start) );
        ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
        ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
        ok(result.end.get('day') == 17, 'Test Result - (Day) ' + JSON.stringify(result.start) );
        ok(result.end.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 7, 17, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});





test('Test - Random text', function() {

//     var text = "tonight";
    var text = "Heute abend";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2012, JSON.stringify(result.start));
    ok(result.start.get('month') == 1, JSON.stringify(result.start));
    ok(result.start.get('day') == 1, JSON.stringify(result.start));
    ok(result.start.get('hour') == 22, JSON.stringify(result.start));
    ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));

//     var text = "tonight 8pm";
    var text = "Heute abend 20 Uhr";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('hour')  == 20, JSON.stringify(result.start));
    ok(result.start.get('year')  == 2012, JSON.stringify(result.start));
    ok(result.start.get('month') == 1, JSON.stringify(result.start));
    ok(result.start.get('day')   == 1, JSON.stringify(result.start));
    ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));


//     var text = "tonight at 8";
    var text = "Heute Abend am 8.";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('hour')  == 20, JSON.stringify(result.start));
    ok(result.start.get('year')  == 2012, JSON.stringify(result.start));
    ok(result.start.get('month') == 1, JSON.stringify(result.start));
    ok(result.start.get('day')   == 1, JSON.stringify(result.start));
    ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));


//     var text = "tomorrow before 4pm";
    var text = "Morgen vor 4:00 Uhr";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('hour')  == 16, JSON.stringify(result.start));
    ok(result.start.get('year')  == 2012, JSON.stringify(result.start));
    ok(result.start.get('month') == 1, JSON.stringify(result.start));
    ok(result.start.get('day')   == 2, JSON.stringify(result.start));
    ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));


//     var text = "tomorrow after 4pm";
    var text = "Morgen ab 16:00 Uhr";
    var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('hour')  == 16, JSON.stringify(result.start));
    ok(result.start.get('year')  == 2012, JSON.stringify(result.start));
    ok(result.start.get('month') == 1, JSON.stringify(result.start));
    ok(result.start.get('day')   == 2, JSON.stringify(result.start));
    ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));

//     var text = "this evening";
    var text = "diesen Abend";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 1, JSON.stringify(result.start));
    ok(result.start.get('hour') == 18, JSON.stringify(result.start));

//     var text = "yesterday afternoon";
    var text = "gestern Nachmittag";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 30, JSON.stringify(result.start));
    ok(result.start.get('hour') == 15, JSON.stringify(result.start));

//     var text = "tomorrow morning";
    var text = "Morgen früh";
    var result = chrono.parse(text, new Date(2016, 10-1, 1, 8))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 2, JSON.stringify(result.start));
    ok(result.start.get('hour') == 6, JSON.stringify(result.start));
});


//test('Test - Random negative text', function() {
//
//    var text = "notoday";
//    var results = chrono.parse(text);
//    ok(results.length == 0, JSON.stringify(results) );
//
//
//    var text = "tdtmr";
//    var results = chrono.parse(text);
//    ok(results.length == 0, JSON.stringify(results) );
//
//    var text = "xyesterday";
//    var results = chrono.parse(text);
//    ok(results.length == 0, JSON.stringify(results) );
//
//    var text = "nowhere";
//    var results = chrono.parse(text);
//    ok(results.length == 0, JSON.stringify(results) );
//
//    var text = "noway";
//    var results = chrono.parse(text);
//    ok(results.length == 0, JSON.stringify(results) );
//
//    var text = "knowledge";
//    var results = chrono.parse(text);
//    ok(results.length == 0, JSON.stringify(results) )
//
//});
