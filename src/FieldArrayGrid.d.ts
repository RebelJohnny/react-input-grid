export default FieldArrayGrid;
type ColumnObject = {
    /**
     * Shown in the header (th) for the column.
     */
    header?: string;
    /**
     * Function that returns the node used inside the column td.
     */
    content: any;
    /**
     * Cell width, used like inline CSS
     */
    width?: string;
    /**
     * Minimum cell width, used for responsive designs.
     */
    minWidth?: string;
}
type FooterObject = {
    /**
     * Function that returns the node used inside the footer td.
     */
    content?: any;
    colSpan: number;
}
declare function FieldArrayGrid({ title, fieldArrayName, columns, footer, onRowFocused, showFooter, showDelete, showAddButton, showIndex, indexHeader, operationHeader, customIndexCell, customUpperButtonFunction, disableRemoveExpr, rtlEnabled, emptyRowObject, keyExpr, deleteIcon, deleteIconClassName, allowInsertBetween, onBeforeRowPushed, onAfterRowPushed, onBeforeRowRemoved, onAfterRowRemoved, onBeforeRowInserted, onAfterRowInserted, createRow, warnExpr }: {
    /**
     * Title shown above the grid.
     */
    title: any;
    /**
     * Name specified for the formik field array.
     */
    fieldArrayName: string;
    /**
     * Array of cells used to construct the grid body.
     */
    columns: ColumnObject[];
    /**
     * Array of cells used to construct the grid footer.
     */
    footer?: FooterObject[];
    /**
     * Additional operations to be made when a row comes into focus
     */
    onRowFocused?: () => void;
    /**
     * Renders a footer if `true`.
     * @default false
     */
    showFooter?: boolean;
    /**
     * Change to `false` in order to hide delete column.
     * @default true
     */
    showDelete?: boolean;
    /**
     * Change to `false` in order to hide index column
     * @default true
     */
    showIndex?: boolean;
    /**
     * @default ""
     */
    indexHeader?: string;
    /**
     * @default ""
     */
    operationHeader?: string;
    /**
     * return a <td> tag with what you want inside first column of your grid (index cell)
     */
    customIndexCell?: any;
    /**
     * Extra buttons above grid, preserving the add button unless you've specified `allowAdd={false}`
     */
    CustomUpperButton?: any;
    /**
     * Used to disable the delete button on a row
     */
    disableRemoveExpr?: () => boolean;
    /**
     * Change keyboard navigation direction to match language
     * @default false
     */
    rtlEnabled?: boolean;
    /**
     * The object that gets added when adding a new row by the add button or navigation in the last row
     */
    emptyRowObject: object;
    /**
     * Name of property in the emptyArticle object that holds the unique identifier used as key in row mapping
     * @default "id"
     */
    keyExpr?: string;
    /**
     * Svg for custom delete icon
     */
    deleteIcon?: any;
    /**
     * className for custom delete icon
     */
    deleteIconClassName?: string;
    /**
     * allows inserting between rows
     * @default false
    */
    allowInsertBetween?: boolean;
    /**
     * allows adding rows
     * @default true
    */
    allowAdd?: boolean;
    /**
     * Any additional operations to be made before a row is pushed.
     * (adding a row will modify the formik FieldArray by default)
     */
    onBeforeRowPushed?: (item: object) => void | Promise<void>;
    /**
     * Any additional operations to be made after a row is pushed.
     * (adding a row will modify the formik FieldArray by default)
    */
    onAfterRowPushed?: (item: object) => void | Promise<void>;
    /**
     * Any additional operations to be made before a row is removed.
     * (removing a row will modify the formik FieldArray by default)
     */
    onBeforeRowRemoved?: (index: number) => void | Promise<void>;
    /**
     * Any additional operations to be made after a row is removed.
     * (removing a row will modify the formik FieldArray by default)
    */
    onAfterRowRemoved?: (index: number) => void | Promise<void>;
    /**
     * Any additional operations to be made before a row is inserted.
     * (inserting a row will modify the formik FieldArray by default)
     */
    onBeforeRowInserted?: (index: number, item: object) => void | Promise<void>;
    /**
     * Any additional operations to be made after a row is inserted.
     * (inserting a row will modify the formik FieldArray by default)
    */
    onAfterRowInserted?: (index: number, item: object) => void | Promise<void>;
    /**
     * Don't touch this unless you know what you're doing. I have no idea what this does.
     * Some kind of custom create row or something
    */
    createRow?: () => object;
    /**
     * Name of property in the emptyArticle object that holds the warning bool in row mapping
     * @default "hasWarning"
     */
    warnExpr?: string;
}): any;
