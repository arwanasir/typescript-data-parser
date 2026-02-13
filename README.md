# typescript-data-parser

## Overview

This project is a TypeScript-based data parser that:

- Reads user and order data from JSON files
- Validates the data
- Filters out invalid entries
- Produces clean, structured output
- Generates a summary of valid data

The parser ensures only correctly structured and logically valid data is processed.

## Technologies Used

- TypeScript
- Node.js
- Jest (for testing)

## Project Structure

```
typescript-data-parser/
│
├── src/
│   ├── models/
│   ├── services/
│   │   ├── validator.ts
│   │   |── summary.ts
    |    └──fileLoader.ts
│   └── index.ts
│
├── tests/
│   └── validator.test.ts
│
├── data-valid.json
├── data-invalid.json
├── package.json
├── tsconfig.json
└── README.md
```

## Features

### User Validation

- Non-empty name
- Valid email format
- Valid role
- Valid creation date

### Order Validation

- Positive amount
- Existing user reference
- Valid status
- Valid creation date

### Output

- Array in → Array out (filtered valid data)
- Summary of processed results

## How to Run the Project

### Install dependencies

```bash
npm install
```

### Compile TypeScript

```bash
npm run build
```

### Run with sample data

```bash
node dist/index.js data-valid.json
```

or

```bash
node dist/index.js data-invalid.json
```

---

## Running Tests

To run unit tests:

```bash
npm test
```

The tests validate:

- User validation logic
- Order validation logic
- Correct filtering of invalid data

## Example Output

### Valid Input (`data-valid.json`)

```
Valid Users: 2
Valid Orders: 3
Total Revenue: 150
```

### Invalid Input (`data-invalid.json`)

```
Valid Users: 0
Valid Orders: 0
Total Revenue: 0
```
