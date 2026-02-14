# typescript-data-parser

A robust, type-safe command-line tool designed to parse, validate, and summarize complex data structures from JSON files.

## Overview

This project implements a rigorous data processing pipeline that:

- **Loads** raw JSON data for Users and Orders.
- **Validates** data integrity (Types, Formats, and Constraints).
- **Enforces** referential integrity (ensuring Orders belong to valid Users).
- **Aggregates** metrics like totals, averages, and status distribution.

## Technologies Used

- **TypeScript**: For strict type safety and interface definitions.
- **Node.js**: The runtime environment.
- **Jest**: Comprehensive unit testing suite.
- **Biome**: Next-generation formatting and linting.

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
├──package-lock.json
├──biome.json
├──jest.config.js
├── package.json
├── tsconfig.json
├──gitignore
└── README.md
```

## Features

### User Validation

- Valid name
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

### Format and Lint

```bash
npm run check
```

### Build and Run

```bash
npm run build  #build
node dist/src/index.js data-valid.json   #run
```

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
Total user: 2
Total order: 2
Total Amount: 370
Average Amount: 185
order by status

Paid: 1
Pending: 1
```
