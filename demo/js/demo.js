var rfa = require ('../../dist');

var options = new rfa.WebViewerOptions(
    'linear-gradient(141deg, #5D8CAE 0%, #317589 51%, #4D8FAC 75%)', // body background styling
    true,   // move scene origin to model center (calculated via bounding sphere)
    0.0009  // rotation speed and direction (backwards if negative)
);

var viewer = new rfa.WebViewer(options);                            // Create viewer object
viewer.init(document.getElementById('main'));                       // Set HTML host element
viewer.loadModelFromUrl('./models/6-Burner_Gas_Stove.json');        // Load the model from JSON file

console.log('Revit Web Viewer has been initialized successfully!');