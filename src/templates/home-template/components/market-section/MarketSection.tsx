import React from 'react';
import Image from 'next/image';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading3 from '@/components/typography/Heading3';
import BodyText from '@/components/typography/BodyText';
import { marketCardData } from '../../constants/market-data';

const MarketSection = () => {
    return (
        <section className="w-full flex min-h-[100vh] relative bg-black">
            <div className="hidden xl:block h-full w-full bg-[url(/images/home/market-image.webp)] bg-center bg-no-repeat bg-cover absolute top-0" />
            <PaddedWrapper className="flex flex-col items-center w-full z-0">
                <div className="w-[calc(100vw-30px)] md:w-full max-w-app-w overflow-x-auto scrollbar-hide xl:pb-[150px]">
                    <div className="w-full flex md:flex-col gap-6">
                        {marketCardData.map((data, index) => (
                            <MarketCard key={index} {...data} />
                        ))}
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default MarketSection;

type MarketCardProps = {
    title: string;
    content: string;
    image: string;
};

const MarketCard = ({ title, content, image }: MarketCardProps) => {
    return (
        <div className="min-w-[292px] md:w-full min-h-[645px] md:min-h-[302px] flex flex-col-reverse md:flex-row gap-4 justify-end bg-[rgba(19,23,29,0.60)] rounded-md overflow-hidden">
            <div className="w-full md:w-2/3 flex flex-col gap-4 p-6 md:justify-center md:items-center">
                <Heading3 className="w-full">{title}</Heading3>
                <BodyText>{content}</BodyText>
            </div>
            <div className="relative w-full md:w-1/3 h-[160px] md:h-auto">
                <Image src={image} fill alt="" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
};
