import React from 'react';
import DiscordIcon from '@/components/icons/DiscordIcon';
import FooterLogo from '@/components/icons/FooterLogo';
import TelegramIcon from '@/components/icons/TelegramIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="w-full absolute bottom-0">
            <PaddedWrapper className="w-full flex items-center justify-center">
                <div className="w-full max-w-app-w flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-4  md:gap-14 xl:gap-[90px]">
                        <p className="text-white">
                            © Creon {currentYear}. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <TelegramIcon className="fill-[rgb(59,130,246,0)] hover:fill-[rgba(59,130,246,1)] cursor-pointer" />
                            <DiscordIcon className="fill-[rgb(59,130,246,0)] hover:fill-[rgba(59,130,246,1)] cursor-pointer" />
                            <TwitterIcon className="fill-[rgb(59,130,246,0)] hover:fill-[rgba(59,130,246,1)] cursor-pointer" />
                        </div>
                    </div>
                    <FooterLogo />
                </div>
            </PaddedWrapper>
        </footer>
    );
};

export default Footer;
