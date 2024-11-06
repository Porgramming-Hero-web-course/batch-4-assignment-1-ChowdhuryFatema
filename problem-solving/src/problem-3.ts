

const countWordOccurrences = (sentence: string, word: string): number => {
    let count: number = 0;
    sentence.split(" ").map(w => {
        w.toLowerCase().includes(word.toLowerCase()) && count++
    })
    return count;
}

