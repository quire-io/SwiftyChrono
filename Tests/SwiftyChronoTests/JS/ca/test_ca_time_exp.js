
test("Test - Single Expression", function() {


    var text = "Quedem a les 6.13 AM";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 7, 'Wrong index')
        ok(result.text == 'a les 6.13 AM', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('hour') == 6, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 13, 'Test Result - (Minute) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 6, 13);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }



});

test("Test - Range Expression", function() {

    var text = "8:10 - 12.32";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 0, 'Wrong index')
        ok(result.text == '8:10 - 12.32', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('hour') == 8, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 10, 'Test Result - (Minute) ' + JSON.stringify(result.start) )

        ok(!result.start.isCertain('day'))
        ok(!result.start.isCertain('month'))
        ok(!result.start.isCertain('year'))
        ok(result.start.isCertain('hour'))
        ok(result.start.isCertain('minute'))
        ok(!result.start.isCertain('second'))
        ok(!result.start.isCertain('millisecond'))

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 8, 10);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)

        ok(result.end, JSON.stringify(result.start) )
        ok(result.end.get('hour') == 12, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.end.get('minute') == 32, 'Test Result - (Minute) ' + JSON.stringify(result.start) )

        ok(!result.end.isCertain('day'))
        ok(!result.end.isCertain('month'))
        ok(!result.end.isCertain('year'))
        ok(result.end.isCertain('hour'))
        ok(result.end.isCertain('minute'))
        ok(!result.end.isCertain('second'))
        ok(!result.end.isCertain('millisecond'))

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 7, 10, 12, 32);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = " de 6:30pm a 11:00pm ";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 1, 'Wrong index')
        ok(result.text == 'de 6:30pm a 11:00pm', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('hour') == 18, 'Test Result - (Hour) ' + JSON.stringify(result.start))
        ok(result.start.get('minute') == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start))
        ok(result.start.get('meridiem') == 1, 'Test Result - (Meridiem) ' + JSON.stringify(result.start))

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 18, 30);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)

        ok(result.end, JSON.stringify(result.start) )
        ok(result.end.get('hour') == 23, 'Test Result - (Hour) ' + JSON.stringify(result.end) )
        ok(result.end.get('minute') == 0, 'Test Result - (Minute) ' + JSON.stringify(result.end) )
        ok(result.end.get('meridiem') == 1, 'Test Result - (Meridiem) ' + JSON.stringify(result.end) )

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 7, 10, 23, 0);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

});

test("Test - Date + Time Expression", function() {

    var text = "quelcom va passar el 10 d'Agost de 2012 10:12:59 pm";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.index == 21, 'Wrong index')
        ok(result.text == '10 d\'Agost de 2012 10:12:59 pm', result.text )

        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 22, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 12, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
        ok(result.start.get('second') == 59, 'Test Result - (second) ' + JSON.stringify(result.start) )
        ok(result.start.get('millisecond') == 0, 'Test Result - (millisecond) ' + JSON.stringify(result.start) )
        ok(!result.start.isCertain('millisecond'))

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 22, 12, 59);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.start.date ' + resultDate +'/' +expectDate)
    }

})


test("Test - Time Expression's Meridiem imply", function() {

    var text = "d'1pm a 3";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if (result) {
        ok(result.index == 0, 'Wrong index')
        ok(result.text == 'd\'1pm a 3', result.text )

        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
        ok(result.start.get('hour') == 13, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
        ok(result.start.get('minute') == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
        ok(result.start.get('second') == 0, 'Test Result - (second) ' + JSON.stringify(result.start) )
        ok(result.start.get('millisecond') == 0, 'Test Result - (millisecond) ' + JSON.stringify(result.start) )
        ok(result.start.get('meridiem') == 1, 'Test Result - (meridiem) ' + JSON.stringify(result.start) )
        ok(result.start.isCertain('meridiem'), JSON.stringify(result))

        ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.end) )
        ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.end) )
        ok(result.end.get('day') == 11, 'Test Result - (Day) ' + JSON.stringify(result.end) )
        ok(result.end.get('hour') == 3, 'Test Result - (Hour) ' + JSON.stringify(result.end) )
        ok(result.end.get('minute') == 0, 'Test Result - (Minute) ' + JSON.stringify(result.end) )
        ok(result.end.get('second') == 0, 'Test Result - (second) ' + JSON.stringify(result.end) )
        ok(result.end.get('millisecond') == 0, 'Test Result - (millisecond) ' + JSON.stringify(result.end) )
        ok(!result.end.isCertain('meridiem'), JSON.stringify(result))
    }
})


test("Test - Random date + time expression", function() {

    var text = "dilluns 4/29/2013 630-930am";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "dimecres 5/1/2013 1115am";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "divendres 5/3/2013 1230pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)


    var text = "diumenge 5/6/2013  750am-910am";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "dilluns 5/13/2013 630-930am";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "dimecres 5/15/2013 1030am";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "divendres 6/21/2013 2:30";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "dimarts 7/2/2013 1-230 pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "Dilluns, 6/24/2013, 7:00pm - 8:30pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "Dijous6/20/2013 des de les 7:00 PM fins a les 10:00 PM";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "Dimecres, 3 de Juliol de 2013 a les 2pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)


    var text = "6pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "6 pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "7-10pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "11.1pm";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "a las 12";
    var result = chrono.parse(text)[0];
    ok(result.text == text, result.text)

    var text = "al migdia";
    var results = chrono.parse(text)
    ok(results.length == 1, JSON.stringify( results ) )
    var result = results[0];
    if(result) {
        ok(result.text == text, result.text)
        ok(result.start.get('hour') == 12, JSON.stringify(result.start))
    }

    var text = "a mitjanit";
    var results = chrono.parse(text)
    ok(results.length == 1, JSON.stringify( results ) )
    var result = results[0];
    if (result) {
        ok(result.text == text, result.text)
    }
})
