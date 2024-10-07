import { Question, QuestionType } from "./interfaces/question";

export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

export function isCorrect(question: Question, answer: string): boolean {
    if (
        question.expected.trim().toLowerCase() === answer.trim().toLowerCase()
    ) {
        return true;
    } else {
        return false;
    }
}

export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    }
    if (question.type === "multiple_choice_question") {
        for (var x of question.options) {
            if (x === answer) {
                return true;
            }
        }
    }
    return false;
}

export function toShortForm(question: Question): string {
    let id: string = String(question.id);
    let name: string = question.name.slice(0, 10);
    let result: string = id + ": " + name;
    return result;
}

export function toMarkdown(question: Question): string {
    let result: string = "# " + question.name + "\n" + question.body;
    if (question.type === "multiple_choice_question") {
        for (var x of question.options) {
            result += "\n- " + x;
        }
    }
    return result;
}

export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id: id,
        name: "Copy of " + oldQuestion.name,
        published: false,
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    let newOptions: string[] = [...question.options, newOption];
    return { ...question, options: newOptions };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        ...contentQuestion,
        id: id,
        name: name,
        points: points,
        published: false,
    };
}
