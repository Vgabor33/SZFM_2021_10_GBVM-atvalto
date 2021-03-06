'use strict';

class Measurement {
    /**
     * @callback Fun1
     * @param {number} x
     * @returns {number}
     */

    /**
     * @param {string} group the measurement group
     * @param {string} name the measurement name
     * @param {Fun1} normalize the normalization function which transforms the units to the chosen base unit
     * @param {Fun1} transform the transform function which transforms the base unit to this one
     */
    constructor(group, name, normalize, transform) {
        this.group = group
        this.name = name
        this.normalize = x => normalize(+x)
        this.transform = x => transform(+x)
    }
}
class CustomMeasurement extends Measurement {
    /**
     * @param {string} group the measurement group
     * @param {string} name the measurement name
     * @param {string} normalizeFunctionString the javascript source for the normalize function
     * @param {string} transformFunctionString the javascript source for the transform function
     */
    constructor(group, name, normalizeFunctionString, transformFunctionString) {
        const normalizeFunction = x=>Function("let x = arguments[0];"+normalizeFunctionString)(x)
        const transformFunction = x=>Function("let x = arguments[0];"+transformFunctionString)(x)
        super(group, name, normalizeFunction, transformFunction)
        this.normFun = normalizeFunctionString
        this.transFun = transformFunctionString
    }
}

const measurements = [
          /*              Measurement group,  Abrv,    Normalization function,    Transform function  */
          new Measurement("length",           "cm",    x => x,                    x => x),
          new Measurement("length",           "m",     x => x * 100,              x => x / 100),
          new Measurement("length",           "in",    x => x * 2.54,             x => x / 2.54),
      
          new Measurement("pressure",         "Pa",    x => x,                    x => x),
          new Measurement("pressure",         "atm",   x => x / 101325,           x => x * 101325),
          new Measurement("pressure",         "bar",   x => x / 100000,           x => x * 100000),
      
          new Measurement("temperature",      "K",     x => x,                    x => x),
          new Measurement("temperature",      "??C",    x => x + 273.15,           x => x - 273.15),
          new Measurement("temperature",      "??F",    x => 5 / 9 * (x - 32),     x => 9 / 5 * x +32),
    new CustomMeasurement("temperature",      "??Ra",   "return x/1.8",           "return x*1.8")
]
const groups = new Set(measurements.map(x => x.group))


function onLoad() {
    const inputSelect = document.getElementById("input_select")
    const outputSelect = document.getElementById("output_select")

    populateMeasurementSelection(inputSelect)
    populateMeasurementSelection(outputSelect, inputSelect.options[0]?.jsObj?.group)
}


function populateMeasurementSelection(sender, groupRestriction = null) {
    // Get currently selected option.
    const prevSelectedMeasurement = sender.selectedOptions?.[0]?.jsObj

    sender.replaceChildren()

    // Map of measurement groups to their respective DOM elements
    const groupToElems = new Map()

    const addGroupToDocument = (group) => {
        const opGroupElem = document.createElement('optgroup')
        opGroupElem.label = measurementTranslations.get(group)[document.getElementById("lang").value ?? "eng"] ?? group
        sender.appendChild(opGroupElem)
        groupToElems.set(group, opGroupElem)
    }

    // Populate sender with optGroups
    if(groupRestriction === null){
        groups.forEach(addGroupToDocument)
    }else{
        addGroupToDocument(groupRestriction)
    }

    // Populate optGroups with measurements
    let newSelected
    measurements.forEach(elem => {
        if(groupToElems.has(elem.group)){
            const opElem = document.createElement('option')
            opElem.text = elem.name
            opElem.jsObj = elem

            groupToElems.get(elem.group).appendChild(opElem)
            if(opElem.jsObj === prevSelectedMeasurement){
                // Set sender's selected index to opElem with current measurement
                sender.selectedIndex = opElem.index
                newSelected = opElem
            }
        }
    });

    console.log("Populated: ", sender,
    "\ngroup restriction: ", groupRestriction,
    "\nprev: ", prevSelectedMeasurement?.name,
    "\nnew:  ", newSelected?.jsObj.name)
}

