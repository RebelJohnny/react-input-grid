import { createContext } from "react"
import { v4 as uuidv4 } from 'uuid';

export function findNextFocusable(element) {
    return element.closest("td").nextSibling
}
export function findPreviousFocusable(element) {
    return element.closest("td").previousSibling
}
export function MoveNext(fieldArrayLength, rowBuilderFunc, nextElement, gridFocusRow, addRowAllowed) {
    if (nextElement.cellIndex !== nextElement.closest("tr").children.length - 1) {
        nextElement.querySelector("input:not([type='hidden'])").focus()
        nextElement.querySelector("input:not([type='hidden'])").select()
    }
    else {
        if (fieldArrayLength === gridFocusRow) {
            if (!addRowAllowed) {
                return;
            }
            rowBuilderFunc()
            setTimeout(() => {
                let temp = nextElement.closest("tr").nextSibling.children[1]
                while (temp.cellIndex !== temp.closest("tr").children.length - 1 && (temp.querySelector("button:not([tabindex='-1'])") || temp.querySelector("input").disabled)) {
                    temp = findNextFocusable(temp)
                }
                temp.querySelector("input:not([type='hidden'])").focus()
                temp.querySelector("input:not([type='hidden'])").select()
                temp.querySelector("input:not([type='hidden'])").scrollIntoView({ inline: "center" })
            }, 50);
        }
        else {
            let temp = nextElement.closest("tr").nextSibling.children[1]
            while (temp.cellIndex !== temp.closest("tr").children.length - 1 && (temp.querySelector("button:not([tabindex='-1'])") || temp.querySelector("input").disabled)) {
                temp = findNextFocusable(temp)
            }
            temp.querySelector("input:not([type='hidden'])").focus()
            temp.querySelector("input:not([type='hidden'])").select()
            try {
                temp.closest("tr").previousSibling.scrollIntoView()
            }
            catch {
                temp.scrollIntoView()
            }
        }
    }
}

export function MovePrevious(previousElement) {
    if (previousElement.cellIndex !== 0) {
        previousElement.querySelector("input:not([type='hidden'])").focus()
        previousElement.querySelector("input:not([type='hidden'])").select()
    }
    else {
        let temp = previousElement.closest("tr").previousSibling.children[previousElement.closest("tr").previousSibling.children.length - 1]
        while (temp.cellIndex !== 0 && (temp.querySelector("button:not([tabindex='-1'])") || temp.querySelector("input").disabled)) {
            temp = findPreviousFocusable(temp)
        }
        temp.querySelector("input:not([type='hidden'])").focus()
        temp.querySelector("input:not([type='hidden'])").select()
        try {
            temp.closest("tr").previousSibling.scrollIntoView()
        }
        catch {
            temp.scrollIntoView()
        }
    }
}

/**
 *
 * Salam Sosis
 */
export function KeyDownHandler(e, addRowFunction, rtlEnabled, addRowAllowed) {
    var rowIndex = e.target.closest('tr').rowIndex;

    let next = e.target.closest("td").nextSibling
    while (next.cellIndex !== next.closest("tr").children.length - 1 && (next.querySelector("button:not([tabindex='-1'])") || next.querySelector("input:not([type='hidden'])").disabled)) {
        next = findNextFocusable(next)
    }

    let prev = e.target.closest("td").previousSibling
    while (prev.cellIndex !== 0 && (prev.querySelector("button:not([tabindex='-1'])") || prev.querySelector("input:not([type='hidden'])").disabled)) {
        prev = findPreviousFocusable(prev)
    }

    let fieldArrayLength = e.target.closest("tbody").children.length

    if (e.keyCode === 40) { /* Down Arrowkey */
        e.preventDefault()
        if (fieldArrayLength === rowIndex) {
            if (!addRowAllowed) {
                return;
            }
            addRowFunction()
            setTimeout(() => {
                let temp = next.closest("tr").nextSibling.children[e.target.closest("td").cellIndex]
                while (temp.cellIndex !== temp.closest("tr").children.length - 1 && (temp.querySelector("button:not([tabindex='-1'])") || temp.querySelector("input").disabled)) {
                    temp = findNextFocusable(temp)
                }
                temp.querySelector("input").focus()
                temp.querySelector("input").select()
                temp.querySelector("input").scrollIntoView({ inline: "center" })
            }, 0);
        } else {
            let down = e.target.closest("tr").nextSibling.children[e.target.closest("td").cellIndex].querySelector("input")
            down.focus()
            down.select()
            try {
                down.closest("tr").previousSibling.scrollIntoView()
            }
            catch {
                down.scrollIntoView()
            }
        }
    }
    if (e.keyCode === 38) { /* Up ArrowKey */
        if (rowIndex === 1) {
            return;
        }
        e.preventDefault()
        let up = e.target.closest("tr").previousSibling.children[e.target.closest("td").cellIndex].querySelector("input")
        up.focus()
        up.select()
        try {
            up.closest("tr").previousSibling.scrollIntoView()
        }
        catch {
            up.scrollIntoView()
        }
    }

    if (e.keyCode === 39) { /* Right ArrowKey */
        rtlEnabled ? MovePrevious(prev) : MoveNext(fieldArrayLength, () => addRowFunction(), next, rowIndex, addRowAllowed)
    }
    if (e.keyCode === 37) { /* Left ArrowKey */
        !rtlEnabled ? MovePrevious(prev) : MoveNext(fieldArrayLength, () => addRowFunction(), next, rowIndex, addRowAllowed)
    }
    if (e.keyCode === 13) { /* Enter */
        MoveNext(fieldArrayLength, () => addRowFunction(), next, rowIndex, addRowAllowed)
    }
    if (e.keyCode === 9) { /* Tab */
        e.preventDefault()
        if (e.shiftKey === false) {
            MoveNext(fieldArrayLength, () => addRowFunction(), next, rowIndex, addRowAllowed)
        } else {
            MovePrevious(prev)
        }
    }
}

export function IsNavigationKey(e) {
    return e.code === "ArrowDown" || e.code === "ArrowUp" || e.code === "ArrowLeft" || e.code === "ArrowRight" || e.code === "Tab" || e.code === "Enter"
}

export const NavigationContext = createContext((e) => { })