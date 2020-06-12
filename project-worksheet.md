# Project Overview

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 0| Project Description | Complete
|Day 0| Wireframes / Timeline | Complete
|Day 1| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 2| Responsive Nav | Complete
|Day 2| Contact Form | Complete
|Day 3| Project Grid functionality | Complete
|Day 4| Bugfixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


## Project Description

This project will be a portfolio website to show who I am, and show some projects I've completed.

Some examples of features I will include:

| Link to Site | Feature to be used 
|---|---|
https://mattfarley.ca/ | Projects grid and hover
https://sebkay.com/contact/ | Contact Layout
http://eloise-ress-barrow.surge.sh/index.html | footer layout and header layout


Other features I'd like to include:

- Top Nav disappears when scrolling on mobile, but reappears at any page location when you scroll back up
- Nav menu auto highlighting on desktop and tablet

Wireframes can be seen below.

## Google Sheet

Project is linked in the google sheet [here](https://docs.google.com/spreadsheets/d/1UnhpYCWFX9LxGuhoe5E1K74271K-VAcVojIuR0XM57A/edit#gid=0)

## Wireframes

Mobile Wireframe:

- Single page design
- Top nav with hamburger menu (menu opens full screen width not shown)
- All elements are stacked

Desktop/Tablet Wireframe:

- The only difference between Desktop and Mobile is that the project grid changes dimensions
- The header and footer are always visible, page scrolls within them
- Nav bar ideally includes auto highlighting as you scroll through the page

[View Wireframes Here](https://res.cloudinary.com/blewin1/image/upload/v1591621057/Wireframes/portfolio-wireframes_t7q7dc.jpg)


## Time/Priority Matrix 

#### MVP 

- Pull data using google json api
- Render data on page 
- Hamburger Menu
- Responsive Nav
- Project Grid w/ hover descriptions
- Contact form
- Links on footer

#### PostMVP 

- Nav Autohighlight
- Nav buttons smooth scroll
- Mobile Nav Scroll Away and back

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 1hr | 1hr | 1hr|
| Project Grid | H | 1hr | .5hr | .5hr |
| Responsive Nav | H | 1hr | .5hr | .5hr|
| Project Grid Overlay | H | 2hrs| 2hr | 2hrs |
| Filling in Content | M | 2hrs | 3hrs | 3hrs|
| Working with API | H | 1.5hrs| 0.5hr | 0.5hr |
| Contact Form | H | 1hr | 1hr | 1hr|
| Overall Styling | H | 3hrs | 3hr | 3hr |
| Social Media Icons | L | 1hr | 0hr | 0hr|
| Total | H | 13.5hrs| 11.5hrs | 11.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Nav Auto Highlight | L | 2hr | -hr | -hr|
| Nav buttons smooth scroll | L | 2hr | .5hr | .5hr|
| Mobile Nav Scroll away and back | M | 3hr | -hr | -hr|
| Total | H | 7hrs| .5hrs | .5hrs |

## Additional Libraries
 I used Bootstrap for the form fields, and for button formatting.

## Code Snippet

The following code creates the project matrix.  It creates several layers:
	- A project title (which ends up on the top)
	- A project overlay (with the description and a link to the project)
	- An image layer, with the image of the project to display
	- A color layer, which allows for a translucent color layer to be applied over the image

When connected to some clever CSS, this code makes a very satisfying project card with an interactive overlay.

```
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
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.


**ERROR**: Header and footer overflow the width when set to position: fixed;          
**RESOLUTION**: Set left: 0; and right: 0; rather than trying to use width: 100% or width: 100vw;


**ERROR**: Flexbox broke when I added Bootstrap.
**RESOLUTION**: My main stylesheet needed to be moved to below the bootstrap stylesheet.