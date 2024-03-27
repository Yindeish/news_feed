function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 5; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomString;
}

function hasDatePassed(specifiedDate) {
    const specifiedDateTime = new Date(specifiedDate).getTime();

    const currentDateTime = new Date().getTime();

    if (specifiedDateTime < currentDateTime) {
        return true;
    } else {
        return false;
    }
}

function mostOccurringString({ arr }) {
    const countMap = {};

    arr.forEach(str => {
        countMap[str] = (countMap[str] || 0) + 1;
    });

    let maxCount = 0;
    let mostOccurringString;
    for (const str in countMap) {
        if (countMap[str] > maxCount) {
            maxCount = countMap[str];
            mostOccurringString = str;
        }
    }

    return mostOccurringString;
}

export { generateRandomString, hasDatePassed, mostOccurringString }