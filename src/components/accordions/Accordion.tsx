import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type AccordionProps = React.PropsWithChildren & {
    title?: string;
    wrapperClass?: string;
    buttonWrapperClass?: string;
    Button: React.FC<AccordionBtnProps>;
};

export type AccordionBtnProps = {
    open: boolean;
    title?: string;
};

const Accordion: React.FC<AccordionProps> = ({
    title,
    wrapperClass,
    buttonWrapperClass,
    Button,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const transitionClasses =
        'transform transition-all ease-in-out duration-300';

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={twMerge('w-full', wrapperClass)}>
            <div
                className={twMerge('w-full', buttonWrapperClass)}
                onClick={toggleAccordion}
            >
                <Button title={title} open={isOpen} />
            </div>
            <div
                className={`${transitionClasses} overflow-hidden  ${
                    isOpen ? 'max-h-[1000px]' : 'max-h-0'
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
