
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();

/// Define List (li) and add it under ID navbar__list to create new tabs and containing its name (section x)
sections.forEach( (elem) => {
 	const dataNav = elem.getAttribute("data-nav");
    const newLi = document.createElement ("li");
    const newLink = document.createElement ('a');
    const textnode = document.createTextNode(dataNav);

    // create a listner based on current section which pressed click to move smoothly.
    newLink.addEventListener ("click", () => {
        elem.scrollIntoView({behavior:"smooth"});
    } );
    /// start to encapsulate all data in one container named fragment then use it out of for loop to improve performance.
    newLink.appendChild(textnode);
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);

});
nav.appendChild(fragment);


// create a listner based on this position and take an action to remove and add for active class.
window.addEventListener('scroll', () => {
    sections.forEach( (sec) => {
        const rectact = sec.getBoundingClientRect();    
        /// put if condition to add class name "your-active-class" and change color or this section a bit
        if (rectact.top >= -50 && rectact.top <= 250) {
            sec.classList.add('your-active-class');
            sec.style.background ="linear-gradient(0deg, rgba(200,200,200,250) 0%, rgba(200,200,200,0) 100%)";
            const activeDataNav = sec.getAttribute ("data-nav");
            const currentLi = document.querySelectorAll("li");
            /// once class "your-active-class" added so, change the color of tab to be gray, if not so return back white
            currentLi.forEach ( (existLi) => {
                if (existLi.innerText ==activeDataNav){
                    existLi.style.background = "gray";
                } else {
                    existLi.style.background = "white";
                }
            })
          /// if the current section became not active so remove class named "your-active-class" and return back the background color 
        } else {
            sec.classList.remove('your-active-class');
            sec.style.background = "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)";
            
        };
 
    });

 
});
