
const projectSheetUrl = "https://docs.google.com/spreadsheets/d/13HLU_ZBMDyL83EBfluhYT3sF_FEpLV2c97ypxa_pQec/edit?usp=sharing";

const projectSheetAsJSON = "https://spreadsheets.google.com/feeds/list/13HLU_ZBMDyL83EBfluhYT3sF_FEpLV2c97ypxa_pQec/od6/public/values?alt=json"

$('.menu-icon').click(function (e) { 
    e.preventDefault();
    $('.menu-items').toggleClass('menu-items-closed');
});


const addCard = (projectInfo) => {
    let $card =
    $(`<div class="project-card">
        <img src="${projectInfo.image}" alt="picture of site">
        <h3>${projectInfo.title}</h3>
        <p>${projectInfo.description}</p>
        <button type="button" class="btn btn-info"><a href="${projectInfo.url}">View Website/a></button>
    </div>`);
    // $card.css('background-image', `url(${projectInfo.image})`)
    // console.log(projectInfo);
    // let $card = $('<div>').addClass('project-card')
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
    console.log('aaa', data.feed.entry[0].title.$t)
    const projects = data.feed.entry.map(project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            url: project.gsx$url.$t,
            description: project.gsx$description.$t
        }
    })
    renderProjects(projects);
})
.catch(err => console.log("err", err));