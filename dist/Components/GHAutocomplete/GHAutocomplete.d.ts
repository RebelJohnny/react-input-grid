import { withTranslation } from 'react-i18next';
export default withTranslation()(GHAutocomplete);
declare function GHAutocomplete({ innerWidth, innerFontSize, backgroundColor, loadingState, allowClear, ...props }: {
    [x: string]: any;
    innerWidth?: number;
    innerFontSize?: string;
    backgroundColor?: string;
    loadingState: any;
    allowClear?: boolean;
}): any;