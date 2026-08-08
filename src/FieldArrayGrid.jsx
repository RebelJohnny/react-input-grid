import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import "./style.css";
import { FieldArray, useFormikContext } from "formik";
import React, { useCallback } from "react";
import { useTheme } from "@mui/material";
import { CreateTableError } from "./utils/createTableError";
import { findNextFocusable } from "./utils/GridNavigation/GridNavigation";
import { NavigationContext } from "./utils/GridNavigation/GridNavigation";
import { KeyDownHandler } from "./utils/GridNavigation/GridNavigation";
import { v4 as uuidv4 } from 'uuid';
import InputGridDeleteRowBtn from "./components/InputGridDeleteRowBtn";

const FieldArrayGrid = ({
    title,
    fieldArrayName,
    columns,
    footer,
    onRowFocused = () => { },
    showFooter = false,
    showDelete = true,
    showIndex = true,
    indexHeader = "",
    operationHeader = "",
    customIndexCell = null,
    CustomUpperButton,
    disableRemoveExpr = () => { return false },
    rtlEnabled = false,
    emptyRowObject = {},
    keyExpr = "id",
    deleteIcon = null,
    deleteIconClassName = "",
    allowInsertBetween = false,
    allowAdd = true,
    onBeforeRowPushed = (item) => { },
    onAfterRowPushed = (item) => { },
    onBeforeRowRemoved = (index) => { },
    onAfterRowRemoved = (index) => { },
    onBeforeRowInserted = (index, item) => { },
    onAfterRowInserted = (index, item) => { },
    createRow,
    warnExpr = "hasWarning"
}) => {
    const theme = useTheme();
    const { values, errors } = useFormikContext()
    const defaultCreateRow = () => {
        return { ...emptyRowObject, [keyExpr]: uuidv4() }
    }
    const resolveCreateRow = createRow ?? defaultCreateRow;

    const rowBuilder = useCallback((row, arrayIndex, removeFunction, insertFunction) => {
        return (
            <tr
                className={row[warnExpr] ? 'warn-row' :  (errors[fieldArrayName]??[])[arrayIndex] ? 'error-row' : ""}
                style={{ cursor: 'pointer' }}
                key={row[keyExpr]}
                onFocus={(e) => {
                    onRowFocused(e)
                }}
                tabIndex={arrayIndex}
            >
                {customIndexCell === null ?
                    <td key={`${row[keyExpr]}_index`} className={allowInsertBetween ? 'with-insert-between-text-center' : 'text-center'}
                        style={{
                            position: "relative",
                            verticalAlign: 'middle',
                            width: '40px',
                            display: showIndex ? 'table-cell' : 'none'
                        }}
                        onClick={allowInsertBetween ? () => insertFunction(arrayIndex + 1) : undefined}
                    >
                        {arrayIndex + 1}
                    </td>
                    : customIndexCell()}
                {columns.map((column) => (
                    column.show || typeof (column.show) === "undefined" ?
                        <td
                            key={`${row[keyExpr]}_${column.header}`}
                            style={{
                                width: column.width ? column.width : "auto",
                                minWidth: column.minWidth ? column.minWidth : "auto"
                            }}
                        >
                            {
                                React.isValidElement(column.content)
                                    ? React.cloneElement(column.content, { index: arrayIndex })
                                    : React.createElement(column.content, { index: arrayIndex })
                            }
                        </td> : null
                ))}
                {showDelete ?
                    <td key={`${row[keyExpr]}_delete`} style={{ width: '40px' }}>
                        <input disabled hidden />
                        <InputGridDeleteRowBtn
                            onClick={() => {
                                removeFunction(arrayIndex)
                            }}
                            disabled={disableRemoveExpr(arrayIndex)}
                            Icon={deleteIcon}
                            iconClass={deleteIconClassName}
                        />
                    </td> : null}
            </tr>
        )
    }, [onRowFocused, disableRemoveExpr, CustomUpperButton, onBeforeRowPushed, onAfterRowPushed, onBeforeRowRemoved, onAfterRowRemoved, onBeforeRowInserted, onAfterRowInserted])
    return (
        <FieldArray
            name={fieldArrayName}
            validateOnChange={false}
            render={({ push, remove, insert }) => {
                const pushFunction = async () => {
                    var newItem = resolveCreateRow();
                    await Promise.resolve(onBeforeRowPushed(newItem))
                    push(newItem)
                    await Promise.resolve(onAfterRowPushed(newItem))
                }
                const removeFunction = async (index) => {
                    await Promise.resolve(onBeforeRowRemoved(index))
                    remove(index)
                    await Promise.resolve(onAfterRowRemoved(index))
                }
                const insertFunction = async (index) => {
                    var newItem = resolveCreateRow()
                    await Promise.resolve(onBeforeRowInserted(index, newItem))
                    insert(index, newItem)
                    await Promise.resolve(onAfterRowInserted(index, newItem))
                }
                return (
                    <NavigationContext.Provider value={(e) => {
                        KeyDownHandler(
                            e,
                            allowAdd ? pushFunction : () => { },
                            rtlEnabled,
                            allowAdd
                        );
                    }}>
                        <div className="row align-items-center">
                            {typeof (title) !== "undefined" ?
                                <div className='content col-lg-6 col-6'>
                                    <div className='title mb-0'>
                                        <span className='span'> {title} </span>
                                    </div>
                                </div> : null
                            }
                            <div className={`content ${typeof (title) === "undefined" ? "col-12" : "col-lg-6 col-6"}`}>
                                {/* Copyright Ghafourian© Grid V5.0
                        All rights reserved */}
                                <div className={`d-flex justify-content-${typeof (CustomUpperButton) === "undefined" ? "end" : "between"}`}>
                                    {typeof (CustomUpperButton) !== "undefined" &&
                                        (React.isValidElement(CustomUpperButton)
                                            ? React.cloneElement(CustomUpperButton)
                                            : React.createElement(CustomUpperButton))}
                                    {allowAdd ?
                                        <Button
                                            variant="outlined"
                                            className="grid-add-btn"
                                            onClick={(e) => {
                                                pushFunction()
                                                setTimeout(() => {
                                                    let added = e.target.closest("div").parentElement.nextSibling.querySelector('tbody tr:last-child td:nth-child(2)')
                                                    while (added.querySelector("button:not([tabindex='-1'])") || added.querySelector("input").disabled) {
                                                        added = findNextFocusable(added)
                                                    }
                                                    added.querySelector("input").focus()
                                                }, 0);
                                            }}
                                        >
                                            <AddIcon />
                                        </Button> : null}
                                </div>
                            </div>
                            <div className='content col-lg-12 col-12'>
                                <div className={`table-responsive sticky-h-f gridRow ${theme.palette.mode === 'dark' ? 'dark' : ''}`}>
                                    <table className="table table-bordered ">
                                        <thead>
                                            <tr className='text-center'>
                                                <th style={{ display: showIndex ? 'table-cell' : 'none' }}>{indexHeader}</th>
                                                {columns.map((column) => (
                                                    column.show || typeof (column.show) === "undefined" ?
                                                        <th key={column.header}>{column.header}</th> : null
                                                ))}
                                                {showDelete ? <th>{operationHeader}</th> : null}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <React.Fragment>
                                                {values[fieldArrayName]?.map((row, arrayIndex) => (
                                                    rowBuilder(row, arrayIndex, removeFunction, () => insertFunction(arrayIndex + 1))
                                                ))}
                                            </React.Fragment>
                                        </tbody>
                                        {showFooter ?
                                            <tfoot>
                                                <tr>
                                                    {footer.map((footerCell, index) => (
                                                        <td
                                                            key={`footer_${index}`}
                                                            colSpan={footerCell.colspan ? footerCell.colspan : 1}
                                                        >
                                                            {footerCell.content ? footerCell.content() : null}
                                                        </td>
                                                    ))}
                                                </tr>
                                            </tfoot> : null}
                                    </table>
                                </div>
                            </div>
                        </div >
                        <div className='row align-items-start'>
                            <div className='content col-lg-12 col-md-12 col-12'>
                                {Array.isArray(errors[fieldArrayName]) ?
                                    errors[fieldArrayName]?.map((error, index) => (
                                        <p className='error-msg' key={`error_${index}`}>
                                            {error ? ` ${indexHeader} ${index + 1} : ${CreateTableError(error)}` : null}
                                        </p>
                                    )) :
                                    <p className="error-msg">
                                        {errors[fieldArrayName]}
                                    </p>
                                }
                            </div>
                        </div>
                    </NavigationContext.Provider>
                )
            }}
        >
        </FieldArray>
    )
}
export default FieldArrayGrid
