import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Heading2 from '@/components/typography/Heading2';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading4 from '@/components/typography/Heading4';
import BodyText from '@/components/typography/BodyText';
import { creonPassNftImage } from '@/assets/images/home';

const CreonPassSection = () => {
    return (
        <section className="w-full flex min-h-[100dvh] bg-black py-20 order-5 xl:order-2">
            <PaddedWrapper className="w-full flex justify-center">
                <div className="w-full flex flex-col md:flex-row gap-6 max-w-app-w">
                    <div className="w-full md:w-1/2 flex flex-col gap-10">
                        <Heading2 className="border-b-[1px] border-b-[#13171D] py-6">
                            creon pass nft
                        </Heading2>
                        <Heading4 className="gradient text-gradient">
                            The Creon NFT pass unlocks access to AI projects,
                            the Creon launchpad, and a ticket to generate
                            passive income through AI-driven tools
                        </Heading4>
                        <div className="w-full md:hidden h-[485px] relative">
                            <Image
                                src={creonPassNftImage.src}
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                        <ContentVariant1 />
                        <ContentVariant2 />
                        <Link href="#" className="mt-10">
                            <BodyText className="flex items-center justify-center w-full md:w-[231px] xl:w-[453px] h-[46px] xl:h-[54px] gradient rounded-md">
                                Buy Creon Pass
                            </BodyText>
                        </Link>
                    </div>
                    <div className="w-full hidden md:flex flex-1 h-[694px] xl:h-[808px] md:w-1/2 relative">
                        <Image
                            src={creonPassNftImage.src}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default CreonPassSection;

type ContentTextProps = React.PropsWithChildren & {
    className?: string;
};

const ContentText = ({ children, className = '' }: ContentTextProps) => {
    return (
        <BodyText
            className={twMerge(
                'px-4 py-2 border-[1px] border-[#13171D] w-fit rounded-md',
                className,
            )}
        >
            {children}
        </BodyText>
    );
};

const ContentVariant1 = () => {
    return (
        <div className="hidden xl:flex flex-col gap-4">
            <ContentText>
                Pre-launch investment opportunities for upcoming AI projects
            </ContentText>
            <ContentText>
                Free and early access to Creon built AI projects
            </ContentText>
            <ContentText>
                Higher allocation limits on the Creon AI Launchpad
            </ContentText>
            <ContentText>
                Revenue share distribution from Creon built AI projects
            </ContentText>
        </div>
    );
};

const ContentVariant2 = () => {
    return (
        <div className="xl:hidden flex flex-col gap-4">
            <ContentText>
                Prospect to derive financial benefits through the redistributed
                profit generated from AI tools, but only when the majority of
                NFT holders decide to release the tool publicly.
            </ContentText>
            <div className="flex gap-4">
                <ContentText>
                    The possibility of allocating investments into new,
                    exceptional tokenized AI tools through Creon Launchpad.
                </ContentText>
                <ContentText>
                    Early access to allocations in inspiring tokenized projects,
                    real businesses based on AI.
                </ContentText>
            </div>
        </div>
    );
};
