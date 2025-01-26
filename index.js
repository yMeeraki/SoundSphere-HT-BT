// Factory Function to create objects
const createGenre = (name, title,introduction, keyCharacteristics, notableArtists, influence) => {
    return {
        name, title,introduction, keyCharacteristics, notableArtists, influence
    };
  };


  const musicGenres = [
    createGenre("rock",
        "Rock",
        "Rock music emerged in the 1950s, blending blues, jazz, and country influences. It is characterized by energetic beats and electric guitar-driven melodies.",
        "Powerful guitar riffs, strong drum beats, expressive vocals",
        "The Beatles, Led Zeppelin, Queen, Nirvana",
        "Gave rise to subgenres like punk rock, alternative rock, and metal."
    ),
    createGenre("jazz",
        "Jazz",
        "Originating in the early 20th century, Jazz is known for its improvisational style and complex rhythms.",
        "Swing rhythm, brass instruments, spontaneous solos",
        "Louis Armstrong, Miles Davis, Duke Ellington",
        "Inspired genres like blues, bebop, and fusion jazz."
    ),
    createGenre("pop",
        "Pop",
        "Pop music is designed for mass appeal, with catchy melodies and repetitive structures.",
        "Simple, memorable tunes, electronic elements, danceable beats",
        "Michael Jackson, Madonna, Taylor Swift, The Weeknd",
        "Heavily influences mainstream culture and blends with electronic, hip-hop, and R&B styles."
    ),
    createGenre("classical",
        "Classical",
        "Classical music dates back centuries, featuring orchestral compositions with rich harmonies.",
        "Complex compositions, orchestral instruments, structured movements",
        "Mozart, Beethoven, Chopin, Philip Glass",
        "Forms the foundation of many modern music techniques and cinematic scores."
    )
];

// Example: Logging all genres
// musicGenres.forEach(genre => console.log(genre));


//  ===========================================================================
const display = (genre) => {
    document.getElementById('genres-detail-display').innerHTML = `
    <h2 class="card-title card-header text-bg-info ">${genre.title}</h2>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <strong>Introduction: </strong>${genre.introduction}
    </li>
    <li class="list-group-item">
      <strong>Key Characteristics: </strong>${genre.keyCharacteristics}
    </li>
    <li class="list-group-item">
      <strong>Notable Artists: </strong>${genre.notableArtists}
    </li>
    <li class="list-group-item">
      <strong>Influence: </strong>${genre.influence}
    </li>
  </ul>
    `;
  
}

function getParameterByName(name) {
    // Get ID from URL
    // console.log(window.location);
    let url = new URL(window.location.href);
    // console.log(typeof url);
    // console.log(url.searchParams.get(id));
    let genreName = url.searchParams.get(name);
  console.log(genreName)
    // Find the ID from database
    let genre;
    for (let i = 0; i < musicGenres.length; i++) {
      // console.log(employeeList[i].id + ' ' + selectedEmployeeId);
      if (musicGenres[i].name === genreName) {
        genre= musicGenres[i];
      }
    }
    if(genre){
        display(genre)
    }
}

getParameterByName('name')

