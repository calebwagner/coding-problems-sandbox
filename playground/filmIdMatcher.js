const matchPersonToFilms2 = () => {
    let matchedFilms = [];
    let allFilmIds = [];
    let allFilmIdsSorted = [];
    const filmsArray = parseFilmUrls()

    allFilms.map(film => {
      allFilmIds.push(
        {
          film_title: film.title,
          episode_id: film.episode_id
        })
    })
    allFilmIds.sort()

    let sortedFilms = sortFilmsById(allFilmIds)

    // console.log("filmsArray --> ", filmsArray)
    // console.log("sortedFilms --> ", sortedFilms)


        for (let i = 0; i < sortedFilms.length; i++) {
            // const personFilm = filmsArray[i];
            let count = 0
            console.log(`${sortedFilms[i].episode_id} == ${filmsArray[i]}`)
            if (sortedFilms[i].episode_id == filmsArray[count]) {
              console.log("HERE")
                matchedFilms.push(sortedFilms[count].film_title)
                count++
            }
        }
    console.log("matchedFilms --> ", matchedFilms)
    return matchedFilms
  }

  function sortFilmsById(array) {
    let swaps = 0;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].episode_id > array[i + 1].episode_id) {
        [array[i].episode_id, array[i + 1].episode_id] = [array[i + 1].episode_id, array[i].episode_id];
        [array[i].film_title, array[i + 1].film_title] = [array[i + 1].film_title, array[i].film_title];
        swaps++;
      }
    }
    return swaps === 0 ? array : sortFilmsById(array);
  }

  // console.log(bubbleSort(array))