import { useEffect, useMemo, useState } from 'react';

//============== Filters ==============

import hiddenFilter from './filters/hidden.filter.css';
import blurFilter from './filters/blur.filter.css';
import blackFilter from './filters/black.filter.css';

type Filters = 'hidden' | 'blur' | 'black';

const filters: Record<Filters, string> = {
  hidden: hiddenFilter,
  blur: blurFilter,
  black: blackFilter,
};

//============== Component ==============

export interface SafeViewProps {
  accessKey?: string;
  filter?: Filters;
  className?: string;
  children?: React.ReactNode;
}

export const SafeView: React.FC<SafeViewProps> = ({
  children,
  filter = 'blur',
  accessKey = 's',
  className,
}) => {
  const [safeMode, setSafeMode] = useState(false);

  //------------ Classname changer -------------

  const classNames = useMemo(() => {
    if (safeMode) return ['safe-mode', className];
    return [className];
  }, [safeMode]);

  // -------- Event Handlers --------

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.shiftKey && e.key.toLowerCase() === accessKey.toLowerCase()[0])
      setSafeMode(!safeMode);
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
      <style>{filters[filter]}</style>
    </>
  );
};
