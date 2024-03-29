"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsNavigationKey = IsNavigationKey;
exports.KeyDownHandler = KeyDownHandler;
exports.MoveNext = MoveNext;
exports.MovePrevious = MovePrevious;
exports.findNextFocusable = findNextFocusable;
exports.findPreviousFocusable = findPreviousFocusable;
function findNextFocusable(element) {
  return element.closest("td").nextSibling;
}
function findPreviousFocusable(element) {
  return element.closest("td").previousSibling;
}
function MoveNext(formikTable, rowBuilderFunc, nextElement, gridFocusRow) {
  if (nextElement.cellIndex !== nextElement.closest("tr").children.length - 1) {
    nextElement.querySelector("input:not([type='hidden'])").focus();
    nextElement.querySelector("input:not([type='hidden'])").select();
  } else {
    if (formikTable.length === gridFocusRow) {
      rowBuilderFunc();
      setTimeout(function () {
        var temp = nextElement.closest("tr").nextSibling.children[1];
        while (temp.cellIndex !== temp.closest("tr").children.length - 1 && (temp.querySelector("button:not([aria-label='Clear'])") || temp.querySelector("input").disabled)) {
          temp = findNextFocusable(temp);
        }
        temp.querySelector("input:not([type='hidden'])").focus();
        temp.querySelector("input:not([type='hidden'])").select();
        temp.querySelector("input:not([type='hidden'])").scrollIntoView({
          inline: "center"
        });
      }, 50);
    } else {
      var temp = nextElement.closest("tr").nextSibling.children[1];
      while (temp.cellIndex !== temp.closest("tr").children.length - 1 && (temp.querySelector("button:not([aria-label='Clear'])") || temp.querySelector("input").disabled)) {
        temp = findNextFocusable(temp);
      }
      temp.querySelector("input:not([type='hidden'])").focus();
      temp.querySelector("input:not([type='hidden'])").select();
      try {
        temp.closest("tr").previousSibling.scrollIntoView();
      } catch (_unused) {
        temp.scrollIntoView();
      }
    }
  }
}
function MovePrevious(previousElement) {
  if (previousElement.cellIndex !== 0) {
    previousElement.querySelector("input:not([type='hidden'])").focus();
    previousElement.querySelector("input:not([type='hidden'])").select();
  } else {
    var temp = previousElement.closest("tr").previousSibling.children[previousElement.closest("tr").previousSibling.children.length - 1];
    while (temp.cellIndex !== 0 && (temp.querySelector("button:not([aria-label='Clear'])") || temp.querySelector("input").disabled)) {
      temp = findPreviousFocusable(temp);
    }
    temp.querySelector("input:not([type='hidden'])").focus();
    temp.querySelector("input:not([type='hidden'])").select();
    try {
      temp.closest("tr").previousSibling.scrollIntoView();
    } catch (_unused2) {
      temp.scrollIntoView();
    }
  }
}

/**
 *
 * Salam Sosis
 */
function KeyDownHandler(e, autoCompleteStates, fieldArray, focusRow, addRowFunction, langDirection) {
  var next = e.target.closest("td").nextSibling;
  while (next.cellIndex !== next.closest("tr").children.length - 1 && (next.querySelector("button:not([aria-label='Clear'])") || next.querySelector("input").disabled)) {
    next = findNextFocusable(next);
  }
  var prev = e.target.closest("td").previousSibling;
  while (prev.cellIndex !== 0 && (prev.querySelector("button:not([aria-label='Clear'])") || prev.querySelector("input").disabled)) {
    prev = findPreviousFocusable(prev);
  }
  if (e.keyCode === 40 && checkAllStatesFalse(autoCompleteStates)) {
    /* Down Arrowkey */
    e.preventDefault();
    if (fieldArray.length === focusRow) {
      addRowFunction();
      setTimeout(function () {
        var temp = next.closest("tr").nextSibling.children[e.target.closest("td").cellIndex];
        while (temp.cellIndex !== temp.closest("tr").children.length - 1 && (temp.querySelector("button:not([aria-label='Clear'])") || temp.querySelector("input").disabled)) {
          temp = findNextFocusable(temp);
        }
        temp.querySelector("input").focus();
        temp.querySelector("input").select();
        temp.querySelector("input").scrollIntoView({
          inline: "center"
        });
      }, 0);
    } else {
      var down = e.target.closest("tr").nextSibling.children[e.target.closest("td").cellIndex].querySelector("input");
      down.focus();
      down.select();
      try {
        down.closest("tr").previousSibling.scrollIntoView();
      } catch (_unused3) {
        down.scrollIntoView();
      }
    }
  }
  if (e.keyCode === 38 && checkAllStatesFalse(autoCompleteStates)) {
    /* Up ArrowKey */
    e.preventDefault();
    var up = e.target.closest("tr").previousSibling.children[e.target.closest("td").cellIndex].querySelector("input");
    up.focus();
    up.select();
    try {
      up.closest("tr").previousSibling.scrollIntoView();
    } catch (_unused4) {
      up.scrollIntoView();
    }
  }
  if (e.keyCode === 39) {
    /* Right ArrowKey */
    langDirection === "rtl" ? MovePrevious(prev) : MoveNext(fieldArray, addRowFunction, next, focusRow);
  }
  if (e.keyCode === 37) {
    /* Left ArrowKey */
    langDirection === "ltr" ? MovePrevious(prev) : MoveNext(fieldArray, addRowFunction, next, focusRow);
  }
  if (e.keyCode === 13 && checkAllStatesFalse(autoCompleteStates)) {
    /* Enter */
    MoveNext(fieldArray, addRowFunction, next, focusRow);
  } else if (e.keyCode === 13) {
    /* Enter */
    e.preventDefault();
    MoveNext(fieldArray, addRowFunction, next, focusRow);
  }
  if (e.keyCode === 9) {
    /* Tab */
    e.preventDefault();
    if (e.shiftKey === false) {
      MoveNext(fieldArray, addRowFunction, next, focusRow);
    } else {
      MovePrevious(prev);
    }
  }
}
var checkAllStatesFalse = function checkAllStatesFalse(states) {
  return states.every(function (state) {
    return state === false;
  });
};
function IsNavigationKey(e) {
  return e.code === "ArrowDown" || e.code === "ArrowUp" || e.code === "ArrowLeft" || e.code === "ArrowRight" || e.code === "Tab" || e.code === "Enter";
}