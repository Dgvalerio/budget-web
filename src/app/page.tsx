import { NextPage } from 'next';

import { Heading } from '@/components/heading/heading';
import { Text } from '@/components/text/text';

import { ChevronDown, PiggyBank } from 'lucide-react';

const Home: NextPage = () => (
  <main className="min-h-screen w-full">
    <nav className="flex h-12 justify-between border-b-[1px] border-gray-850 text-gray-600">
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
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-[50%] bg-gray-600"></div>
        <div>
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </nav>
  </main>
);

export default Home;
