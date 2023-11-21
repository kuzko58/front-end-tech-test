import React from 'react';
import Image from 'next/image';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading3 from '@/components/typography/Heading3';
import Heading4 from '@/components/typography/Heading4';
import BodyText from '@/components/typography/BodyText';
import {
    benefitsCardData,
    benefitsCardDataLG,
} from '../../constants/benefits-data';

const BenefitsSection = () => {
    return (
        <section className="w-full flex min-h-[100vh] bg-black py-20 relative order-6 xl:order-5">
            <div className="xl:hidden h-full w-full bg-[url(/images/home/market-image.webp)] bg-center bg-no-repeat bg-cover absolute top-0" />
            <PaddedWrapper className="w-full flex justify-center">
                <div className="w-full max-w-app-w z-0 pb-[100px] xl:pb-2">
                    <div className="hidden xl:flex gap-6">
                        {benefitsCardData.map((data, index) => (
                            <BenefitsCard key={index} {...data} />
                        ))}
                    </div>
                    <div className="xl:hidden w-[calc(100vw-30px)] md:w-[calc(100vw-65px)] overflow-x-auto scrollbar-hide">
                        <div className="flex gap-3">
                            {benefitsCardDataLG.map((data, index) => (
                                <BenefitsCard key={index} {...data} />
                            ))}
                        </div>
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default BenefitsSection;

type BenefitsCardProps = {
    title: string;
    subtitle: string;
    image: string;
    content: string;
};

const BenefitsCard = ({
    title,
    subtitle,
    image,
    content,
}: BenefitsCardProps) => {
    const transitionClasses =
        'transform transition-all ease-in-out duration-300';

    return (
        <div className="w-full min-w-[308px] flex flex-col gap-3 xl:gap-6 bg-[rgba(19,23,29,0.60)] rounded-md h-[616px] xl:h-[659px] py-[20px] xl:py-[30px]">
            <div className="w-full flex flex-col gap-1 xl:gap-2 px-[30px] min-h-[90px] xl:min-h-[120px]">
                <Heading3>{title}</Heading3>
                <Heading4 className="gradient text-gradient">
                    {subtitle}
                </Heading4>
            </div>
            <div className="w-full pr-[20px] xl:pr-[30px]">
                <div className="overflow-hidden rounded-e-md h-[234px]">
                    <div
                        className={`${transitionClasses} relative w-full h-full hover:scale-[1.1]`}
                    >
                        <Image
                            src={image}
                            fill
                            alt=""
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
            <BodyText className="px-[20px] xl:px-[30px]">{content}</BodyText>
        </div>
    );
};
