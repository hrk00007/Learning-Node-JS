const fs = require('fs');

let employees = [
    { "id": "91-5288463", "image": "http://dummyimage.com/241x100.png/ff4444/ffffff", "name": "Valentin Tabour", "email": "vtabour0@answers.com", "company": "Devcast", "job": "Graphic Designer", "dept": "Training", "salary": 71830, "gender": "M" },
    { "id": "55-6526977", "image": "http://dummyimage.com/150x100.png/cc0000/ffffff", "name": "Emelyne Machin", "email": "emachin1@cdc.gov", "company": "Innojam", "job": "Financial Advisor", "dept": "Marketing", "salary": 45694, "gender": "M" },
    { "id": "70-4362468", "image": "http://dummyimage.com/167x100.png/cc0000/ffffff", "name": "Will Prydie", "email": "wprydie2@theatlantic.com", "company": "Jayo", "job": "Programmer IV", "dept": "Training", "salary": 57284, "gender": "F" },
    { "id": "18-5216562", "image": "http://dummyimage.com/125x100.png/ff4444/ffffff", "name": "Cordie Niece", "email": "cniece3@t-online.de", "company": "Flashset", "job": "Office Assistant II", "dept": "Marketing", "salary": 65694, "gender": "F" },
    { "id": "28-3186151", "image": "http://dummyimage.com/167x100.png/ff4444/ffffff", "name": "Karlis Blanking", "email": "kblanking4@uol.com.br", "company": "Shuffletag", "job": "Senior Financial Analyst", "dept": "Business Development", "salary": 28135, "gender": "M" },
    { "id": "73-3435611", "image": "http://dummyimage.com/116x100.png/ff4444/ffffff", "name": "Halsy Lathan", "email": "hlathan5@indiatimes.com", "company": "Ooba", "job": "Product Engineer", "dept": "Training", "salary": 50497, "gender": "M" },
    { "id": "73-4545239", "image": "http://dummyimage.com/170x100.png/ff4444/ffffff", "name": "Jarvis Moules", "email": "jmoules6@symantec.com", "company": "Kwinu", "job": "Graphic Designer", "dept": "Marketing", "salary": 30670, "gender": "F" },
    { "id": "50-5424272", "image": "http://dummyimage.com/235x100.png/dddddd/000000", "name": "Janeva Skippon", "email": "jskippon7@flavors.me", "company": "Oozz", "job": "Geologist IV", "dept": "Training", "salary": 46760, "gender": "M" },
];

fs.writeFile('employees.json', JSON.stringify(employees), 'utf-8', (err) => {
    if (err) throw err;
    console.log('Data written in JSON format');
});