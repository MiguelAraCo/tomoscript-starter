### Development

To start the project locally, run:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Documentation

### Requirements

- Node.js

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `npm run dev` — Starts the application in development mode at http://localhost:3000.
- `npm run build` — Creates an optimized production build of your application.
- `npm run start` — Starts the application in production mode.
- `npm run type-check` — Validate code using TypeScript compiler.
- `npm run lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.
- `npm run commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
