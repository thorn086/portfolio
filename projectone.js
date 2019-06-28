function imagePage() {
    return `
    <div class="haq">
        <section id="projects">
            <a class="currentPro"><img src="portfolio-scetch/Quiz-App.png" alt="Quiz App Photo"><span
                    class="hidden">Quiz
                    App</span></a>
            <a class="currentPro"><img src="portfolio-scetch/question.png" alt="Quiz App Photo"><span
                    class="hidden">Quiz
                    App</span></a>
        </section>
      <section class="information">
            <h3>Human Anatomy Quiz</h3>
            <p> I created this quiz to display my knowledge on human anatomy.  
                It allows users to test their knowledge and compare if the are as smart 
                as a doctor.  It has ten total questions, a right and wrong feedback and 
                restart feature for the user to play with.    
            </p>
            <p>Technolgy used:</p>
            <div id="list">
              <div class="horizontal">
                <ul class="tech-list">
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                 </ul>
             </div>
            </div>
         <div id="references">
            <p><a href="https://github.com/thorn086/Quiz-App-Assignment" target="_blank">GitHub Repo </a></p>

            <p><a href="https://thorn086.github.io/Quiz-App-Assignment/" target="_blank">Live Link </a></p>
         </div>
      </section>
    </div>`;
}

function displayPage() {
    $('#projects').on('click', 'img', function (event) {

        return $('.currentPro').html(imagePage());
    });
}

$(displayPage());