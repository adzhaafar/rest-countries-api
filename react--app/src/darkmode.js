window.addEventListener('DOMContentLoaded', (event) => {
        let darkMode = localStorage.getItem('darkMode');
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
    // console.log(darkModeToggle)  
    
    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkMode', 'enabled')
    }


    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', null)
    }
    
    
        darkModeToggle.addEventListener('click', () => {
            
        })
    
    
});

export * from "./darkmode.js"


