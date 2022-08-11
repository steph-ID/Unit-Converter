const section = document.getElementById("conversions");
const convertBtn = document.getElementById("convert-button");
const conversions = [
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
    {
        name: "Length (Meters/Feet)",
        metricUnit: "meters",
        imperialUnit: "feet",
        multiplier: 3.281
    },
    {
        name: "Volume (Liters/Gallons)",
        metricUnit: "liters",
        imperialUnit: "gallons",
        multiplier: 0.264
    },
    {
        name: "Mass (Kilograms/Pounds)",
        metricUnit: "kilos",
        imperialUnit: "pounds",
        multiplier: 2.204
    }
];

function convertMeasurement(value, multiplier) {
    let imperial = (value * multiplier).toFixed(3);
    let metric = (value / multiplier).toFixed(3);
    return [imperial, metric];
}

function renderConversions() {
    const inputValue = document.getElementById("unit-input").value;
    let htmlDivs = '';
    let i = 0;
    for(let conversion of conversions) {
        const convertedUnits = convertMeasurement(inputValue, conversion.multiplier);
        htmlDivs += `
            <div class="conversion-div">
                <h2>${conversion.name}</h2>
                <p>${inputValue} ${conversion.metricUnit} = ${convertedUnits[0]} ${conversion.imperialUnit} | ${inputValue} ${conversion.imperialUnit} = ${convertedUnits[1]} ${conversion.metricUnit}</p>
            </div>
        `;
    }
    section.innerHTML = htmlDivs;
}

convertBtn.addEventListener("click", function() {
    renderConversions();
});

renderConversions();
