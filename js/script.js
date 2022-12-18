const navToggler = document.getElementById('nav-toggler')
const collapseSidebar = document.getElementById('collapsed-sidebar')
const expandSidebar = document.getElementById('expanded-sidebar')
const sidebar = document.querySelector('aside');
const mainDisplay =document.querySelector('.main-display');

function toggleSidebar () {
    // Collapse Sidebar
    if (collapseSidebar.classList.contains('hidden')) {
        collapseSidebar.classList.remove('hidden')
        expandSidebar.classList.add('hidden')
        sidebar.style = 'grid-column: 1/2;';
        mainDisplay.style = 'grid-column: 2/-1'
    // Expand Sidebar
    } else if (expandSidebar.classList.contains('hidden')) {
        expandSidebar.classList.remove('hidden')
        collapseSidebar.classList.add('hidden')
        sidebar.style = 'grid-column: 1/4;';
        mainDisplay.style = 'grid-column: 4/-1'
    }
}


navToggler.addEventListener('click', toggleSidebar);
