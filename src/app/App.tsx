import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import { ToastProvider } from './providers/ToastProvider';
import AppShell from '../components/layout/AppShell';
import SinglePage from '../pages/SinglePage';
import BootScreen from '../components/ui/BootScreen';
import { useScrollProgress } from '../hooks/useScrollProgress';

function easeInQuad(t: number) {
  return t * t;
}

function lerpColor(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function ScrollDarkenController() {
  const progress = useScrollProgress();
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const t = easeInQuad(progress);

    root.style.setProperty('--scroll-progress', String(progress));

    const maxOpacity = theme === 'light' ? 0.07 : 0.12;
    root.style.setProperty('--scroll-overlay-opacity', String(t * maxOpacity));

    if (theme === 'light') {
      const start: [number, number, number] = [238, 242, 247];
      const end: [number, number, number] = [225, 231, 240];
      const [r, g, b] = lerpColor(start, end, t);
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
      const start: [number, number, number] = [15, 23, 42];
      const end: [number, number, number] = [10, 13, 28];
      const [r, g, b] = lerpColor(start, end, t);
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }, [progress, theme]);

  return null;
}

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <ThemeProvider>
      <ToastProvider>
        {booting && <BootScreen onComplete={() => setBooting(false)} />}
        {!booting && (
          <>
            <ScrollDarkenController />
            <div className="scroll-darken-wrapper">
              <AppShell>
                <SinglePage />
              </AppShell>
            </div>
          </>
        )}
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;