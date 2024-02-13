const darkMode = () =>{

    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    // state
    const theme = localStorage.getItem('theme')
    // on mount
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme','light-mode')
        }else{
            localStorage.removeItem('theme')
            document.body.removeAtrribute('class');
        }
    }

    // Events
    themeToggleBtns.forEach(btn=> 
        btn.addEventListener('click', handleThemeToggle)
    );

// Code readablity is more important than performance
};
export default darkMode;