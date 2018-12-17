window.addEventListener('DOMContentLoaded', () => {
    
    /* Sidebar Menu */
    const sidebarContainer = document.getElementById('sidebar-container');
    const backgroundOverlay = document.getElementById('background-overlay');
    const footerContainer = document.getElementById('footer-container');

    function toggleSidebarMenu() {
        // Check if sidebar is currently closed
        if (backgroundOverlay.style.display === 'none')
        {
            // get the width of the sidebar menu
            const sidebarscrollWidth = parseInt(sidebarContainer.scrollWidth);

            sidebarContainer.style.maxWidth = sidebarscrollWidth * 2 + 'px';
            backgroundOverlay.style.display = 'block';
            footerContainer.style.display = 'none';
            // const navMenuMaxWidth = parseInt(dropdownMenu.scrollWidth);
            // // Expand the category drop down menu
            // navContainer.style.maxHeight = '100vh';
            // navContainer.style.maxHeight = navMenuMaxHeight * 4 + 'px';
            // // Set Button Styles
            // document.getElementById('nav-search-categories').style.backgroundColor = '#334a58';
            // // Change arrow direction to point up
            // document.getElementById('nav-button-expand-more').style.display = 'none';
            // document.getElementById('nav-button-expand-less').style.display = 'block';
        }
        else {
            // Close the sidebar menu
            sidebarContainer.style.maxWidth = '0px';
            setTimeout(() => {
                backgroundOverlay.style.display = 'none';
            }, 300);
            setTimeout(() => {
                footerContainer.style.display = 'block';
            }, 500);
            
        }
    };

    // Trigger to open category dropdown menu
    document.getElementById('header-nav-icon').addEventListener('click', () => {
        toggleSidebarMenu();
    });

    // Trigger to close category dropdown menu
    document.getElementById('sidebar-close-icon').addEventListener('click', () => {
        toggleSidebarMenu();
    });

});