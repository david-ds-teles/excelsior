# Excelsior - AI-First Landing Page

A modern, high-end landing page for Excelsior, showcasing AI-first software development capabilities.

## Project Structure

```
src/
├── app/           # Next.js App Router files
│   ├── components/ # Reusable UI components
│   ├── actions/    # Business logic and API calls
│   └── lib/        # Utility functions and shared code
├── styles/        # Global styles and Tailwind config
└── types/         # TypeScript type definitions
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and update with your environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

- Follow Clean Architecture principles
- Use TypeScript for all code
- Implement mobile-first responsive design
- Maintain high performance standards (Lighthouse score ≥ 90)
- Follow accessibility best practices
- Use semantic HTML and ARIA attributes
- Implement proper error handling
- Write unit tests for components and actions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- Next.js 15
- TypeScript
- TailwindCSS
- Shadcn UI
- Magic UI
- Framer Motion (optional)

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

MIT

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
