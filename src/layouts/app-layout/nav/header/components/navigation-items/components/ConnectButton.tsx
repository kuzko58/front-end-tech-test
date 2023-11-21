import React from 'react';
import Link from 'next/link';
import { APP_PATHS } from '@/lib/paths/client-path';

const ConnectButton = () => {
    return (
        <Link href={APP_PATHS.connect}>
            <div className="w-[110px] xl:w-[132px] h-[38px] xl:h-[44px] border-2 border-white text-white rounded-md flex items-center justify-center text-lg font-satoshi-bold">
                Connect
            </div>
        </Link>
    );
};

export default ConnectButton;
