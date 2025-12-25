import {SVGProps} from 'react';

export default function TelegramIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M19.6 5.2c.3-.9-.5-1.6-1.3-1.3L3.8 9.3c-1 .4-.9 1.8.2 2.1l3.5 1 .6 3.9c.1 1 1.4 1.4 2 .6l2-2.4 3.8 3.1c.7.6 1.8.2 2-.8l1.7-11.6Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
            <path
                d="m8 13.8 9-7.2-6.8 8.6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
