
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('celebs').del()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert([
        {
          id: 1,
          name: "Céline Dion",
          info: "Canadian singer",
          birth: 1968,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/25/64971.jpg"
        },

        {
          id: 2,
          name: "John Grisham",
          info: "American author",
          birth: 1955,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/176/441088.jpg"
        },
        {
          id: 3,
          name: "Marvin Gaye",
          info: "American singer-songwriter",
          birth: 1939,
          death: 1984,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/68/171783.jpg"
        },
        {
          id: 4,
          name: "Sonny Bono",
          info: "American singer and politician",
          birth: 1935,
          death: 1998,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/35/89892.jpg"
        },
        {
          id: 5,
          name: "Arnold Schwarzenegger",
          info: "Austrian-American actor and politician",
          birth: 1947,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/11/29588.jpg"
        },
        {
          id: 7,
          name: "Jean-Claude Van Damme",
          info: "Belgian actor and director",
          birth: 1950,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/72/181356.jpg"
        },
        {
          id: 8,
          name: "River Phoenix",
          info: "American actor",
          birth: 1970,
          death: 1993,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/48/120595.jpg"
        },
        {
          id: 10,
          name: "Burt Reynolds",
          info: "American actor and director",
          birth: 1936,
          death: 2018,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/10/25497.jpg"
        },
        {
          id: 11,
          name: "Julie Andrews",
          info: "British actress and singer",
          birth: 1935,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/112626.jpg"
        },
        {
          id: 12,
          name: "Brad Pitt",
          info: "American actor",
          birth: 1963,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/11/29350.jpg"
        },
        {
          id: 13,
          name: "Judi Dench",
          info: "British actress",
          birth: 1934,
          death: 1934,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/28/71684.jpg"
        },
        {
          id: 14,
          name: "Jimmy Carter",
          info: "American president",
          birth: 1924,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/20/50325.jpg"
        },
        {
          id: 15,
          name: "John Malkovich",
          info: "American actor and filmmaker",
          birth: 1953,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/5/14241.jpg"
        },
        {
          id: 16,
          name: "Christopher Reeve",
          info: "American actor",
          birth: 1952,
          death: 2004,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/29/74651.jpg"
        },
        {
          id: 17,
          name: "Larry Hagman",
          info: "American actor",
          birth: 1931,
          death: 2012,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/11/28703.jpg"
        },
        {
          id: 18,
          name: "Judy Garland",
          info: "American actress and singer",
          birth: 1922,
          death: 1969,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/136/341814.jpg"
        },
        {
          id: 20,
          name: "Rik Mayall",
          info: "British comedian and actor",
          birth: 1958,
          death: 2014,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/4/11209.jpg"
        },
        {
          id: 21,
          name: "Ben Kingsley",
          info: "British actor",
          birth: 1943,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/85/214352.jpg"
        },
        {
          id: 22,
          name: "Jackie Chan",
          info: "Hong Kong actor and martial artist",
          birth: 1954,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/55/139382.jpg"
        },
        {
          id: 23,
          name: "Farrah Fawcett",
          info: "American actress",
          birth: 1947,
          death: 2009,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/3/9721.jpg"
        },
        {
          id: 24,
          name: "Eric Bristow",
          info: "British darts player",
          birth: 1957,
          death: 2018,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/66/165845.jpg"
        },
        {
          id: 25,
          name: "Elizabeth Taylor",
          info: "British-American actress",
          birth: 1932,
          death: 2011,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/160/400878.jpg"
        },
        {
          id: 26,
          name: "Kiefer Sutherland",
          info: "Canadian actor",
          birth: 1966,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/2/7476.jpg"
        },
        {
          id: 27,
          name: "Lauren Bacall",
          info: "American actress and model",
          birth: 1924,
          death: 2014,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/2/7476.jpg"
        },
        {
          id: 28,
          name: "Bruce Lee",
          info: "Chinese martial arts instructor and actor",
          birth: 1940,
          death: 1973,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/20/51492.jpg"
        },
        {
          id: 29,
          name: "Douglas Adams",
          info: "British writer",
          birth: 1952,
          death: 2001,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/94/235968.jpg"
        },
        {
          id: 30,
          name: "Ringo Starr",
          info: "British musician",
          birth: 1940,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/175/438474.jpg"
        },
        {
          id: 31,
          name: "Stephen Hawking",
          info: "British physicist and author",
          birth: 1942,
          death: 2018,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/8/20181.jpg"
        },
        {
          id: 32,
          name: "Guy Pearce",
          info: "Australian actor",
          birth: 1967,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/55/139356.jpg"
        },
        {
          id: 33,
          name: "Dudley Moore",
          info: "British actor and comedian",
          birth: 1935,
          death: 2002,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/55/139356.jpg"
        },
        {
          id: 34,
          name: "Tom Petty",
          info: "American singer-songwriter",
          birth: 1950,
          death: 2017,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/114330.jpg"
        },
        {
          id: 35,
          name: "Peaches Geldof",
          info: "British journalist, TV presenter and model",
          birth: 1989,
          death: 2014,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/88/221325.jpg"
        },
        {
          id: 37,
          name: "Samuel L. Jackson",
          info: "American actor",
          birth: 1948,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/2/6412.jpg"
        },
        {
          id: 38,
          name: "Ron Howard",
          info: "American filmmaker",
          birth: 1954,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/4/10151.jpg"
        },
        {
          id: 40,
          name: "James Dean",
          info: "American actor",
          birth: 1931,
          death: 1955,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/169/424289.jpg"
        },
        {
          id: 42,
          name: "Anthony Hopkins",
          info: "British actor",
          birth: 1937,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/41/102970.jpg"
        },
        {
          id: 43,
          name: "Prince",
          info: "American singer-songwriter and musician",
          birth: 1958,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/114336.jpg"
        },
        {
          id: 44,
          name: "Jonah Lomu",
          info: "New Zealand Rugby player",
          birth: 1975,
          death: 2015,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/32/82095.jpg"
        },
        {
          id: 45,
          name: "Natalie Portman",
          info: "Israeli-American actress",
          birth: 1981,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/12/30599.jpg"
        },
        {
          id: 46,
          name: "Art Garfunkel",
          info: "American singer-songwriter",
          birth: 1941,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/170/425785.jpg"
        },
        {
          id: 47,
          name: "Hugh Laurie",
          info: "British actor and comedian",
          birth: 1959,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/46/117107.jpg"
        },
        {
          id: 48,
          name: "Patrick Duffy",
          info: "American actor",
          birth: 1949,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/8/22175.jpg"
        },
        {
          id: 50,
          name: "James Brown",
          info: "American singer-songwriter",
          birth: 1933,
          death: 2006,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/35/89893.jpg"
        },
        {
          id: 52,
          name: "Nicole Scherzinger",
          info: "American singer and dancer",
          birth: 1978,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/89/223308.jpg"
        },
        {
          id: 53,
          name: "Leslie Nielsen",
          info: "Canadian actor and comedian",
          birth: 1926,
          death: 2010,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/12/31166.jpg"
        },
        {
          id: 54,
          name: "Germaine Greer",
          info: "Australian feminist author",
          birth: 1939,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/88/221326.jpg"
        },
        {
          id: 55,
          name: "Seamus Heaney",
          info: "Irish poet and playwright",
          birth: 1939,
          death: 2013,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/183/459161.jpg"
        },
        {
          id: 57,
          name: "Kirk Douglas",
          info: "American actor",
          birth: 1916,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/106/266745.jpg"
        },
        {
          id: 58,
          name: "Helen Mirren",
          info: "British actress",
          birth: 1945,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/21/54172.jpg"
        },
        {
          id: 59,
          name: "Paul Simon",
          info: "American singer-songwriter",
          birth: 1941,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/112628.jpg"
        },
        {
          id: 60,
          name: "Dennis Hopper",
          info: "American actor and director",
          birth: 1936,
          death: 2010,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/41/103109.jpg"
        },
        {
          id: 61,
          name: "Bill Paxton",
          info: "American actor and film-maker",
          birth: 1955,
          death: 2017,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3111.jpg"
        },
        {
          id: 62,
          name: "Julia Roberts",
          info: "American actress",
          birth: 1967,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/113/284896.jpg"
        },
        {
          id: 63,
          name: "Paul Gascoigne",
          info: "British footballer",
          birth: 1967,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/40/100306.jpg"
        },
        {
          id: 65,
          name: "Idris Elba",
          info: "British actor",
          birth: 1972,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/112/281002.jpg"
        },
        {
          id: 66,
          name: "Brittany Murphy",
          info: "American actress",
          birth: 1977,
          death: 2009,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/12/30531.jpg"
        },
        {
          id: 67,
          name: "Petula Clark",
          info: "British actress and singer",
          birth: 1932,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/82/207134.jpg"
        },
        {
          id: 68,
          name: "Michael Jordan",
          info: "American basketball player",
          birth: 1963,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/86/216054.jpg"
        },
        {
          id: 70,
          name: "Val Kilmer",
          info: "American actor",
          birth: 1959,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/145/364355.jpg"
        },
        {
          id: 71,
          name: "Elaine Paige",
          info: "British singer and actress",
          birth: 1948,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/59/149343.jpg"
        },
        {
          id: 72,
          name: "David Bowie",
          info: "British singer-songwriter and actor",
          birth: 1947,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/11/28212.jpg"
        },
        {
          id: 74,
          name: "Jack Nicholson",
          info: "American actor and filmmaker",
          birth: 1937,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/159/398899.jpg"
        },
        {
          id: 75,
          name: "Dan Brown",
          info: "American author",
          birth: 1964,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/200/502277.jpg"
        },
        {
          id: 76,
          name: "Bruce Forsyth",
          info: "British television presenter",
          birth: 1928,
          death: 2017,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/18/47087.jpg"
        },
        {
          id: 77,
          name: "Russell Crowe",
          info: "Australian actor",
          birth: 1964,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/112667.jpg"
        },
        {
          id: 78,
          name: "Diane Keaton",
          info: "American actress and film-maker",
          birth: 1946,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/26/66260.jpg"
        },
        {
          id: 80,
          name: "Jim Henson",
          info: "American puppeteer and filmmaker",
          birth: 1936,
          death: 1990,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/29/74410.jpg"
        },
        {
          id: 81,
          name: "Billy Idol",
          info: "British singer-songwriter",
          birth: 1955,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/127/317587.jpg"
        },
        {
          id: 82,
          name: "Richard E. Grant",
          info: "British actor",
          birth: 1957,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/5/12791.jpg"
        },
        {
          id: 83,
          name: "Will Smith",
          info: "American actor and rapper",
          birth: 1967,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/27/68348.jpg"
        },
        {
          id: 84,
          name: "Robert Miles",
          info: "Italian musician and DJ",
          birth: 1969,
          death: 2017,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/112/281202.jpg"
        },
        {
          id: 85,
          name: "Bobby Charlton",
          info: "British footballer",
          birth: 1937,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/94/237018.jpg"
        },
        {
          id: 86,
          name: "Natalie Cole",
          info: "American singer-songwriter",
          birth: 1950,
          death: 2015,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/37/92939.jpg"
        },
        {
          id: 87,
          name: "Stevie Wonder",
          info: "American singer-songwriter",
          birth: 1950,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/111987.jpg"
        },
        {
          id: 88,
          name: "George Michael",
          info: "British singer-songwriter",
          birth: 1963,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/43/109489.jpg"
        },
        {
          id: 89,
          name: "Bill Gates",
          info: "American businessman and philanthropist",
          birth: 1955,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/32/80656.jpg"
        },
        {
          id: 90,
          name: "William Shatner",
          info: "Canadian actor and recording artist",
          birth: 1931,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/3/9684.jpg"
        },
        {
          id: 92,
          name: "Iain Banks",
          info: "British author",
          birth: 1954,
          death: 2013,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/146/366797.jpg"
        },
        {
          id: 93,
          name: "Sugar Ray Leonard",
          info: "American boxer",
          birth: 1956,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/146/366797.jpg"
        },
        {
          id: 95,
          name: "Tommy Cooper",
          info: "British comedian and magician",
          birth: 1921,
          death: 1984,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/46/115597.jpg"
        },
        {
          id: 96,
          name: "Pierce Brosnan",
          info: "Irish-American actor",
          birth: 1953,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/38/95153.jpg"
        },
        {
          id: 97,
          name: "Carrie Fisher",
          info: "American actress and writer",
          birth: 1956,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/5/13073.jpg"
        },
        {
          id: 98,
          name: "Peter Cook",
          info: "British actor",
          birth: 1937,
          death: 1995,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/41/103060.jpg"
        },
        {
          id: 99,
          name: "Muhammad Ali",
          info: "American boxer",
          birth: 1942,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/60/151730.jpg"
        },
        {
          id: 100,
          name: "Robert Redford",
          info: "American actor and director",
          birth: 1936,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/14/36202.jpg"
        },
        {
          id: 101,
          name: "Aretha Franklin",
          info: "American singer-songwriter",
          birth: 1942,
          death: 2018,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/164/410772.jpg"
        },
        {
          id: 102,
          name: "Leonard Nimoy",
          info: "American actor and director",
          birth: 1931,
          death: 2015,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/111762.jpg"
        },
        {
          id: 103,
          name: "Sophia Loren",
          info: "Italian actress",
          birth: 1934,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/40/102426.jpg"
        },
        {
          id: 104,
          name: "Janet Jackson",
          info: "American singer-songwriter",
          birth: 1966,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/10/25571.jpg"
        },
        {
          id: 105,
          name: "Terry Pratchett",
          info: "British author",
          birth: 1948,
          death: 2015,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/173/433425.jpg"
        },
        {
          id: 106,
          name: "Mary Steenburgen",
          info: "American actress",
          birth: 1953,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/173/433425.jpg"
        },
        {
          id: 107,
          name: "John Travolta",
          info: "American actor, dancer and singer",
          birth: 1954,
          death: 2009,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/74/186963.jpg"
        },
        {
          id: 108,
          name: "Hugh Jackman",
          info: "Australian actor",
          birth: 1968,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/74/186963.jpg"
        },
        {
          id: 109,
          name: "Michael Douglas",
          info: "American actor",
          birth: 1944,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/124/310988.jpg"
        },
        {
          id: 112,
          name: "Norman Wisdom",
          info: "British actor and comedian",
          birth: 1915,
          death: 2010,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/31/79422.jpg"
        },
        {
          id: 113,
          name: "Gene Wilder",
          info: "American actor",
          birth: 1933,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/59/149308.jpg"
        },
        {
          id: 114,
          name: "Pete Sampras",
          info: "American tennis player",
          birth: 1971,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/113815.jpg"
        },
        {
          id: 115,
          name: "Ben Elton",
          info: "British comedian and writer",
          birth: 1959,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/37/93228.jpg"
        },
        {
          id: 116,
          name: "Robert De Niro",
          info: "American actor",
          birth: 1943,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/27/69611.jpg"
        },
        {
          id: 117,
          name: "Axl Rose",
          info: "American singer-songwriter",
          birth: 1962,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/37/93877.jpg"
        },
        {
          id: 118,
          name: "Brian May",
          info: "British musician",
          birth: 1947,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/111150.jpg"
        },
        {
          id: 119,
          name: "Anne Kirkbride",
          info: "British actress",
          birth: 1954,
          death: 2015,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/20/50197.jpg"
        },
        {
          id: 122,
          name: "Dustin Hoffman",
          info: "American actor",
          birth: 1937,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/9/22678.jpg"
        },
        {
          id: 123,
          name: "David Attenborough",
          info: "British broadcaster and naturalist",
          birth: 1926,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/6/15322.jpg"
        },
        {
          id: 124,
          name: "Dionne Warwick",
          info: "American singer",
          birth: 1940,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/190/476578.jpg"
        },
        {
          id: 125,
          name: "Phil Taylor",
          info: "British darts player",
          birth: 1960,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/32/82165.jpg"
        },
        {
          id: 126,
          name: "Cher",
          info: "American singer and actress",
          birth: 1946,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/35/89891.jpg"
        },
        {
          id: 127,
          name: "Bruce Willis",
          info: "American actor",
          birth: 1955,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/9/23686.jpg"
        },
        {
          id: 128,
          name: "Brian Clough",
          info: "British football manager",
          birth: 1935,
          death: 2004,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/9/23686.jpg"
        },
        {
          id: 129,
          name: "Dolly Parton",
          info: "American singer-songwriter and actress",
          birth: 1946,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/25/64938.jpg"
        },
        {
          id: 131,
          name: "Charles Dance",
          info: "British actor",
          birth: 1946,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/168/422293.jpg"
        },
        {
          id: 132,
          name: "Christopher Walken",
          info: "American actor",
          birth: 1943,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/28/71728.jpg"
        },
        {
          id: 133,
          name: "Larry King",
          info: "American television and radio host",
          birth: 1933,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/23/59707.jpg"
        },
        {
          id: 134,
          name: "Gary Oldman",
          info: "British actor and filmmaker",
          birth: 1958,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/114347.jpg"
        },
        {
          id: 136,
          name: "Rutger Hauer",
          info: "Dutch actor",
          birth: 1944,
          death: 2019,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/127/318343.jpg"
        },
        {
          id: 137,
          name: "Bernie Ecclestone",
          info: "British businessman",
          birth: 1930,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/108/271081.jpg"
        },
        {
          id: 140,
          name: "Olivia Newton-John",
          info: "Australian singer-songwriter and actress",
          birth: 1948,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/55/139319.jpg"
        },
        {
          id: 141,
          name: "Cory Monteith",
          info: "Canadian actor and singer",
          birth: 1982,
          death: 2013,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/3/8315.jpg"
        },
        {
          id: 142,
          name: "Terry Jones",
          info: "British filmmaker and actor",
          birth: 1942,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/21/54345.jpg"
        },
        {
          id: 143,
          name: "Kevin Bacon",
          info: "American actor",
          birth: 1958,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/3/8833.jpg"
        },
        {
          id: 144,
          name: "Bernard Manning",
          info: "British comedian",
          birth: 1930,
          death: 2007,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/43/108077.jpg"
        },
        {
          id: 145,
          name: "Liam Neeson",
          info: "Irish actor",
          birth: 1952,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/49/123966.jpg"
        },
        {
          id: 146,
          name: "Ronaldo",
          info: "Brazilian football player",
          birth: 1976,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/11/29961.jpg"
        },
        {
          id: 147,
          name: "Colin Farrell",
          info: "Irish actor",
          birth: 1976,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1588.jpg"
        },
        {
          id: 149,
          name: "Christopher Lloyd",
          info: "American actor",
          birth: 1938,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/87/218219.jpg"
        },
        {
          id: 151,
          name: "Hugh Grant",
          info: "British actor",
          birth: 1960,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/111174.jpg"
        },
        {
          id: 152,
          name: "Michael Winner",
          info: "British film director",
          birth: 1935,
          death: 2013,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/40/100297.jpg"
        },
        {
          id: 153,
          name: "Billy Joel",
          info: "American singer-songwriter",
          birth: 1949,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/112030.jpg"
        },
        {
          id: 154,
          name: "John McEnroe",
          info: "Amercian tennis player",
          birth: 1959,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/26/65675.jpg"
        },
        {
          id: 155,
          name: "Jane Russell",
          info: "American actress and model",
          birth: 1921,
          death: 2011,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/109/273909.jpg"
        },
        {
          id: 156,
          name: "Liza Minnelli",
          info: "American actress and singer",
          birth: 1946,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/36/91834.jpg"
        },
        {
          id: 157,
          name: "Hugh Hefner",
          info: "American magazine publisher",
          birth: 1926,
          death: 2017,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/31/79800.jpg"
        },
        {
          id: 158,
          name: "Robin Williams",
          info: "American actor and comedian",
          birth: 1951,
          death: 2014,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/3/8146.jpg"
        },
        {
          id: 159,
          name: "Ursula Andress",
          info: "Swiss-American actress",
          birth: 1936,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/40/102400.jpg"
        },
        {
          id: 161,
          name: "Steve Irwin",
          info: "Australian environmentalist and TV personality",
          birth: 1962,
          death: 2006,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/39/97603.jpg"
        },
        {
          id: 162,
          name: "Paul Walker",
          info: "American actor",
          birth: 1973,
          death: 2013,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/55/138054.jpg"
        },
        {
          id: 163,
          name: "Hulk Hogan",
          info: "American professional wrestler",
          birth: 1953,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/22/57403.jpg"
        },
        {
          id: 164,
          name: "Heath Ledger",
          info: "Australian actor and director",
          birth: 1979,
          death: 2008,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/112055.jpg"
        },
        {
          id: 165,
          name: "Tony Scott",
          info: "British director",
          birth: 1944,
          death: 2012,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/121/303167.jpg"
        },
        {
          id: 166,
          name: "Mick Jagger",
          info: "British singer-songwriter",
          birth: 1943,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/112178.jpg"
        },
        {
          id: 167,
          name: "Stirling Moss",
          info: "British racing driver",
          birth: 1929,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/86/215707.jpg"
        },
        {
          id: 168,
          name: "Eric Idle",
          info: "British comedian, actor, singer and writer",
          birth: 1943,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/21/54344.jpg"
        },
        {
          id: 169,
          name: "Ayrton Senna",
          info: "Brazilian racing driver",
          birth: 1960,
          death: 1994,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/205/514773.jpg"
        },
        {
          id: 170,
          name: "Charlton Heston",
          info: "American actor",
          birth: 1923,
          death: 2008,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/55/139320.jpg"
        },
        {
          id: 172,
          name: "Burt Bacharach",
          info: "American pianist and composer",
          birth: 1928,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/96/242323.jpg"
        },
        {
          id: 173,
          name: "Dusty Springfield",
          info: "British singer",
          birth: 1939,
          death: 1999,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/43/109739.jpg"
        },
        {
          id: 174,
          name: "Karl Lagerfeld",
          info: "German fashion designer",
          birth: 1933,
          death: 2019,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/113261.jpg"
        },
        {
          id: 175,
          name: "Lynda Bellingham",
          info: "British actress",
          birth: 1948,
          death: 2014,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/30/75872.jpg"
        },
        {
          id: 176,
          name: "Gary Coleman",
          info: "American actor",
          birth: 1968,
          death: 2010,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/95/237514.jpg"
        },
        {
          id: 177,
          name: "Glenn Close",
          info: "American actress",
          birth: 1947,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/116/291355.jpg"
        },
        {
          id: 178,
          name: "David Cassidy",
          info: "American actor and singer",
          birth: 1950,
          death: 2017,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/8/22417.jpg"
        },
        {
          id: 180,
          name: "John Candy",
          info: "Canadian actor and comedian",
          birth: 1950,
          death: 1994,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/159/398905.jpg"
        },
        {
          id: 181,
          name: "Ray Charles",
          info: "American singer-songwriter",
          birth: 1930,
          death: 2004,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/45/113553.jpg"
        },
        {
          id: 182,
          name: "Zsa Zsa Gábor",
          info: "Hungarian-born American actress and socialite",
          birth: 1917,
          death: 2016,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/89/224400.jpg"
        },
        {
          id: 184,
          name: "Jennifer Aniston",
          info: "American actress",
          birth: 1969,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/3/8021.jpg"
        },
        {
          id: 185,
          name: "Mel Brooks",
          info: "American actor and filmmaker",
          birth: 1926,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/33/83017.jpg"
        },
        {
          id: 186,
          name: "Terry Gilliam",
          info: "British filmmaker and actor",
          birth: 1940,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/145/362552.jpg"
        },
        {
          id: 188,
          name: "Elizabeth II",
          info: "British monarch",
          birth: 1926,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/73/184088.jpg"
        },
        {
          id: 189,
          name: "Kathleen Turner",
          info: "American actress",
          birth: 1954,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/174/435281.jpg"
        },
        {
          id: 190,
          name: "Brandon Lee",
          info: "American actor and martial artist",
          birth: 1965,
          death: 1993,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/72/181574.jpg"
        },
        {
          id: 192,
          name: "Paul McCartney",
          info: "British singer-songwriter",
          birth: 1942,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/158/396776.jpg"
        },
        {
          id: 193,
          name: "Jack Lemmon",
          info: "American actor",
          birth: 1925,
          death: 2001,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/100/251224.jpg"
        },
        {
          id: 194,
          name: "Sean Penn",
          info: "American actor and filmmaker",
          birth: 1960,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/35/89328.jpg"
        },
        {
          id: 195,
          name: "Bernie Nolan",
          info: "Irish singer and actress",
          birth: 1960,
          death: 2013,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/44/111163.jpg"
        },
        {
          id: 196,
          name: "Alison Steadman",
          info: "British actress",
          birth: 1946,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/29/74887.jpg"
        },
        {
          id: 197,
          name: "Paul Newman",
          info: "American actor and director",
          birth: 1925,
          death: 2008,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/159/398920.jpg"
        },
        {
          id: 198,
          name: "Francis Ford Coppola",
          info: "American director",
          birth: 1939,
          death: 0,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/102/257191.jpg"
        },
        {
          id: 200,
          name: "Isaac Hayes",
          info: "American singer-songwriter and actor",
          birth: 1942,
          death: 2008,
          image_url: "http://static.tvmaze.com/uploads/images/medium_portrait/36/90011.jpg"
        }
      ]);
    });
};
