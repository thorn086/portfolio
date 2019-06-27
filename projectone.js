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
            <p class="about">This is a quiz based on the human body. It displays a series of ten questions that the user
                must select from.  It was made as a project to develope my skills using html,css,JavaScrip and Jquery.  
            </p>
            <p class="about">Technolgy used:
                <ul class="tech-list">
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                 </ul>
            </p>
            <p><a href="https://github.com/thorn086/Quiz-App-Assignment" target="_blank">GitHub Repo </a></p>

            <p><a href="https://thorn086.github.io/Quiz-App-Assignment/" target="_blank">Live Link </a></p>
        </section>
    </div>`;
}

function displayPage() {
    $('#projects').on('click', 'img', function (event) {

        return $('.currentPro').html(imagePage());
    });
}

$(displayPage());