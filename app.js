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

    // this is the second and shorter of toggling the hamburger menu
    // sidebar.classList.toggle('show-sidebar')
});

//  i am checking if the sidebar that i have selected has the class of show-sidebar(line 9)
// if it DOES NOT then i will add the show sidebar class(line 18)

// if the sidebar already has the class of show-sidebar class then i will remove it from the sidebar (line 14)


// 4:39 WORKING ON CLOSE BUTTON to close the sidebar

closeBtn.addEventListener("click", function() {
    console.log(sidebar.classList)
    sidebar.classList.remove('show-sidebar')
})


// in the css i hide the sidebar by DEFAULT (LINE 250)

//  THEN TOGGLE CLASS THAT HAS THE VALUE OF transform:trnaslate(0)

// SETUP THE CSS BEFORE MOVING ONTO THE JAVASCRIPT








