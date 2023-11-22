'use client';

import React from 'react';
import HamburgerMenu from '@/components/icons/menu-icons/HamburgerMenu';
import { useNavigationItems } from './use-navigation-items';
import HeaderLinks from './components/HeaderLinks';
import ConnectButton from './components/ConnectButton';
import SocialMediaBox from '../../../components/SocialMediaBox';

const NavigationItems = () => {
    const { isOpen, toggleMenu } = useNavigationItems();

    return (
        <div className="z-40">
            <div className="flex gap-14 items-center">
                <div className="hidden xl:block">
                    <HeaderLinks />
                </div>
                <div className="flex gap-4 items-center">
                    <ConnectButton />
                    <div
                        className="cursor-pointer xl:hidden"
                        onClick={toggleMenu}
                    >
                        <HamburgerMenu
                            isOpen={isOpen}
                            svgClass={`group hover:bg-blue-500 ${
                                isOpen ? 'bg-blue-500' : ''
                            }`}
                            barClasses={`group-hover:stroke-white ${
                                isOpen ? 'stroke-white' : ''
                            }`}
                        />
                    </div>
                </div>
            </div>

            <SideMenu isOpen={isOpen} />
        </div>
    );
};

export default NavigationItems;

type SideMenuProps = {
    isOpen: boolean;
};

const SideMenu = ({ isOpen }: SideMenuProps) => {
    const transformClasses =
        'transform transition-all ease-in-out duration-300';

    return (
        <div
            className={`${transformClasses} xl:hidden absolute top-0 right-0 z-[-1] w-full h-[100dvh] flex justify-end overflow-hidden ${
                isOpen
                    ? 'bg-[rgba(0,0,0,0.5)]'
                    : 'bg-[rgba(0,0,0,0)] invisible pointer-events-none'
            }`}
        >
            <div
                className={`${transformClasses} h-full w-52 bg-black pt-24 pb-8 pl-7 md:pl-4 flex flex-col justify-between ${
                    isOpen ? 'translate-x-0' : 'translate-x-[100%]'
                }`}
            >
                <HeaderLinks />
                <SocialMediaBox />
            </div>
        </div>
    );
};
