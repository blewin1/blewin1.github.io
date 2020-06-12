$(() => {
    const projectSheetUrl = "https://docs.google.com/spreadsheets/d/13HLU_ZBMDyL83EBfluhYT3sF_FEpLV2c97ypxa_pQec/edit?usp=sharing";

    const projectSheetAsJSON = "https://spreadsheets.google.com/feeds/list/13HLU_ZBMDyL83EBfluhYT3sF_FEpLV2c97ypxa_pQec/od6/public/values?alt=json"

    //open and close nav when clicking menu icon
    $('.menu-icon').click(function (e) { 
        e.preventDefault();
        $('.menu-items').toggleClass('menu-items-closed');
    });

    //close menu after clicking menu option
    $('nav a').click(function (e) { 
        $('.menu-items').addClass('menu-items-closed');
    });

    const addCard = (projectInfo) => {
        let $card =
        $(`<div class="project-card">
            <div class="project-title">
                <h3>${projectInfo.title}</h3>
            </div>
            <div class="project-overlay">
                <p>${projectInfo.description}</p>
                <a href="${projectInfo.url}" target="_blank"><button type="button" class="btn btn-info">View Website</button></a>
            </div>        
            <img src="${projectInfo.image}" alt="picture of site">
        </div>`);

        let $color = $(`<div class="project-color"></div>`).css('background-color', projectInfo.highlightColor);
        
        $card.prepend($color);
        $('.project-container').append($card);
    }

    const renderProjects = (projectsArr) => {
        projectsArr.forEach(project => {
            addCard(project);
        });
    }

    $.ajax({
        url: projectSheetAsJSON
    }).then(data => {
        const projects = data.feed.entry.map(project => {
            return {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                url: project.gsx$liveurl.$t,
                description: project.gsx$description.$t,
                highlightColor: project.gsx$highlightcolor.$t,
            }
        })
        renderProjects(projects);
    })
    .catch(err => console.log("err", err));
})