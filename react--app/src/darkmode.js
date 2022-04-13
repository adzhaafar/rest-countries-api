window.addEventListener('DOMContentLoaded', (event) => {
        let darkMode = localStorage.getItem('darkMode');
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
    // console.log(darkModeToggle)  

    
    const enableDarkMode = () => {
        // add darkmode class to body
        document.body.classList.add('darkmode');
        // update darkmode in local storage
        localStorage.setItem('darkMode', 'enabled')
    }


    const disableDarkMode = () => {
        // add darkmode class to body
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', null)
    }

    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    
    darkModeToggle.addEventListener('click', () => {
            darkMode = localStorage.getItem('darkMode')
            if (darkMode !== 'enabled') {
                enableDarkMode(darkMode); 
            } else {
                disableDarkMode(darkMode);
            }
        })
    
    
});

export * from "./darkmode.js"


