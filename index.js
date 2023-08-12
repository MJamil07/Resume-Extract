const fs = require('fs');
const pdf = require('pdf-parse');

// * Import patterns
const languages = require('./patterns/language');
const positions = require('./patterns/position');
const skills = require('./patterns/skills');
const locationPattern = require('./patterns/locations')


// * find emails using regex
const findEmails = (text) => {
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
    return text.match(emailPattern) || [];
};

// *  find phone numbers using regex
const findPhoneNumbers = (text) => {
    const phonePattern = /(\+\d{1,3}[- ]?)?\d{10}/g;
    return text.match(phonePattern) || [];
};

// * find the location
const findLocations = (text) => {
    return text.match(locationPattern.tamilnaduPattern) || text.match(locationPattern.indiaPattern)
}

// * find the experience

const findExperience = (text) => {
    const datePattern = /(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)\s*-\s*(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)/gi;
    const dateWithCurrentPattern = /(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)\s*-\s*(\b(?:current|\d{4})\b)/gi;
    const experienceFieldPattern = /\b(?:Work Experience|Employment History|Professional Experience|Career History|Job History)\b/i;

    let isExistExperience = false

    for (const line of text.split('\n')) {

        if (experienceFieldPattern.test(line)) {
            isExistExperience = true;
        }

        if (isExistExperience && datePattern.test(line)) {
            console.log(line);
        }

        if (isExistExperience && dateWithCurrentPattern.test(line)) {
            console.log(line);
        }
 
    }

    return text.match(datePattern)
}

// * Function to extract data from PDF
const extractData = async (filePath) => {
    try {
        const dataBuffer = await fs.readFileSync(filePath);
        const pdfData = await pdf(dataBuffer);
        return pdfData;
    } catch (error) {
        console.error('Error reading or parsing PDF:', error.message);
        return null;
    }
};

// * Function to extract data for a specific field pattern
const extractDataGivenField = (pdfText, fieldPatterns) => {
    const foundFields = [];
    fieldPatterns.forEach(pattern => {
        if (pattern.regex.test(pdfText)) {
            foundFields.push(pattern.name);
        }
    });
    return foundFields;
};

const extractDataInResume = async () => {
    const FILE = 'resumeE.pdf';
    
    // * Extract text and data from PDF
    const pdfdata = await extractData(FILE);

    
    if (!pdfdata) {
        console.log('Unable to extract data from the PDF.');
        return;
    }

    const resumeData = {
        name: pdfdata.info?.Author || pdfdata.info?.Title || 'unknown',
        email: findEmails(pdfdata.text),
        phone: findPhoneNumbers(pdfdata.text),
        positions: extractDataGivenField(pdfdata.text, positions),
        skills: extractDataGivenField(pdfdata.text, skills),
        languages: extractDataGivenField(pdfdata.text, languages),
        location : findLocations(pdfdata.text),
        experience : findExperience(pdfdata.text)
    };
     
    console.log(resumeData);
   
};

extractDataInResume();
