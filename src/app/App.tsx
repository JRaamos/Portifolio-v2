import { Home } from '../pages/Home';
import { AppProviders } from './providers/AppProviders';

export function App() {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  );
}
