'use client';

import GlobalHeader from '@/components/GlobalHeader/GlobalHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
			<Theme theme="g100">
      	<GlobalHeader />
			</Theme>
      <Content>{children}</Content>
    </div>
  );
}
