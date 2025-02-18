function removeCharacters(id, speed, ...params) {
    // remove button first
    if (document.getElementById("button")) {
        document.getElementById("button").remove();
    }

    const getMainContent = document.getElementById(id);  //get by id
    let currentP = undefined;
    let mainContent;

    if (getMainContent.getElementsByTagName('p').length > 0) {
        let pNum = getMainContent.getElementsByTagName('p').length - 1;
        currentP = getMainContent.getElementsByTagName('p')[pNum];
        mainContent = currentP;
    } else {
        mainContent = getMainContent;
    }

    // setInterval runs continuously, per ms, until stopped
    const intervalId = setInterval(() => {
        const currentText = mainContent.textContent;

        // Check if there's no text left to remove

        if (currentText.length === 0) {

            clearInterval(intervalId);

            if (currentP) {
                currentP.remove();
                removeCharacters(id, speed, ...params);
                return;
            }

            if (params[0] != undefined) {
                removeCharacters(params.shift(), params.shift(), ...params); //Takes a function, and one argument (speed)
            }

            return;
        }

        // Remove the last character from the text content
        mainContent.textContent = currentText.slice(0, -1);
    }, speed); // Adjust the delay (in milliseconds) to control the speed
}

function removeContent () {

}

function writeContent () {
    
}

function revealCharacters(...params) { // id then speed
    //code to store all html tag information into an array
    
    //code to remove and store content of each tag
    
    let newContentArray = [];
    let speedArray = [];

    for (let i = 0; i < arguments.length; i++){
        if (i == 0 || i % 2 == 0){
            const idContent = document.getElementById(arguments[i]);
            newContentArray.push(idContent); // even adds content by id
        } else {
            speedArray.push(arguments[i]); // odd adds speed values per id
        }
    }

    console.log(newContentArray);
    console.log(speedArray);

    //code to delete overlay hiding 'real' web page

    //code to bring back content, starting with first tag.
}
