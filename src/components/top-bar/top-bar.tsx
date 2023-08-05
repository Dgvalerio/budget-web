import React, { FC } from 'react';

import { Heading } from '@/components/heading/heading';
import { Text } from '@/components/text/text';
import { UserDropdown } from '@/components/top-bar/components/user-dropdown/user-dropdown';

import { PiggyBank } from 'lucide-react';

export interface TopBarProps {}

export const TopBar: FC = () => (
  <nav className="inset-1 flex h-12 justify-between border-b-[1px] border-gray-850 text-gray-600">
    <div className="flex items-center gap-2 px-4">
      <PiggyBank className="h-8 w-8" />
      <div className="flex flex-col">
        <Text size="sm" className="leading-4">
          Orçamento de
        </Text>
        <Heading size="md" className="leading-4">
          Davi G. Valério
        </Heading>
      </div>
    </div>
    <UserDropdown />
  </nav>
);
