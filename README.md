# Project README

## Overview

This project is a WordPress theme built using React, TypeScript, and Tailwind CSS. It is structured as a Turborepo monorepo, ensuring scalability and efficient code sharing across different parts of the project.

## Prerequisites

Before you get started, make sure you have the following installed:

- **Node.js** (latest LTS version recommended)
- **pnpm** (package manager)
- **Python** (required for certain dependencies used in the build process)

## Installation

2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```

## Building the Theme

To build the WordPress theme, run the following command:

```bash
pnpm build
```

This will compile and prepare all assets for the WordPress theme. After the build process, the theme file will be located at:

```
apps/landing/dist/arch_theme.zip
```

## Project Structure

- **Monorepo Layout**:

  - This project uses a Turborepo structure. The main app code and shared packages are organized as follows:

- **App Code**:

  - Located in `apps/landing`
  - The app's pages are found under `apps/landing/src/views/pages`

- **Shared UI Components**:
  - Common UI components like navigation menus are in `./packages/ui-components/src`

## Development

To start the development server, run the following command at the root of the project:

```bash
pnpm dev
```

Access the application in your browser at the URL provided by the development server.

## Support

If you encounter any issues or have questions, please contact the maintainers or raise an issue in the repository.
#   A - R e a c t - P r o j e c t  
 