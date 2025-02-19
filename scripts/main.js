async function loadYaml(file) {
    try {
        // Fetch the YAML file content
        const response = await fetch('data/'+ file + '.yml');
        console.log(response);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch YAML file: ${response.statusText}`);
        }

        const yamlText = await response.text(); // Get the YAML text
        const mainPageData = jsyaml.load(yamlText); // Parse YAML into a JavaScript object

        // renderContentFromData(mainPageData);
        console.log("worked");

    } catch (error) {
        console.error('Error loading YAML:', error);
    }
}