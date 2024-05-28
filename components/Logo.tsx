import clsx from 'clsx';

import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Logo = ({
  textClassName,
  logoClassName,
  logoType,
}: {
  textClassName?: string;
  logoClassName?: string;
  logoType?: string;
}) => {
  return (
    <Link href='/' className={clsx('font-bold   text-sm flex items-center justify-center text-white space-x-2', textClassName)}>
      <img src={logoType === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'} alt='Logo' className={clsx('w-6 h-6 rounded-[6px]', logoClassName)} />
      <span className={twMerge('font-mono', textClassName)}>CEREB[RM]</span>
    </Link>
  );
};

export default Logo;
