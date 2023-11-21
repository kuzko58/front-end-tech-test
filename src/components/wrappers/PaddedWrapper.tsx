import React from 'react';
import { twMerge } from 'tailwind-merge';

type PaddedWrapperProps = React.PropsWithChildren & {
    className?: string;
};

const PaddedWrapper = ({ children, className = '' }: PaddedWrapperProps) => {
    return (
        <div
            className={twMerge(
                'px-app-x md:px-app-x-md xl:px-app-x-xl py-app-y md:py-app-y-md xl:py-app-y-xl',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default PaddedWrapper;