const measurementTranslations = new Map([
    ["length",          {hun: "Hossz",          eng: "Length"}],
    ["pressure",        {hun: "Nyom??s",         eng: "Pressure"}],
    ["temperature",     {hun: "H??m??rs??klet",    eng: "Temperature"}]
])

function updateResult() {
    console.log("updateResult Called! ---------------")
    
    const inSelectElem = document.getElementById("input_select")
    const inOptionElem = inSelectElem.selectedOptions[0]
    const inNumberElem = document.getElementById("input_number")

    const outSelectElem = document.getElementById("output_select")
    const outOptionElem = outSelectElem.selectedOptions[0]
    const outNumberElem = document.getElementById("output_number")

    const inNumNorm = inOptionElem.jsObj.normalize(inNumberElem.value)
    const outNum = outOptionElem.jsObj.transform(inNumNorm)

    console.log("input: ", inNumberElem.value, 
               "\nfrom measurement: ", inOptionElem.jsObj,
               "\nnormalized to: ", inNumNorm,
               "\ntransformed into: ", outNum,
               "\nto measurement: ", outOptionElem.jsObj)

    outNumberElem.value = outNum
    populateMeasurementSelection(inSelectElem)
    populateMeasurementSelection(outSelectElem, inOptionElem.jsObj.group)
}

module.exports = {Measurement, measurements};

function reverseSelection() {
    
    const inSelectElem = document.getElementById("input_select")
    const inOptionElem = inSelectElem.selectedOptions[0]
    const inMeasurement = inOptionElem.jsObj
    const inNumberElem = document.getElementById("input_number")

    const outSelectElem = document.getElementById("output_select")
    const outOptionElem = outSelectElem.selectedOptions[0]
    const outMeasurement = outOptionElem.jsObj
    const outNumberElem = document.getElementById("output_number")

    for (const inOption of inSelectElem.options) {
        if(inOption.jsObj === outMeasurement) {
            inSelectElem.selectedIndex = inOption.index
            break
        }
    }

    for(const outOption of outSelectElem.options) {
        if(outOption.jsObj === inMeasurement) {
            outSelectElem.selectedIndex = outOption.index
            break
        }
    }

    inNumberElem.value = outNumberElem.value

    updateResult()
}

function changeLanguage() {
    
    var currentLanguage = document.getElementById("lang").value

    var headerText = document.getElementById("header")
    var td1Text = document.getElementById("td1")
    var td2Text = document.getElementById("td2")
    var languageText = document.getElementById("lang_text")
    var englishText = document.getElementById("eng")
    var hungarianText = document.getElementById("hun")
    var countryText = document.getElementById("country")
    var usaText = document.getElementById("usa")
    var myanText = document.getElementById("myan")
    var libText = document.getElementById("lib")
    var otherText = document.getElementById("other")
    var reverseButtonText = document.getElementById("reverse_button")

    if(currentLanguage == "hun")
    {
        headerText.innerText="??tv??lt??"
        td1Text.style.visibility = "hidden"
        td2Text.style.visibility = "hidden"
        languageText.innerText="Nyelv:"
        englishText.innerText="Angol"
        hungarianText.innerText="Magyar"
        countryText.innerText="Orsz??g:"
        usaText.innerText="Egyes??lt ??llamok"
        myanText.innerText="Mianmar"
        libText.innerText="Lib??ria"
        otherText.innerText="M??s orsz??g"
        reverseButtonText.value = "Megford??t"

    }
    else
    {
        headerText.innerText="Imperial/Metric converter"
        td1Text.style.visibility = "visible"
        td2Text.style.visibility = "visible"
        languageText.innerText="Language:"
        englishText.innerText="English"
        hungarianText.innerText="Hungarian"
        countryText.innerText="Country:"
        usaText.innerText="USA"
        myanText.innerText="Myanmar"
        libText.innerText="Liberia"
        otherText.innerText="Other"
        reverseButtonText.value = "Reverse"
    }
    updateResult()
}
