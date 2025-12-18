# My Turbo Monorepo

A modern monorepo setup with Turborepo for managing multiple applications and shared packages.

## 📁 Project Structure

```
my-turbo-repo/
├─ apps/
│  ├─ web-next/        # Next.js application
│  ├─ web-vite/        # React + Vite application
│  └─ api/             # NestJS API server
│
├─ packages/
│  ├─ ui/              # Shared React components
│  ├─ utils/           # Shared TypeScript utilities
│  └─ config/          # Shared configs (ESLint, TypeScript)
│
├─ package.json        # Root workspace configuration
├─ pnpm-workspace.yaml # PNPM workspace configuration
├─ turbo.json          # Turborepo pipeline configuration
└─ .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.0.0+

### Installation

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Run linter on all apps
pnpm lint

# Run tests
pnpm test
```

### Running Individual Apps

```bash
# Run Next.js app only
cd apps/web-next
pnpm dev

# Run Vite app only
cd apps/web-vite
pnpm dev

# Run NestJS API only
cd apps/api
pnpm dev
```

## 📦 Apps

### web-next

Next.js 16 application with:

- TypeScript
- React 19
- Redux Toolkit
- TailwindCSS
- React Virtual
- Running on port 3000

### web-vite

React 19 + Vite application with:

- TypeScript
- Fast development with Vite
- Modern React patterns
- Running on port 3001

### api

NestJS API server with:

- TypeScript
- RESTful endpoints
- CORS enabled
- Running on port 3002

## 📚 Shared Packages

### @monorepo/ui

Shared React components library for use across applications.

### @monorepo/utils

Shared TypeScript utilities and helpers for use across applications.

### @monorepo/config

Shared configuration files (TypeScript base config, ESLint rules, etc.)

## 🏗️ Turborepo Features

- **Fast builds**: Incremental builds and caching
- **Parallel execution**: Run tasks across multiple workspaces simultaneously
- **Smart dependencies**: Automatic dependency graph resolution
- **Remote caching**: Cache builds across machines (optional)

## 📝 Using Shared Packages

To use shared packages in your apps:

```json
{
  "dependencies": {
    "@monorepo/ui": "*",
    "@monorepo/utils": "*"
  }
}
```

Then run `pnpm install` at the root level.

## 🔧 Configuration

### Turbo Pipeline

The `turbo.json` file defines task execution order and caching behavior for:

- `build`: Build all packages with caching
- `dev`: Development mode without caching
- `lint`: Linting across the monorepo
- `test`: Testing with coverage output
- `start`: Running applications

## 📖 Learn More

- [Turborepo Documentation](https://turbo.build)
- [PNPM Documentation](https://pnpm.io)
- [Next.js Documentation](https://nextjs.org)
- [Vite Documentation](https://vitejs.dev)
- [NestJS Documentation](https://docs.nestjs.com)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
