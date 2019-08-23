function imagePage() {
    return `
    <div class="haq">
        <section class="projects">
            <a class="currentPro1"><img src="portfolio-scetch/StartScreen.png" alt="Workout App Start Screen Photo"><span
                    class="hidden">Virtual Partner</span></a>
            <a class="currentPro1"><img src="portfolio-scetch/FinalResults.png" alt="Workout App Final Results Photo"><span
                    class="hidden">Virtual Partner</span></a>
        </section>
      <section class="information">
      <h3>Workout Partner</h3>
      <p> I created this app to give users the ability to look up exercises for their workout. It allows them to search for a specific exercise, if they know what they want, or for a body group.  In either option, they are provided with a description and three youtube videos to further their understanding of the exercise of choice.</p> 

      <p>The API comes from both "youtube" and "wger REST API" for the exercises. The user is given all the exercises in the data base that are in english and the group, that runs "wger REST API", deems is complete in their format. It is my belief that for someone looking for a quick look up on the go they app provides it for them.   
      </p>

      <p>Technolgy used:</p>
      <div id="list-wp">
        <div class="horizontal">
          <ul class="tech-list">
              <li>Html</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
           </ul>
       </div>
      </div>
   <div id="references-wp">
      <p><a href="https://github.com/thorn086/workout-partner/" target="_blank">GitHub Repo </a></p>

      <p><a href="https://thorn086.github.io/workout-partner/" target="_blank">Live Link </a></p>
   </div>
      </section>
    </div>`;
}

function displayPage() {
    $('.projects').on('click', 'img', function (event) {

        return $('#workout').html(imagePage());
              
    });
}

function removeParagraph(){
    $('.projects').on('click','img', function (event){
        return $('#click').remove();
    });
}

function displayRender(){
    displayPage()
    removeParagraph()
}

$(displayRender());