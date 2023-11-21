import React from 'react';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading2 from '@/components/typography/Heading2';
import Heading3 from '@/components/typography/Heading3';
import Image from 'next/image';
import {
    profitingThroughImageMD,
    profitingThroughImageXL,
} from '@/assets/images/home';
import Heading4 from '@/components/typography/Heading4';
import BodyText from '@/components/typography/BodyText';

const ProfitingThroughSection = () => {
    return (
        <section className="w-full flex min-h-[100dvh] bg-black py-20 order-3">
            <PaddedWrapper className="w-full flex justify-center">
                <div className="w-full flex flex-col gap-4 max-w-app-w">
                    <Heading2>Profiting Through</Heading2>
                    <Heading3 className="gradient text-gradient text-right">
                        AI Innovation & Decentralization
                    </Heading3>
                    <ContentXL />
                    <ContentMD />
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default ProfitingThroughSection;

const ContentXL = () => {
    return (
        <div className="hidden xl:flex w-full gap-10 py-6">
            <div className="w-2/3 relative">
                <Image
                    src={profitingThroughImageXL.src}
                    width={947}
                    height={485}
                    alt=""
                />
            </div>
            <div className="w-1/3 flex flex-col gap-6 items-center justify-center py-2 px-6 border-l-[1px] border-r-[1px] border-[#13171D]">
                <Heading4>
                    The dynamic community driven business model of the future.
                </Heading4>
                <BodyText>
                    At Creon, we blend the power of AI tools with the dynamic
                    crypto and NFT markets, utilizing an innovative business
                    model to drive profitability. This approach empowers our
                    community, as our NFT and token holders directly benefit
                    from the growth and prosperity of the Creon network,
                    creating a win-win scenario for both our community and for
                    the projects we launch.
                </BodyText>
            </div>
        </div>
    );
};

const ContentMD = () => {
    return (
        <div className="xl:hidden flex flex-col lg:flex-row w-full gap-6 py-6">
            <div className="w-full lg:w-3/5 h-[176px] sm:h-[262px] md:h-[362px] lg:h-[493px] relative">
                <Image
                    src={profitingThroughImageMD.src}
                    fill
                    alt=""
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-6 items-center justify-center py-2 lg:px-6 border-[#13171D] border-b-[1px] border-t-[1px] lg:border-t-0 lg:border-b-0 lg:border-l-[1px] lg:border-r-[1px]">
                <Heading4 className="text-left w-full">
                    A Dynamic Business Model for Sustainable Growth and
                    Community Engagement
                </Heading4>
                <BodyText>
                    At Creon, we merge AI tools with the crypto and NFT markets,
                    leveraging a dynamic business model to generate profits. Our
                    commitment to innovation and decentralization allows us to
                    strengthen our market position and foster a sustainable
                    ecosystem. We empower our community, ensuring transparency
                    and actively involving NFT holders in our success.
                </BodyText>
            </div>
        </div>
    );
};
