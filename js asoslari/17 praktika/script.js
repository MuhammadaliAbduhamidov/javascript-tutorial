document.addEventListener("DOMContentLoaded", () => {
  const adv = document.querySelectorAll(".promo__adv img"),
    wrapper = document.querySelector(".promo__bg"),
    genre = wrapper.querySelector(".promo__genre"),
    seriesList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addingInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (e) => {
    let newSeries = addingInput.value;
    const favourite = checkbox.checked;
    e.preventDefault();

    // console.log(seriesDB.series);
    if (newSeries) {
      if (newSeries.lenght > 18) {
        newSeries = `${newSeries.substring(0, 18)}...`;
      }
      if (favourite) {
        console.log("Sevimli seriallar qo`shildi");
      }
      seriesDB.series.push(newSeries);
      sortArr(seriesDB.series);
      createSerieslist(seriesDB.series, seriesList);
    }
    e.target.reset();
  });

  const seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  const deleteAddv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };
  const makeChanges = () => {
    genre.textContent = "Comedy";

    wrapper.style.cssText = "background-image: url(./img/1.jpg)";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  const createSerieslist = (series, parent) => {
    parent.innerHTML = "";
    series.forEach((item, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">
        ${i + 1} 
       ${item}
        <div class="delete"></div>
      </li>
      
        `;
    });
    document.querySelectorAll(".delete").forEach((element, i) => {
      element.addEventListener("click", () => {
        element.parentElement.remove();
        seriesDB.series.splice(i, 1);
        console.log(seriesDB.series);
        createSerieslist(series, parent);
      });
    });
  };
  sortArr(seriesDB.series);
  deleteAddv(adv);
  makeChanges();
  createSerieslist(seriesDB.series, seriesList);
});
