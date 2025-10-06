export interface FieldSpec {
    screenId: string;
    bundle: string;
    datatype: 'List' | 'Numeric' | 'Text';
    name: string;
    title: string;
    isContainer: boolean;
    isRipetibile: boolean;
    wysiwyg: boolean;
    listValues: string[];
}
export interface PimcoreClassDefinition {
    id: string;
    title: string;
    description: string;
    modificationDate: number;
    parentClass: string;
    implementsInterfaces: string;
    listingParentClass: string;
    useTraits: string;
    listingUseTraits: string;
    allowInherit: boolean;
    allowVariants: boolean;
    showVariants: boolean;
    layoutDefinitions: LayoutDefinition;
    icon: string;
    group: string;
    showAppLoggerTab: boolean;
    linkGeneratorReference: string;
    previewGeneratorReference: string;
    compositeIndices: any[];
    showFieldLookup: boolean;
    propertyVisibility: PropertyVisibility;
    enableGridLocking: boolean;
}
export interface LayoutDefinition {
    name: string;
    type: string | null;
    region: string | null;
    title: string | null;
    width: number;
    height: number | string | null;
    collapsible: boolean;
    collapsed: boolean;
    bodyStyle: string | null;
    datatype: string;
    children: (LayoutDefinition | DataDefinition)[];
    fieldtype?: string;
    locked?: boolean;
    labelWidth?: number;
    labelAlign?: string;
    layout?: string | null;
    border?: boolean;
    icon?: string;
}
export interface DataDefinition {
    name: string;
    title: string;
    tooltip: string;
    mandatory: boolean;
    noteditable: boolean;
    index: boolean;
    locked: boolean;
    style: string;
    permissions: any;
    fieldtype: string;
    relationType: boolean;
    invisible: boolean;
    visibleGridView: boolean;
    visibleSearch: boolean;
    datatype: string;
    defaultValue?: any;
    columnLength?: number;
    regex?: string;
    regexFlags?: string[];
    unique?: boolean;
    showCharCount?: boolean;
    width: number | string | null;
    defaultValueGenerator?: string;
    maxLength?: number;
    excludeFromSearchIndex?: boolean;
    height?: string | number | null;
    options?: {
        key: string;
        value: string;
    }[];
    dynamicOptions?: boolean;
    optionsProviderType?: string | null;
    optionsProviderClass?: string;
    optionsProviderData?: string;
    lazyLoading?: boolean;
    disallowAddRemove?: boolean;
    disallowReorder?: boolean;
    maxItems?: number | null;
    styleElement?: string;
    children?: (LayoutDefinition | DataDefinition)[];
    region?: string | null;
    layout?: string | null;
    maxTabs?: number | null;
    border?: boolean;
    provideSplitView?: boolean;
    tabPosition?: string;
    hideLabelsWhenTabsReached?: number | null;
    permissionView?: string | null;
    permissionEdit?: string | null;
    labelWidth?: number;
    labelAlign?: string;
    uploadPath?: string;
    ratioX?: number | null;
    ratioY?: number | null;
    predefinedDataTemplates?: string;
    allowedTypes?: string[] | null;
    supportedTypes?: string[];
    classes?: {
        id: string;
    }[];
    displayMode?: string | null;
    pathFormatterClass?: string;
    assetInlineDownloadAllowed?: boolean;
    assetUploadPath?: string;
    allowToClearRelation?: boolean;
    objectsAllowed?: boolean;
    assetsAllowed?: boolean;
    assetTypes?: {
        assetTypes: string;
    }[];
    documentsAllowed?: boolean;
    documentTypes?: string[];
    enableTextSelection?: boolean;
    useCurrentDate?: boolean;
    columnType?: string;
    toolbarConfig?: string;
    maxCharacters?: string;
    html?: string;
    renderingClass?: string;
    renderingData?: string;
}
export interface PropertyVisibility {
    grid: {
        id: boolean;
        key: boolean;
        path: boolean;
        published: boolean;
        modificationDate: boolean;
        creationDate: boolean;
    };
    search: {
        id: boolean;
        key: boolean;
        path: boolean;
        published: boolean;
        modificationDate: boolean;
        creationDate: boolean;
    };
}
export interface InputFieldDefinition extends DataDefinition {
    fieldtype: 'input';
}
export interface TextareaFieldDefinition extends DataDefinition {
    fieldtype: 'textarea';
}
export interface SelectFieldDefinition extends DataDefinition {
    fieldtype: 'select';
    options: {
        key: string;
        value: string;
    }[];
}
export interface DateFieldDefinition extends DataDefinition {
    fieldtype: 'date';
    useCurrentDate: boolean;
    columnType: string;
}
export interface LocalizedFieldsDefinition extends DataDefinition {
    fieldtype: 'localizedfields';
    children: (LayoutDefinition | DataDefinition)[];
    region: string | null;
    layout: string | null;
    maxTabs?: number | null;
    border: boolean;
    provideSplitView: boolean;
    tabPosition: string;
    hideLabelsWhenTabsReached?: number | null;
    permissionView?: string | null;
    permissionEdit?: string | null;
    labelWidth: number;
    labelAlign: string;
    width: number | string | null;
    height: string | number | null;
}
export interface BlockFieldDefinition extends DataDefinition {
    fieldtype: 'block';
    children: (LayoutDefinition | DataDefinition)[];
    lazyLoading: boolean;
    disallowAddRemove: boolean;
    disallowReorder: boolean;
    collapsible: boolean;
    collapsed: boolean;
    maxItems: number | null;
    styleElement: string;
    layout: string | null;
}
export interface WysiwygFieldDefinition extends DataDefinition {
    fieldtype: 'wysiwyg';
    toolbarConfig: string;
    excludeFromSearchIndex: boolean;
    maxCharacters: string;
}
export interface ImageGalleryFieldDefinition extends DataDefinition {
    fieldtype: 'imageGallery';
    uploadPath: string;
    ratioX: number | null;
    ratioY: number | null;
    predefinedDataTemplates: string;
    height: number | string | null;
    width: number | string | null;
}
export interface VideoFieldDefinition extends DataDefinition {
    fieldtype: 'video';
    uploadPath: string;
    allowedTypes: string[] | null;
    supportedTypes: string[];
    height: number;
    width: number;
}
export interface ManyToManyRelationFieldDefinition extends DataDefinition {
    fieldtype: 'manyToManyRelation';
    relationType: true;
    classes: {
        id: string;
    }[];
    displayMode: string | null;
    pathFormatterClass: string;
    maxItems: number | null;
    assetInlineDownloadAllowed: boolean;
    assetUploadPath: string;
    allowToClearRelation: boolean;
    objectsAllowed: boolean;
    assetsAllowed: boolean;
    assetTypes: {
        assetTypes: string;
    }[];
    documentsAllowed: boolean;
    documentTypes: string[];
    enableTextSelection: boolean;
    width: string;
    height: string;
}
export interface LinkFieldDefinition extends DataDefinition {
    fieldtype: 'link';
    allowedTypes: string[] | null;
    allowedTargets: string[] | null;
    disabledFields: string[] | null;
}
export interface TextFieldDefinition extends DataDefinition {
    fieldtype: 'text';
    html: string;
    renderingClass: string;
    renderingData: string;
    border: boolean;
}
export interface PanelLayoutDefinition extends LayoutDefinition {
    fieldtype: 'panel';
    layout: string | null;
    border: boolean;
    icon: string;
    labelWidth: number;
    labelAlign: string;
}
export interface FieldsetLayoutDefinition extends LayoutDefinition {
    fieldtype: 'fieldset';
    labelWidth: number;
    labelAlign: string;
}
export interface TabPanelLayoutDefinition extends LayoutDefinition {
    fieldtype: 'tabpanel';
    border: boolean;
    tabPosition: string;
}
export interface TextLayoutDefinition extends LayoutDefinition {
    fieldtype: 'text';
    html: string;
    renderingClass: string;
    renderingData: string;
    border: boolean;
}
export type AnyFieldDefinition = DataDefinition | LayoutDefinition;
export type AnySpecificFieldDefinition = InputFieldDefinition | TextareaFieldDefinition | SelectFieldDefinition | DateFieldDefinition | LocalizedFieldsDefinition | BlockFieldDefinition | WysiwygFieldDefinition | ImageGalleryFieldDefinition | VideoFieldDefinition | ManyToManyRelationFieldDefinition | LinkFieldDefinition | TextFieldDefinition | PanelLayoutDefinition | FieldsetLayoutDefinition | TabPanelLayoutDefinition | TextLayoutDefinition;
//# sourceMappingURL=pimcore-types.d.ts.map