module.exports = (str) => {
    const words = str.split('-');
    const formattedWords = words.map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formattedWords.join('');
};
