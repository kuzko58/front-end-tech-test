import React from 'react';
import { twMerge } from 'tailwind-merge';
import DiscordIcon from '@/components/icons/DiscordIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

type SocialMediaBoxProps = {
    wrapperClass?: string;
};

const SocialMediaBox = ({ wrapperClass = '' }: SocialMediaBoxProps) => {
    return (
        <div className={twMerge('flex gap-4', wrapperClass)}>
            <TelegramIcon
                className="group fill-[rgb(59,130,246,0)] hover:fill-[rgba(59,130,246,1)] cursor-pointer"
                circleClass="group-hover:stroke-blue-500"
            />
            <DiscordIcon
                className="group fill-[rgb(59,130,246,0)] hover:fill-[rgba(59,130,246,1)] cursor-pointer"
                circleClass="group-hover:stroke-blue-500"
            />
            <TwitterIcon
                className="group fill-[rgb(59,130,246,0)] hover:fill-[rgba(59,130,246,1)] cursor-pointer"
                circleClass="group-hover:stroke-blue-500"
            />
        </div>
    );
};

export default SocialMediaBox;
