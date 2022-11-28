const requirements = new Map([
    ["field search", "to search, it should be entered at least 4 characters"],
    ["field search", "the search is performed only by the title of the book"],
    ["field search", "search is case insensitive"],
    //вообще там поиск происходит странно. Есть 2 книги, которые в названии имеют Adventures:
    //The Adventures of Tom Sawyer и The Adventures of Huckleberry Finn
    // если в строку поиска ввести Adventures, всегда находит только The Adventures of Tom Sawyer
    ["field quantity", "for correct operation, only numbers should be entered in the field"],
    ["field quantity", "when entering into the field a character other than a number, the field is set to 1"],
    ["field Card Number", "only numbers should be entered in the field"],
    ["field Card Number", "for correct operation, in the field should be entered 16 numbers"],
    ["total,$", "should be calculated as quantity*price - discount,$"],//хотя здесь эти значения складываются
    ["book picture on home screen", "when clicked on the picture, there should be a transition to the book card"],
  ]);