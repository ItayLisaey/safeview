import { useMemo, useState } from 'react';
import classes from './safe-view.module.css';

export interface SafeViewProps {
  accessKey?: React.HTMLAttributes<HTMLButtonElement>['accessKey'];
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
    if (safeMode) return [classes['safe-mode'], className];
    return [className];
  }, [safeMode]);
  return (
    <>
      <div className={classNames.join(' ')}>{children}</div>
      <button
        accessKey={accessKey ?? 's'}
        hidden
        onClick={() => setSafeMode(!safeMode)}
      ></button>
    </>
  );
};
