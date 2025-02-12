function removeCharacters(id, speed, ...params) {
    if (document.getElementById('button')) {
        document.getElementById('button').remove();
    }

    
    const getMainContent = document.getElementById(id);
    
    // setInterval runs continuously, per ms, until stopped
    const intervalId = setInterval(() => {
        const currentText = getMainContent.textContent;
        
        // Check if there's no text left to remove
        if (currentText.length === 0) {
            clearInterval(intervalId);

            if (params[0] != undefined) {
                removeCharacters(params.shift(), params.shift(), ...params);
            }

            return;
        }

        // Remove the last character from the text content
        getMainContent.textContent = currentText.slice(0, -1);
    }, speed); // Adjust the delay (in milliseconds) to control the speed
}