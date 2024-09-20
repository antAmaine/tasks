/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let c: number = ((temperature - 32) * 5) / 9;
    return c;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let num: number = 0;
    num += first > 0 ? first : 0;
    num += second > 0 ? second : 0;
    num += third > 0 ? third : 0;
    return num;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    message = message.toUpperCase() + "!";
    return message;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string) {
    message = "a" + message;
    let ind: number = message.length - 1;
    let q: number =
        (message.charCodeAt(ind) - 63) * (message.charCodeAt(ind) - 63);
    let qt: boolean = !(!!q && true);
    return qt;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() === "no") {
        return false;
    }
    if (word.toLowerCase() === "yes") {
        return true;
    }
    return null;
}
