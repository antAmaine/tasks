/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let index: number = numbers.length
    if(index === 1){
        const numbers2: number[] = [numbers[0],numbers[0]]
        return numbers2;
    }
    else if(index >= 1){
        const numbers2: number[] = [numbers[0],numbers[index-1]];
        return numbers2;
    }
    const numbers2: number[] = []
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbers2: number[] = numbers.map((numbers: number): number => numbers*3);
    return numbers2;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbers2: number[] = numbers.map((numbers: String): number => (Number((numbers))));
    const numbers3: number[] = numbers2.map((numbers2: number): number => Number.isNaN(numbers2) ? 0 :numbers2);
    return numbers3;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers2: string[] = amounts.map((amounts: string): string => (amounts[0] === "$") ? amounts.replace("$",""):amounts);
    const numbers3: number[] = numbers2.map((numbers2: String): number => (Number((numbers2))));
    const numbers4: number[] = numbers3.map((numbers3: number): number => Number.isInteger(numbers3) ? numbers3 : 0);
    return numbers4;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const numbers2: string[] = messages.filter((messages: string): boolean => (messages.slice(-1) !== "?"));
    const numbers3: string[] = numbers2.map((numbers2: string): string => (numbers2.slice(-1) === "!") ? numbers2.toUpperCase():numbers2);
    return numbers3;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const words2 : string[] = words.filter((words: string): boolean => words.length < 4)
    const words3:number = words2.length
    return words3;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if(colors.length === 0){
        return true;
    }
    const colors2: boolean = colors.every((colors: string): boolean => colors === "red"||colors === "blue"||colors === "green")
    return colors2;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if(addends.length === 0){
        return "0=0"
    }
    let sum: number = addends.reduce((total: number, addends: number) => total+addends)
    let equation: string = sum.toString() + "=" + addends.toString().replaceAll(",","+");
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const append: number[] = [...values];
    let low: number = values.findLastIndex((values: number): boolean => values <0);
    if(values[0] < 0){
        low = 0;
    }
    if(low !== -1){
        const split: number[] = [...values];
        let index = values.length;
        split.splice(low,index-low);
        let sum: number = split.reduce((total: number, addend: number) => total+addend, 0);
        append.splice(low+1,0,sum);
        return append;
    }
    let sum: number = append.reduce((total: number, addend: number) => total+addend, 0);
    append.push(sum);
    return append;
}
