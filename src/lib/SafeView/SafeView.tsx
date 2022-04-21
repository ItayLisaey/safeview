import { useEffect, useMemo, useState } from 'react';
import './safe-view.css';
import styleText from './safe-view.css';

export interface SafeViewProps {
  accessKey?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SafeView: React.FC<SafeViewProps> = ({
  children,
  accessKey,
  className,
}) => {
  const [safeMode, setSafeMode] = useState(false);

  const classNames = useMemo(() => {
    if (safeMode) return ['safe-mode', className];
    return [className];
  }, [safeMode]);

  const handleKeyPress = (e: KeyboardEvent) => {
    const access = accessKey ? accessKey.toLowerCase()[0] : 's';
    if (e.shiftKey && e.key.toLowerCase() === access) setSafeMode(!safeMode);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className={classNames.join(' ')}>{children}</div>
      <div
        hidden
        dangerouslySetInnerHTML={{
          __html: `<style>${styleText}</style>`,
        }}
      ></div>
    </>
  );
};
