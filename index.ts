import * as fs from 'fs';
import * as pdf from 'pdf-parse';

// Import patterns
import languages from './patterns/language';
import positions from './patterns/position';
import skills from './patterns/skills';
import { tamilnaduPattern , indiaPattern } from './patterns/locations';

// Define types
interface FieldPattern {
    name: string;
    regex: RegExp;
}

interface ResumeData {
    name: string;
    email: string[];
    phone: string[];
    positions: string[];
    skills: string[];
    languages: string[];
    location: string[] | null;
    experience: string[] | null;
}

// Find emails using regex
const findEmails = (text: string): string[] => {
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
    return text.match(emailPattern) || [];
};

// Find phone numbers using regex
const findPhoneNumbers = (text: string): string[] => {
    const phonePattern = /(\+\d{1,3}[- ]?)?\d{10}/g;
    return text.match(phonePattern) || [];
};

// Find the location
const findLocations = (text: string): string[] | null => {
    return text.match(tamilnaduPattern) || text.match(indiaPattern);
};

// Find the experience
const findExperience = (text: string): string[] | null => {
    const datePattern = /(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)\s*-\s*(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)/gi;
    const dateWithCurrentPattern = /(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)\s*-\s*(\b(?:current|\d{4})\b)/gi;
    const experienceFieldPattern = /\b(?:Work Experience|Employment History|Professional Experience|Career History|Job History)\b/i;

    let isExistExperience = false;
    const experienceLines: string[] = [];

    for (const line of text.split('\n')) {
        if (experienceFieldPattern.test(line)) {
            isExistExperience = true;
        }

        if (isExistExperience && datePattern.test(line)) {
            experienceLines.push(line);
        }

        if (isExistExperience && dateWithCurrentPattern.test(line)) {
            experienceLines.push(line);
        }
    }

    return experienceLines.length > 0 ? experienceLines : null;
};

// Function to extract data from PDF
const extractData = async (filePath: string): Promise<pdf.PDFData | null> => {
    try {
        const dataBuffer = await fs.promises.readFile(filePath);
        const pdfData = await pdf(dataBuffer);
        return pdfData;
    } catch (error) {
        console.error('Error reading or parsing PDF:', error.message);
        return null;
    }
};

// Function to extract data for a specific field pattern
const extractDataGivenField = (pdfText: string, fieldPatterns: FieldPattern[]): string[] => {
    const foundFields: string[] = [];
    fieldPatterns.forEach(pattern => {
        if (pattern.regex.test(pdfText)) {
            foundFields.push(pattern.name);
        }
    });
    return foundFields;
};

const extractDataInResume = async (): Promise<void> => {
    const FILE = 'resumeE.pdf';

    // Extract text and data from PDF
    const pdfdata = await extractData(FILE);

    if (!pdfdata) {
        console.log('Unable to extract data from the PDF.');
        return;
    }

    const resumeData: ResumeData = {
        name: pdfdata.info?.Author || pdfdata.info?.Title || 'unknown',
        email: findEmails(pdfdata.text),
        phone: findPhoneNumbers(pdfdata.text),
        positions: extractDataGivenField(pdfdata.text, positions),
        skills: extractDataGivenField(pdfdata.text, skills),
        languages: extractDataGivenField(pdfdata.text, languages),
        location: findLocations(pdfdata.text),
        experience: findExperience(pdfdata.text),
    };

    console.log(resumeData);
};

extractDataInResume();
