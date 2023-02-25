const toggleBtn = document.querySelector(".sidebar-toggle") /*accessing the hamburger menu button*/
const closeBtn = document.querySelector(".close-btn") /*accessing the red X button*/
const sidebar = document.querySelector(".sidebar") /**accessing and editing the sidebar */

// now since i am accessing the buttons i want to add event listeners when i click on the buttons


toggleBtn.addEventListener("click", function() {
    console.log(sidebar.classList);
    if(sidebar.classList.contains('show-sidebar')){ 
        /*if the sidebar has (contains) the class called 
    show-sidebar class ALREADY then i would want to remove it */

    sidebar.classList.remove('show-sidebar')
    }
    // if it does NOT have the show-sidebar class already then i would want to add it (else statment)
    else{
        sidebar.classList.add('show-sidebar') 
    }
})

//  i am checking if the sidebar that i have selected has the class of show-sidebar
// if it DOES NOT then i will add the show sidebar class

// if the sidebar already has the class of show-sidebar class then i will remove it from the sidebar


