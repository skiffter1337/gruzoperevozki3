declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  const ReactComponent: FC<SVGProps<SVGSVGElement> & { title?: string; desc?: string }>;
  export default ReactComponent;
}