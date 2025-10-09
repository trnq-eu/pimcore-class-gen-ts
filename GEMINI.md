# Project: Pimcore Class JSON Generator

## General Instructions:

- You are an AI assistant helping to develop a TypeScript script that generates JSON configuration files for the Pimcore PIM/CMS.
- The script runs on Node.js and is executed via the command line, accepting a file path as an argument.
- The primary goal of this project is to produce a **strictly valid** Pimcore class JSON. Any invalid JSON will cause errors in the target system, so precision is paramount.
- The script uses the `csv-parse` library to process its input.

## Core Logic Overview:

The script employs a **hybrid generation model**:

1.  **Static Base Layout:** It first programmatically builds a static base layout. This includes a `TabPanel` containing several mandatory `Panels` (e.g., "Identificazione", "Media", "Controllo e note") and essential, non-negotiable fields (like title, date fields, etc.). This static structure is the foundation of every generated class.

2.  **Dynamic Enrichment:** It then **enriches** this static base by reading a CSV file. It dynamically creates and injects additional fields into the appropriate panels based on the CSV data.

3.  **Targeted Injection:** The `Screen ID` column in the CSV is used to determine the correct target panel for each new field. A mapping logic connects the `Screen ID` to the `name` of the statically created panels. If a `Screen ID` from the CSV does not correspond to a static panel, a new panel is created dynamically.

4.  **Data Filtering:** The script explicitly ignores certain records from the CSV based on a predefined list of 'Bundle' values to avoid processing irrelevant data.

## Key Components & Files:

-   **`src/main.ts`**: The main executable script. It contains the command-line argument parsing, CSV processing logic, the `PimcoreClassGenerator` class, and the static + dynamic layout generation logic.
-   **`src/types/pimcore-types.ts`**: A crucial file that defines all TypeScript interfaces for the Pimcore data structures (`PimcoreClassDefinition`, `FieldSpec`, `InputFieldDefinition`, etc.). All generated objects must conform strictly to these types.
-   **`[input_file].csv`**: The input data source, provided as a command-line argument. Its structure is critical.
-   **`GeneratedClass.json`**: The final, single JSON output file.

## Input/Output Format:

### Input - CSV File Columns:
-   **`Screen ID`**: Determines the target panel (e.g., 'IDENTIFICAZIONE').
-   **`Bundle`**: The technical source identifier for the field. Used for filtering and normalization (e.g., `ca_attribute_segnatura.segnatura2`).
-   **`Datatype`**: The field type ('Text', 'Numeric', 'List').
-   **`Name`**: The human-readable title for the field.
-   **`is container`**: 'TRUE' if multiple fields should be grouped in a `Fieldset`.
-   **`is ripetibile`**: 'TRUE' if the field or container should be wrapped in a repeatable `Block`.
-   **`wysiwyg`**: 'TRUE' if a 'Text' field should be a rich-text editor.
-   **`List Values`**: A semicolon-separated string of options for 'List' datatypes.

### Output - JSON File:
-   A single, well-formatted JSON file that strictly follows the structure defined by the `PimcoreClassDefinition` interface in `src/types/pimcore-types.ts`.

## Coding Style & Rules:

-   When creating new Pimcore field objects, **always** use the factory methods (e.g., `createInputField`, `createSelectField`) available in the `PimcoreClassGenerator` class. Do not construct these complex objects manually.
-   All new logic must be strongly typed using the interfaces from `src/types/pimcore-types.ts`.
-   Prioritize clarity and add comments for complex logic, especially for handling the `isContainer` and `isRipetibile` flags.
-   To support a new Pimcore field type, the workflow is:
    1.  Add its `...FieldDefinition` interface in `src/types/pimcore-types.ts`.
    2.  Create its corresponding factory method `create...Field` in the `PimcoreClassGenerator` class.
    3.  Add a `case` for its `Datatype` in the main processing loop.