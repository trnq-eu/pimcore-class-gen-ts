import type { PimcoreClassDefinition, InputFieldDefinition, TextareaFieldDefinition, SelectFieldDefinition, DateFieldDefinition, LocalizedFieldsDefinition, BlockFieldDefinition, WysiwygFieldDefinition, ImageGalleryFieldDefinition, VideoFieldDefinition, ManyToManyRelationFieldDefinition, LinkFieldDefinition, PanelLayoutDefinition, FieldsetLayoutDefinition, TabPanelLayoutDefinition, TextLayoutDefinition, AnyFieldDefinition } from './types/pimcore-types';
export declare class PimcoreClassGenerator {
    private classDefinition;
    constructor(baseDefinition?: Partial<PimcoreClassDefinition>);
    setClassId(id: string): PimcoreClassGenerator;
    setTitle(title: string): PimcoreClassGenerator;
    setDescription(description: string): PimcoreClassGenerator;
    setGroup(group: string): PimcoreClassGenerator;
    setIcon(icon: string): PimcoreClassGenerator;
    addRootField(field: AnyFieldDefinition): PimcoreClassGenerator;
    addFieldToContainer(containerName: string, field: AnyFieldDefinition): PimcoreClassGenerator;
    createInputField(definition: Partial<InputFieldDefinition>): InputFieldDefinition;
    createTextareaField(definition: Partial<TextareaFieldDefinition>): TextareaFieldDefinition;
    createSelectField(definition: Partial<SelectFieldDefinition>): SelectFieldDefinition;
    createDateField(definition: Partial<DateFieldDefinition>): DateFieldDefinition;
    createLocalizedFields(definition: Partial<LocalizedFieldsDefinition>): LocalizedFieldsDefinition;
    createBlockField(definition: Partial<BlockFieldDefinition>): BlockFieldDefinition;
    createWysiwygField(definition: Partial<WysiwygFieldDefinition>): WysiwygFieldDefinition;
    createImageGalleryField(definition: Partial<ImageGalleryFieldDefinition>): ImageGalleryFieldDefinition;
    createVideoField(definition: Partial<VideoFieldDefinition>): VideoFieldDefinition;
    createManyToManyRelationField(definition: Partial<ManyToManyRelationFieldDefinition>): ManyToManyRelationFieldDefinition;
    createLinkField(definition: Partial<LinkFieldDefinition>): LinkFieldDefinition;
    createTextLayout(definition: Partial<TextLayoutDefinition>): TextLayoutDefinition;
    createPanel(definition: Partial<PanelLayoutDefinition>): PanelLayoutDefinition;
    createFieldset(definition: Partial<FieldsetLayoutDefinition>): FieldsetLayoutDefinition;
    createTabPanel(definition: Partial<TabPanelLayoutDefinition>): TabPanelLayoutDefinition;
    generate(): PimcoreClassDefinition;
    generateJsonString(): string;
}
export {};
//# sourceMappingURL=main.d.ts.map