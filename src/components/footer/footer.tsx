import React, { FC } from 'react';

import { Text } from '@/components/text/text';

export interface FooterProps {}

export const Footer: FC<FooterProps> = () => (
  <footer className="flex flex-col gap-2 px-4 text-center text-gray-800">
    <Text>Davi Gonçalves Valério</Text>
    <Text>2023</Text>
  </footer>
);
