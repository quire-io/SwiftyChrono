test("Test - Should handle DE dayname mm-dd-yy", function() {
//  var text = "Friday 12-30-16";
     var text = "Freitag 12-30-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});

test("Test - Should handle DE dd-mm-yy", function() {
  var text = "12-30-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});


test("Test - Should handle DE dayname dd-mm-yy", function() {
  var text = "Freitag, 30-12-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});

test("Test - Should handle DE dd-mm-yy", function() {
  var text = "30-12-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});
