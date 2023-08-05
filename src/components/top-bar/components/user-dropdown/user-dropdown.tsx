'use client';

import React, { FC, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/button/button';
import { routes } from '@/middleware';

import Cookies from 'js-cookie';
import { ChevronDown, LogOut } from 'lucide-react';

export const UserDropdown: FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const toggle = (): void => setActive((prev) => !prev);

  const logout = (): void => {
    setActive(false);

    Cookies.remove('token', { path: '' });

    router.push(routes.signIn);
  };

  return (
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-[50%] bg-gray-600"></div>
      <div className="cursor-pointer" onClick={toggle}>
        <ChevronDown className="h-6 w-6" />
      </div>
      {active && (
        <div className="absolute right-0 top-12 mr-1 mt-1 flex flex-col rounded border-[1px] border-gray-850 bg-gray-900 py-1">
          <Button variant="ghost" onClick={logout}>
            Sair <LogOut className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
};
