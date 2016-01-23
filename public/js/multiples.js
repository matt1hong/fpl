$(function(){

  var gridster = $(".gridster ul").gridster({
      max_cols: 4,
      widget_margins: [10, 10],
      widget_base_dimensions: [216, 175]
  }).data('gridster');
  $('li').hide();
  console.log(gridster.serialize())

  var players={"Charlie Austin": "655", "Sadio Mane": "314", "Kurt Zouma": "82", "Jeff Reine-Adelaide": "539", "Gareth Barry": "144", "Vito Mannone": "374", "Dean Hammond": "167", "Siem de Jong": "268", "Lazar Markovic": "195", "Adam Federici": "56", "Cesc Fabregas": "87", "Mark Noble": "475", "Alex Pritchard": "343", "Matthew Pennington": "574", "Luke Shaw": "233", "Wojciech Szczesny": "1", "Adama Traore": "554", "Declan Rudd": "276", "Connor Smith": "600", "Isaiah Brown": "95", "Leighton Baines": "129", "Marouane Fellaini": "239", "Gary O'Neil": "290", "Stevan Jovetic": "223", "Matthew James": "169", "Glenn Murray": "123", "Diafra Sakho": "485", "Ryan Shawcross": "355", "Franck Tabanou": "405", "John Obi Mikel": "94", "Aaron Ramsey": "17", "Sung-yueng Ki": "413", "Eliaquim Mangala": "213", "Jordi Gomez Garcia-Penche": "386", "Florian Thauvin": "562", "Leiva Lucas": "187", "Steven Whittaker": "278", "Gokhan Inler": "561", "Steve Cook": "58", "Juan Mata": "238", "Jason Puncheon": "113", "Damien Delaney": "108", "Ben Davies": "330", "Baily Cargill": "540", "Sebastian Larsson": "384", "Paul Dummett": "258", "Chancel Mbemba": "532", "Alexis Sanchez": "13", "Eric Dier": "331", "Toby Alderweireld": "306", "Nathan Ake": "84", "James McArthur": "117", "Alexander Tettey": "289", "Lewis McGugan": "439", "Steven Taylor": "255", "Heung-Min Son": "570", "Marc Pugh": "68", "Andrej Kramaric": "172", "Alessandro Diamanti": "560", "Mason Holgate": "614", "Jordan Veretout": "530", "Mark Schwarzer": "503", "Javier Manquillo": "183", "Clinton N'Jie": "558", "Stephen Ireland": "362", "N'Golo Kante": "538", "Yoan Gouffran": "266", "Michael Carrick": "241", "Sebastian Coates": "382", "Rudy Gestede": "531", "Mikel Arteta": "20", "Lloyd Isgrove": "598", "Ryan Seager": "624", "Jonathan Maddison": "555", "Adrian San Miguel del Castillo": "465", "Jose Pozo": "225", "Tommy Elphick": "59", "Emre Can": "193", "Fernando Luiz Rosa": "219", "Marc Albrighton": "164", "Danny Rose": "325", "Adam Matthews": "490", "Nathan Redmond": "285", "Harry Winks": "607", "Adlene Guedioura": "122", "Georgios Samaras": "464", "Marc Muniesa": "359", "Lloyd Dyer": "438", "Brede Hangeland": "111", "Shane Long": "318", "Nathaniel Clyne": "186", "Anthony Martial": "589", "Nabil Bentaleb": "342", "Ben Foster": "446", "Jordon Mutch": "118", "Harry Kane": "350", "Diego Da Silva Costa": "98", "Vurnon Anita": "263", "Riyad Mahrez": "163", "Jordan Amavi": "513", "Fraizer Campbell": "125", "Kelechi Iheanacho": "542", "Erik Pieters": "358", "Mousa Dembele": "336", "Willy Caballero": "206", "Claudio Yacob": "458", "Craig Dawson": "448", "Loic Remy": "99", "Sam Johnstone": "546", "Robert Kenedy Nunes do Nascimento": "573", "Ramiro Funes Mori": "583", "Billy Jones": "378", "Martin Demichelis": "211", "Victor Moses": "96", "Craig Cathcart": "425", "Willian Borges Da Silva": "90", "Steven N'Zonzi": "366", "Winston Reid": "469", "Kelvin Davis": "299", "Gnegneri Yaya Toure": "217", "Laurent Koscielny": "4", "Almen Abdi": "434", "Modibo Maiga": "486", "Daryl Janmaat": "259", "Emmanuel Riviere": "274", "Raphael Spiegel": "565", "Anthony Knockaert": "168", "Mario Balotelli": "202", "Christian Atsu": "65", "Kyle Knoyle": "579", "John Terry": "78", "Elliott Bennett": "291", "Daniel Sturridge": "199", "Gael Clichy": "210", "Martin Kelly": "107", "Rickie Lambert": "200", "Sebastien Pocognoli": "450", "Reece Burke": "472", "Michel Vorm": "324", "Wayne Hennessey": "103", "Geoff Cameron": "357", "Raheem Sterling": "189", "Wes Brown": "381", "Jose Fonte": "302", "Jeremain Lens": "510", "Michael Williamson": "254", "Jordy Clasie": "508", "Wayne Routledge": "408", "Ryan Mason": "345", "Lloyd Doyley": "432", "Ashley Williams": "398", "Lewis Grabban": "295", "Heurelho Gomes": "421", "Valon Behrami": "501", "Jason Denayer": "214", "Jack Wilshere": "18", "Calum Chambers": "12", "Samir Nasri": "215", "Kyle Walker": "327", "Martin Olsson": "280", "Modou Barrow": "419", "Robbie Brady": "527", "Valentin Roberge": "377", "Francis Coquelin": "24", "Matt Targett": "304", "Marco Amelia": "619", "Gabriel Obertan": "260", "James Ward-Prowse": "310", "Edin Dzeko": "221", "Kevin Mbabu": "608", "Marc Wilson": "356", "Jose Holebas": "492", "Libor Kozak": "53", "Leon Britton": "410", "Nemanja Matic": "92", "Marcin Wasilewski": "157", "Julian Speroni": "102", "Ander Herrera": "244", "Emanuele Giaccherini": "388", "Adam Johnson": "389", "Chung-yong Lee": "121", "Jack Colback": "265", "Emmanuel Adebayor": "349", "Bafetimbi Gomis": "417", "Ross Barkley": "138", "Ruben Loftus-Cheek": "93", "Enner Valencia": "484", "Stephane Sessegnon": "454", "Saido Berahino": "462", "Mathieu Debuchy": "9", "Josh Cullen": "566", "Andy Carroll": "483", "Barry Bannan": "119", "Jonjo Shelvey": "411", "Carles Gil de Pareja Vicent": "44", "Jake Hesketh": "315", "Robin van Persie": "248", "Diego Fabbrini": "436", "Joshua Onomah": "567", "Bojan Krkic": "372", "Bakary Sako": "537", "Kieran Gibbs": "8", "Nacho Monreal": "11", "Joe Allen": "190", "Dimitri Payet": "482", "Shay Given": "31", "Mark Bunn": "488", "Jordan Rossiter": "569", "Cameron Jerome": "293", "Alex McCarthy": "518", "Matt Butcher": "631", "Dusan Tadic": "313", "Tim Howard": "127", "Ricky van Wolfswinkel": "294", "Bradley Guzan": "30", "Santiago Vergini": "380", "Florin Gardos": "305", "Ron Vlaar": "34", "Eden Hazard": "86", "Brandon Barker": "611", "Seamus Coleman": "130", "Harrison Reed": "312", "Joey O'Brien": "468", "Tim Krul": "252", "Jonny Howson": "287", "James McCarthy": "141", "Paulo Gazzaniga": "549", "Juan Cuadrado": "89", "Chris Smalling": "228", "Dwight Gayle": "124", "Gabriele Angella": "424", "Fabian Delph": "43", "Mohamed El Ouriachi": "509", "Adam Bogdan": "176", "Gabriel Agbonlahor": "52", "Costel Pantilimon": "375", "Jose Angel Crespo": "522", "Adam Armstrong": "272", "Tyrone Mings": "62", "Salomon Rondon": "551", "Javier Hernandez": "249", "Jamaal Lascelles": "506", "Steven Berghuis": "526", "Jos Hooiveld": "282", "Jordan Ayew": "523", "Dominic Solanke": "100", "Leonardo Ulloa": "171", "Sammy Ameobi": "267", "Kyle Naughton": "397", "Hector Bellerin": "7", "Jon Flanagan": "494", "Stewart Downing": "474", "Cedric Soares": "307", "Callum McManaman": "459", "Alberto Moreno": "184", "Pedro Obiang": "481", "Joao Carlos Vilaca Teixeira": "593", "Cristian Gamboa": "451", "Marcos Rojo": "235", "Leandro Rodriguez": "592", "Ikechi Anya": "437", "Craig Gardner": "455", "Gerard Deulofeu": "148", "Jamie Sterry": "628", "Asmir Begovic": "352", "Romelu Lukaku": "149", "Simon Francis": "57", "Ritchie de Laet": "159", "Leon Osman": "140", "Tommy Hoban": "431", "Idrissa Gueye": "493", "Gareth McAuley": "452", "Junior Stanislas": "72", "Yaya Sanogo": "29", "Removed Player": "534", "Bastian Schweinsteiger": "496", "Charlie Adam": "363", "Filip Djuricic": "317", "Vadis Odjidja-Ofoe": "543", "Graham Dorrans": "288", "Wayne Rooney": "250", "Alex Oxlade-Chamberlain": "19", "Steven Pienaar": "143", "Aleksandar Kolarov": "207", "Philippe Senderos": "35", "Danny Graham": "394", "Kyle Lafferty": "297", "Daniel Tozser": "433", "Charles N'Zogbia": "45", "Lukasz Fabianski": "395", "Ola Toivonen": "571", "Tom Carroll": "347", "Michail Antonio": "588", "Jonathan Bond": "422", "Patrick McNair": "236", "Alexandre Song": "582", "Duncan Watmore": "556", "Tony Andreu": "507", "Ciaran Clark": "38", "Wilfried Zaha": "114", "Jake Gray": "612", "Patrick Roberts": "516", "James Chester": "529", "Rafael Pereira da Silva": "230", "William Buckley": "390", "Roberto Firmino": "198", "Shinji Okazaki": "174", "Kolo Toure": "179", "Yohan Benalouane": "533", "Ezekiel Fryers": "110", "Jordan Lyden": "634", "Tyias Browning": "136", "Patrick Bamford": "514", "Yohan Cabaye": "491", "Gabriel Armando de Abreu": "6", "Giedrius Arlauskis": "423", "Ashley Westwood": "49", "Rushian Hepburn-Murphy": "54", "Jay Rodriguez": "319", "Jefferson Montero": "414", "Ryan Allsop": "623", "Manuel Lanzini": "521", "Max Gradel": "535", "Darron Gibson": "145", "Kasper Schmeichel": "152", "Fabio Borini": "201", "Jake Kean": "603", "Jose Enrique Sanchez Diaz": "178", "Younes Kaboul": "326", "Joel Campbell": "572", "Alex Iwobi": "620", "Christian Fuchs": "155", "Tiago Ilori": "181", "Mile Jedinak": "115", "Virgil van Dijk": "586", "John Ruddy": "275", "Victor Ibarbo": "590", "Lynden Gooch": "577", "Micah Richards": "42", "Marvin Emnes": "418", "Lee Cattermole": "383", "Paul Konchesky": "158", "Jack Rodwell": "385", "David Nugent": "173", "John O'Shea": "376", "Patrick van Aanholt": "379", "Alan Hutton": "37", "Filipe Luis Kasmirski": "83", "Andreas Pereira": "247", "Nick Powell": "633", "Nathan Dyer": "409", "Arouna Kone": "151", "Harry Arter": "67", "Karl Darlow": "505", "Wes Morgan": "154", "Pape Souare": "109", "Nikica Jelavic": "584", "Jack Butland": "353", "Aaron Cresswell": "471", "Federico Fernandez": "404", "Matej Vydra": "443", "Mauro Zarate": "487", "Connor Randall": "616", "David Silva": "216", "Liam Bridcutt": "387", "Bamidele Alli": "348", "Phil Jones": "229", "Xherdan Shaqiri": "552", "Jores Okore": "39", "Roberto Soldado": "351", "Callum Wilson": "74", "James Collins": "467", "Adrian Mariappa": "106", "Aleksandar Mitrovic": "517", "Charlie Daniels": "60", "Peter Odemwingie": "369", "Morgan Amalfitano": "480", "Cuco Martina": "489", "Jerome Sinclair": "617", "Vincent Kompany": "209", "Sebastian Prodl": "426", "Divock Origi": "204", "Daniel Alfei": "605", "Phil Jagielka": "131", "Phil Bardsley": "360", "Manuel Garcia Alonso": "606", "Diego Poyet": "479", "Jan Vertonghen": "328", "Reece Oxford": "473", "Troy Deeney": "441", "Adnan Januzaj": "243", "Andreas Christensen": "85", "Adam Lallana": "194", "Danny Welbeck": "27", "Philipp Wollscheid": "361", "Lee Tomlin": "536", "Adam Smith": "61", "Jamal Blackman": "557", "James Tomkins": "470", "Conor McAleny": "547", "Glen Johnson": "499", "Danny Simpson": "160", "Jonathan Walters": "365", "Olivier Giroud": "26", "David Ospina": "2", "Gylfi Sigurdsson": "407", "Ayoze Perez Gutierrez": "273", "Odion Ighalo": "442", "Tony Hibbert": "135", "Miguel Britos": "519", "Muhamed Besic": "146", "Yann Kermorgant": "75", "Artur Boruc": "55", "Anders Lindegaard": "504", "Joel Ekstrand": "429", "Darren Fletcher": "453", "Ryan Bertrand": "301", "Andy King": "165", "Kristoffer Nordfeldt": "396", "John Stones": "132", "Sylvain Distin": "63", "Jack Rose": "550", "Jakob Haugaard": "354", "Gary Hooper": "296", "Fernando Forestieri": "444", "Dieumerci Mbokani": "581", "Maarten Stekelenburg": "300", "Victor Anichebe": "461", "Kevin Wimmer": "335", "James McClean": "460", "Allan-Romeo Nyom": "511", "Branislav Ivanovic": "79", "Danny Ings": "203", "Joe Cole": "46", "Matteo Darmian": "495", "Ibrahim Afellay": "525", "Mathieu Flamini": "25", "Jack Cork": "406", "Papiss Demba Cisse": "271", "Joseph Gomez": "515", "Angelo Ogbonna": "502", "Jordon Ibe": "192", "Jeffrey Schlupp": "156", "Andre Wisdom": "185", "Erik Lamela": "340", "Tyler Blackett": "234", "Sergio Aguero": "222", "Steven Davis": "309", "Scott Sinclair": "48", "Yannick Bolasie": "112", "Jordan Henderson": "188", "Victor Valdes": "227", "Santiago Cazorla": "16", "Aly Cissokho": "36", "Michael Turner": "281", "Essaid Belkalem": "599", "George Evans": "610", "Oluwaseyi Ojo": "196", "Oriol Romeu Vidal": "553", "Martin Samuelsen": "545", "Pedro Rodriguez Ledesma": "563", "Remy Cabella": "269", "Angel Di Maria": "245", "Philippe Coutinho": "191", "Liam Moore": "161", "Federico Fazio": "332", "Cameron Borthwick-Jackson": "625", "Per Mertesacker": "5", "Jonny Evans": "231", "Benjamin Stambouli": "344", "Moussa Sissoko": "264", "Massadio Haidara": "257", "Cameron Humphreys-Grant": "632", "Marko Arnautovic": "368", "Leandro Bacuna": "32", "Luke Croll": "613", "Kieran Richardson": "33", "Dwight Tiendalli": "402", "Cesar Azpilicueta": "80", "Tom Cleverley": "139", "Hugo Lloris": "323", "Doneil Henry": "601", "Joseph Dodoo": "575", "Joleon Lescott": "449", "Joshua King": "66", "Martin Skrtel": "177", "Rene Gilmartin": "548", "Mamadou Obbi Oulare": "587", "Jesus Navas": "218", "Jay Fulton": "412", "Fernando Francisco Reges": "220", "Theo Walcott": "14", "Russell Martin": "279", "Radamel Falcao Garcia Zarate": "101", "Steve Sidwell": "367", "Nathan Baker": "40", "Axel Tuanzebe": "622", "Georginio Wijnaldum": "497", "Aiden McGeady": "142", "Gael Bigirimana": "595", "Jermain Defoe": "392", "James Morrison": "456", "Sean Murray": "440", "Brown Ideye": "463", "Chuba Akpom": "28", "Daniel Pudil": "430", "Brendan Galloway": "134", "Tom Lawrence": "541", "Kevin Nolan": "476", "Darren Randolph": "466", "Joe Bennett": "576", "Marco Van Ginkel": "500", "Matt Macey": "615", "Steven Caulker": "528", "Andrew Surman": "69", "Papy Djilobodji": "585", "Steven Naismith": "150", "Ashley Young": "242", "Andros Townsend": "337", "Tokelo Rantie": "76", "Yann M'Vila": "544", "Gerhard Tremmel": "627", "Petr Cech": "3", "Matthew Jarvis": "477", "Cheikhou Kouyate": "478", "Joe Ledley": "116", "Freddie Woodman": "618", "Christian Eriksen": "341", "Kieran Trippier": "334", "Steven Fletcher": "393", "Curtis Good": "596", "Ramires Santos do Nascimento": "91", "Bradley Johnson": "284", "Jose Manuel Jurado Marin": "520", "Maya Yoshida": "303", "Simon Mignolet": "175", "Antonio Valencia": "237", "Pablo Maffeo": "578", "Boaz Myhill": "445", "Jonas Olsson": "447", "Benjamin Chilwell": "621", "Lee Lucas": "604", "Matt Grimes": "415", "Daniel Drinkwater": "166", "Mehdi Abeid": "262", "Nicolas Otamendi": "564", "Vlad Chiriches": "329", "Robert Huth": "162", "Joel Ward": "105", "Marcus Rashford": "629", "Miguel Layun": "428", "Sean Goss": "630", "Carlos Sanchez": "50", "Abdul Rahman Baba": "559", "Joe Hart": "205", "Tomas Rosicky": "21", "Fraser Forster": "298", "Ben Watson": "435", "Bertrand Traore": "568", "Elliot Lee": "512", "Matt Ritchie": "64", "Robert Elliot": "253", "Rolando Aarons": "270", "James Wilson": "251", "Sebastien Bassong": "277", "Youssouf Mulumbu": "292", "Oscar dos Santos Emboaba Junior": "88", "Eljero Elia": "316", "Cameron Brannagan": "626", "Sergio Romero": "524", "Marouane Chamakh": "126", "Dejan Lovren": "182", "Juan Carlos Paredes": "427", "Guillermo Varela": "232", "Jordi Amat": "403", "Kevin Mirallas": "137", "Nathan Allan de Souza": "97", "Aaron Lennon": "346", "Emmanuel Mayuka": "320", "Scott Dann": "104", "Carl Jenkinson": "10", "DeAndre Yedlin": "333", "Ryan Bennett": "283", "Gaston Ramirez": "498", "Jack Grealish": "47", "Shaun MacDonald": "71", "Kyle Bartley": "401", "Wes Hoolahan": "286", "Ederzito Antonio Macedo Lopes": "420", "Gedion Zelalem": "23", "Jamie Vardy": "170", "Peter Crouch": "370", "Luke Garbutt": "133", "Joel Robles": "128", "Pablo Zabaleta": "208", "Lewis Kinsella": "41", "Neil Taylor": "399", "Mesut Ozil": "15", "Gary Gardner": "591", "Bryan Oviedo": "147", "Serge Gnabry": "22", "Ivan Toney": "609", "Mamadou Sakho": "180", "Bacary Sagna": "212", "Wilfried Bony": "224", "Jose Luis Mato Sanmartin": "373", "Eunan O'Kane": "70", "Richard Wright": "602", "Kevin De Bruyne": "580", "Victor Wanyama": "311", "Graziano Pelle": "321", "Thibaut Courtois": "77", "Jonathan Williams": "120", "Juan Miguel Jimenez Lopez": "322", "Mame Biram Diouf": "371", "Ben Hamer": "153", "Cheick Tiote": "261", "Connor Wickham": "391", "Angel Rangel": "400", "Sylvain Marveaux": "597", "David de Gea": "226", "Gary Cahill": "81", "Jesse Lingard": "594", "Etienne Capoue": "339", "Christian Benteke": "51", "Fabricio Coloccini": "256", "Morgan Schneiderlin": "308", "Dan Gosling": "73", "Memphis Depay": "240", "Daley Blind": "246", "Chris Brunt": "457", "Nacer Chadli": "338", "Andre Ayew": "416", "James Milner": "197", "Glenn Whelan": "364"};

  var featured = [
    'Patrick van Aanholt', 
    'Matt Targett',
    'Robert Huth',
    'Michail Antonio',
    'Darren Fletcher',
    'Roberto Firmino',
    'Bamidele Alli',
    'Jermain Defoe',
    'Enner Valencia',
    'Charlie Austin',
    'Daniel Drinkwater',
    'Christian Fuchs'];

  // Autocomplete
  $( "#tags" )
    // don't navigate away from the field on tab when selecting an item
    .bind( "keydown", function( event ) {
      if ( event.keyCode === $.ui.keyCode.TAB &&
          $( this ).autocomplete( "instance" ).menu.active ) {
        event.preventDefault();
      }
    })
    .autocomplete({
      minLength: 0,
      source: function( request, response ) {
        // delegate back to autocomplete, but extract the last term
        response( $.ui.autocomplete.filter(
          Object.keys(players), extractLast( request.term ) ) );
      },
      focus: function() {
        // prevent value inserted on focus
        return false;
      },
      select: function( event, ui ) {
        var terms = split( this.value );
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push( ui.item.value );
        // add placeholder to get the comma-and-space at the end
        terms.push( "" );
        this.value = terms.join( "," );
        return false;
      }
    });

  drawCards(featured);

  // For redraw
  var maxList = [], minList = [];

  // Search
  var names;

  $("#tags")
    .keyup(function(event){
      if (event.keyCode === 13) {
        event.preventDefault();
        names = $('#tags').val().split(',').map(function(d){return d.trim();})
        drawCards(names);
      }
    });

  // Delete
  $(".gs-w")
    .mousedown(function () { $(".units-row").fadeOut(300); $('.overlay').fadeIn(300); })
    .mouseup(function () { $(".units-row").fadeIn(300); $('.overlay').fadeOut(300); });

  function split( val ) {
    return val.split( /,\s*/ );
  }

  function extractLast( term ) {
    return split( term ).pop();
  }

  function drawCards (names) {
    var name, pid;

    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if(name){ //string might be empty
        pid = +(players[name]);
        console.log(name)
        console.log(pid)
        if ($('li#player' + pid).length === 0) { // if not already rendered
          drawCard(pid);
        }
      }
    };
  }

  function drawCard (pid) {
    var svgTitle, nowMax, nowMin;
    $.get('/fpl/?id=' + pid, function(result) {

      gridster.add_widget('<li id="player'+ pid + '"></li>', 1, 1, whereToDraw(), 1);
      $('li#player' + pid).html(function() {
        return result.svg + '<p>' + result.lastName + '</p>';
      });

      maxList.push({id: pid, max: result.max});
      minList.push({id: pid, min: result.min});
      nowMax = d3.max(maxList, function (d) { return d.max; })
      nowMin = d3.min(minList, function (d) { return d.min; })
      redrawToScale(nowMin, nowMax);

      // Tooltips
      $('li#player' + pid + ' rect')
        .tipsy({
          title: function() {
            svgTitle = $(this).children();
            if (svgTitle.text()) {
              // Cut & paste over original tooltip at first go
              $(this).attr('originalTitle', svgTitle.text());
              svgTitle.empty();
            }
            return $(this).attr('originalTitle') || '';
          },
          gravity: 'e'
        });
    });
  }

  function whereToDraw () {
    var itemsCount = { 1: 0, 2: 0, 3: 0, 4: 0};
    var currentPos = gridster.serialize();
    for (var i = 0; i < currentPos.length; i++) {
      itemsCount[currentPos[i].col]++;
    };
    var min = 1000, minCol = 1;
    for (var i = 1; i <= 4; i++) {
      if (min > itemsCount[i]) {
        min = itemsCount[i];
        minCol = i;
      }
    };
    return minCol;
  }

  function redrawToScale(min, max) {
    var height = 114;

    var yScale = d3.scale.linear()
      .domain([min, max])
      .range([height, 0]);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(3);

    d3.selectAll(".y").transition().duration(300).call(yAxis);

    d3.selectAll(".x line").transition().duration(300)
      .attr("y1", yScale(0))
      .attr("y2", yScale(0));

    d3.selectAll("rect").transition().duration(300)
      .attr("y", function () {
        return yScale(+d.call(this, 'data-y') + +d.call(this, 'data-y0')); 
        function d(a) { return $(this).attr(a) }
      })
      .attr("height", function () { 
        return yScale(+d.call(this, 'data-y0')) - yScale(+d.call(this, 'data-y') + +d.call(this, 'data-y0')); 
        function d(a) { return $(this).attr(a) }
      });
    }

    function capitalizeEachWord(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
});