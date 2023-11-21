'use client';

import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading3 from '@/components/typography/Heading3';
import Accordion, {
    AccordionBtnProps,
} from '@/components/accordions/Accordion';
import Heading4 from '@/components/typography/Heading4';
import UpCaret from '@/components/icons/UpCaret';
import DownCaret from '@/components/icons/DownCaret';
import BodyText from '@/components/typography/BodyText';
import { ourVisionImage } from '@/assets/images/home';
import { ourVisionAccordionData } from '../../constants/our-vision-data';

const OurVisionSection = () => {
    return (
        <section className="w-full flex min-h-[100dvh] bg-black py-20 order-2 xl:order-4">
            <PaddedWrapper className="w-full flex justify-center">
                <div className="w-full flex flex-col lg:flex-row gap-0 md:gap-14 max-w-app-w z-10">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <Heading3 className="hidden xl:block max-w-[699px]">
                            Our vision is to support the innovation of AI
                            blockchain projects{' '}
                            <span className="gradient text-gradient">
                                while prioritizing communities and democratizing
                                profits
                            </span>
                        </Heading3>
                        <Heading3 className="xl:hidden">
                            our mission is to provide unique, confidential
                            AI-based tools, to which you will gain{' '}
                            <span className="gradient text-gradient">
                                lifetime access through NFT tokens and our CREON
                                token.
                            </span>
                        </Heading3>
                        <ImageBox
                            wrapperClass="h-[182px] lg:h-[377px] xl:h-[502px] mt-[20px] xl:mt-0 md:hidden lg:block lg:overflow-visible"
                            innerBoxClass="right-[calc(0vw-50px)] lg:right-[-200px]"
                            imageContainer="w-[302px] h-[182px] lg:w-[628px] lg:h-[377px] xl:w-[836px] xl:h-[502px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex">
                        <ul className="w-full flex flex-col">
                            {ourVisionAccordionData.map((data, index) => (
                                <li
                                    key={index}
                                    className="px-2 py-4 border-[#13171D] border-b-[1px]"
                                >
                                    <Accordion
                                        Button={(props) => (
                                            <AccordionButton
                                                {...props}
                                                Icon={data.Icon}
                                            />
                                        )}
                                        title={data.title}
                                    >
                                        <BodyText className="pl-[130px]">
                                            {data.content}
                                        </BodyText>
                                    </Accordion>
                                </li>
                            ))}
                        </ul>
                        <ImageBox
                            wrapperClass="h-[377px] ml-[-20%] mt-auto mb-[-100px] hidden md:block lg:hidden"
                            innerBoxClass="right-[calc(0vw-150px)]"
                            imageContainer="w-[628px] h-[377px]"
                        />
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default OurVisionSection;

type AccordionButtonProps = AccordionBtnProps & {
    Icon: React.FC<{ active?: boolean }>;
};

const AccordionButton = ({ open, title, Icon }: AccordionButtonProps) => {
    return (
        <div className="w-full flex items-center gap-6 justify-between cursor-pointer py-4 group">
            <div className="flex items-center gap-6">
                <div className="w-[73px] h-[83px] min-w-[73px]  xl:w-[100px] xl:h-[114px] xl:min-w-[100px]">
                    <Icon active={open} />
                </div>
                <Heading4 className="max-w-[360px] group-hover:text-blue-500">
                    {title}
                </Heading4>
            </div>
            {open ? (
                <UpCaret className="group-hover:stroke-blue-500" />
            ) : (
                <DownCaret className="group-hover:stroke-blue-500" />
            )}
        </div>
    );
};

type ImageBoxProps = {
    wrapperClass?: string;
    innerBoxClass?: string;
    imageContainer?: string;
};

const ImageBox = ({
    wrapperClass = '',
    innerBoxClass = '',
    imageContainer = '',
}: ImageBoxProps) => {
    return (
        <div
            className={twMerge(
                'w-full z-[-1] overflow-hidden relative',
                wrapperClass,
            )}
        >
            <div className={twMerge('absolute ', innerBoxClass)}>
                <div className={twMerge('relative', imageContainer)}>
                    <Image
                        src={ourVisionImage.src}
                        fill
                        alt=""
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
};
