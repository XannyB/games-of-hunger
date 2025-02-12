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

function revealCharacters(id, speed, ...params) {
    //code to remove and store content of each tag
    
    let contentArray = [].push(id, speed, ...params);
    let speedArray = [].push



    let clonedArray = [];

    for (i = 0; i < contentArray.length; i++) {
        clonedArray.push(contentArray[i.cloneNode(true)]);
    }

    const clonedContent = contentArray.cloneNode(true);

    console.log(contentArray);
    console.log(clonedContent);


    //code to delete overlay hiding 'real' web page

    //code to bring back content, starting with first tag.
}
