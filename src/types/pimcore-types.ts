// Interface for the data structure coming from the csv file
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
  containerKey?: string;
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
    compositeIndices: any[]; // Or define a specific interface if needed
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
  datatype: string; // 'layout' or 'data'
  children: (LayoutDefinition | DataDefinition)[];
  // Common fields for data definitions
  fieldtype?: string;
  locked?: boolean;
  labelWidth?: number;
  labelAlign?: string;
  // Common fields for layout definitions
  layout?: string | null;
  border?: boolean;
  icon?: string;
  // ... other specific fields for panels, fieldsets, tabs, blocks, etc.
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
  permissions: any; // Or define a specific interface if needed
  fieldtype: string; // 'input', 'textarea', 'select', 'date', 'localizedfields', 'block', 'wysiwyg', 'imageGallery', 'video', 'manyToManyRelation', 'link', 'text', etc.
  relationType: boolean;
  invisible: boolean;
  visibleGridView: boolean;
  visibleSearch: boolean;
  datatype: string; // 'data'
  // Fields specific to various data types
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
  options?: { key: string; value: string }[];
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
  tabPosition?: string; // 'top', 'left', etc.
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
  classes?: { id: string }[]; // For relations
  displayMode?: string | null;
  pathFormatterClass?: string;
  assetInlineDownloadAllowed?: boolean;
  assetUploadPath?: string;
  allowToClearRelation?: boolean;
  objectsAllowed?: boolean;
  assetsAllowed?: boolean;
  assetTypes?: { assetTypes: string }[];
  documentsAllowed?: boolean;
  documentTypes?: string[];
  enableTextSelection?: boolean;
  useCurrentDate?: boolean;
  columnType?: string;
  toolbarConfig?: string;
  maxCharacters?: string; // Often "0" for wysiwyg
  html?: string;
  renderingClass?: string;
  renderingData?: string;
  // Add more specific fields as needed for other types
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

// --- Field Type Interfaces ---
export interface InputFieldDefinition extends DataDefinition {
    fieldtype: 'input';
    // Inherits common fields, specific ones are optional/default
}

export interface TextareaFieldDefinition extends DataDefinition {
    fieldtype: 'textarea';
    // Inherits common fields, specific ones like height are optional/default
}

export interface SelectFieldDefinition extends DataDefinition {
  fieldtype: 'select';
  options: { key: string; value: string }[];
  // Inherits other common fields
}

export interface DateFieldDefinition extends DataDefinition {
    fieldtype: 'date';
    useCurrentDate: boolean;
    columnType: string;
    // Inherits other common fields
}

export interface LocalizedFieldsDefinition extends DataDefinition {
  fieldtype: 'localizedfields';
  children: (LayoutDefinition | DataDefinition)[];
  // Inherits other common fields
  region: string | null;
  layout: string | null;
  maxTabs?: number | null;
  border: boolean;
  provideSplitView: boolean;
  tabPosition: string; // 'top', 'left', etc.
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
  layout: string | null; // Can be null
  // Inherits other common fields
}

export interface WysiwygFieldDefinition extends DataDefinition {
  fieldtype: 'wysiwyg';
  toolbarConfig: string;
  excludeFromSearchIndex: boolean;
  maxCharacters: string; // Often "0"
  // Inherits other common fields like height, width
}

export interface ImageGalleryFieldDefinition extends DataDefinition {
  fieldtype: 'imageGallery';
  uploadPath: string;
  ratioX: number | null;
  ratioY: number | null;
  predefinedDataTemplates: string;
  height: number | string | null;
  width: number | string | null;
  // Inherits other common fields
}

export interface VideoFieldDefinition extends DataDefinition {
  fieldtype: 'video';
  uploadPath: string;
  allowedTypes: string[] | null;
  supportedTypes: string[]; // e.g., ["asset", "youtube", "vimeo", "dailymotion"]
  height: number;
  width: number;
  // Inherits other common fields
}

export interface ManyToManyRelationFieldDefinition extends DataDefinition {
  fieldtype: 'manyToManyRelation';
  relationType: true; // Explicitly true
  classes: { id: string }[];
  displayMode: string | null;
  pathFormatterClass: string;
  maxItems: number | null;
  assetInlineDownloadAllowed: boolean;
  assetUploadPath: string;
  allowToClearRelation: boolean;
  objectsAllowed: boolean;
  assetsAllowed: boolean;
  assetTypes: { assetTypes: string }[];
  documentsAllowed: boolean;
  documentTypes: string[];
  enableTextSelection: boolean;
  width: string;
  height: string;
  // Inherits other common fields
}

export interface LinkFieldDefinition extends DataDefinition {
  fieldtype: 'link';
  allowedTypes: string[] | null;
  allowedTargets: string[] | null;
  disabledFields: string[] | null;
  // Inherits other common fields
}

export interface TextFieldDefinition extends DataDefinition {
  fieldtype: 'text';
  html: string;
  renderingClass: string;
  renderingData: string;
  border: boolean;
  // Inherits other common fields
}

// --- Layout Type Interfaces ---

export interface PanelLayoutDefinition extends LayoutDefinition {
  fieldtype: 'panel';
  layout: string | null;
  border: boolean;
  icon: string;
  labelWidth: number;
  labelAlign: string;
  // Inherits other common fields
}

export interface FieldsetLayoutDefinition extends LayoutDefinition {
  fieldtype: 'fieldset';
  labelWidth: number;
  labelAlign: string;
  // Inherits other common fields
}

export interface TabPanelLayoutDefinition extends LayoutDefinition {
  fieldtype: 'tabpanel';
  border: boolean;
  tabPosition: string; // 'top', 'left', etc.
  // Inherits other common fields
}

export interface TextLayoutDefinition extends LayoutDefinition {
  fieldtype: 'text';
  html: string;
  renderingClass: string;
  renderingData: string;
  border: boolean;
  // Inherits other common fields
}

// --- Utility Types for Generics ---
export type AnyFieldDefinition = DataDefinition | LayoutDefinition;
export type AnySpecificFieldDefinition =
  | InputFieldDefinition
  | TextareaFieldDefinition
  | SelectFieldDefinition
  | DateFieldDefinition
  | LocalizedFieldsDefinition
  | BlockFieldDefinition
  | WysiwygFieldDefinition
  | ImageGalleryFieldDefinition
  | VideoFieldDefinition
  | ManyToManyRelationFieldDefinition
  | LinkFieldDefinition
  | TextFieldDefinition
  | PanelLayoutDefinition
  | FieldsetLayoutDefinition
  | TabPanelLayoutDefinition
  | TextLayoutDefinition;