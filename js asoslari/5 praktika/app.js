let numberOfSeries;
// console.log(numberOfSeries);

const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko`rdinggiz");
    }
  },
  detectLevelSeries: function () {
    if (numberOfSeries < 5) {
      console.log("Kam serial ko`ripsiz");
    } else if (numberOfSeries > 5 && numberOfSeries < 10) {
      console.log("Siz klassik tomoshabin ekansiz");
    } else {
      console.log("Siz serialchi zvezda ekansiz");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const serie = prompt("Oxigi ko`rgan serialinggiz"),
        price = +prompt("Nechi baho berasiz");
      if (serie != null && price != null && serie != "" && price != "") {
        seriesDB.series[serie] = price;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  showDB: function () {
    if (!seriesDB.privat) {
      seriesDB.detectLevelSeries(),
        seriesDB.rememberMySeries(),
        seriesDB.writeGenres();
      console.log(seriesDB);
    }
  },
  writeGenres: function () {
    for (let i = 0; i < 3; i++) {
      seriesDB.genres[i] = prompt(`Yahshi ko'rgan janiringgiz ${i + 1}`);
      while (seriesDB.genres[i] === "" || seriesDB.genres[i] === null) {
        seriesDB.genres[i] = prompt(`Yahshi ko'rgan janiringgiz ${i + 1}`);
      }
      seriesDB.genres.forEach(function () {
        console.log(
          `Yahshi korgan janiringgiz ${i + 1} - nomi ${seriesDB.genres[i]}  `
        );
      });
    }
  },
  visibleDB: function () {
    if (seriesDB.privat) {
      seriesDB.privat = false;
    } else {
      seriesDB.privat = true;
    }
  },
};

seriesDB.start();

seriesDB.showDB(
  seriesDB.detectLevelSeries,
  seriesDB.rememberMySeries,
  seriesDB.writeGenres,
  seriesDB.visibleDB
);
