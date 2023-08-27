export default GHGrid;
declare function GHGrid({ title, fieldArrayName, fieldArrayKey, fieldArrayValues, fieldArrayErrors, columns, footer, addRowFunction, rowFocusFunction, rowFocusState, removeRowOperation, showFooter, showDelete, showAddButton, customUpperButtonFunction }: {
    title: any;
    fieldArrayName: any;
    fieldArrayKey: any;
    fieldArrayValues: any;
    fieldArrayErrors: any;
    columns: any;
    footer: any;
    addRowFunction: any;
    rowFocusFunction: any;
    rowFocusState: any;
    removeRowOperation?: () => void;
    showFooter?: boolean;
    showDelete?: boolean;
    showAddButton?: boolean;
    customUpperButtonFunction: any;
}): any;
