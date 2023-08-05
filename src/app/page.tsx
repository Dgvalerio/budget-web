import { NextPage } from 'next';

import { TopBar } from '@/components/top-bar/top-bar';

const Home: NextPage = () => (
  <main className="min-h-screen w-full">
    <TopBar />
  </main>
);

export default Home;
