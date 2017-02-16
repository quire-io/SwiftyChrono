test("Test - Should handle DE dayname dd.mm.yyyy", function() {
     var text = "Freitag 30.12.2016";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});

test("Test - Should handle DE dd.mm.yyyy", function() {
  var text = "30.12.2016";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});


test("Test - Should handle DE dayname dd.mm.yyyy", function() {
  var text = "Freitag, 30.12.2016";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});

test("Test - Should handle DE dd.mm.yyyy", function() { // der -> the
  var text = "Freitag, der 30.12.2016";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
});
