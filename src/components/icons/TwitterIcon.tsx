import {SVGProps} from 'react';

export default function TwitterIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M20.8 6.6c.9-.6 1.5-1.4 1.8-2.4-.9.5-1.8.8-2.8 1a4.2 4.2 0 0 0-7.4 2.9c0 .3 0 .6.1.8-3.5-.2-6.7-1.9-8.8-4.7a4.2 4.2 0 0 0 1.3 5.6c-.8 0-1.6-.2-2.3-.6v.1c0 2 1.5 3.8 3.5 4.2-.4.2-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 1.7 2.1 2.9 4 3a8.4 8.4 0 0 1-5.2 1.8H2a11.8 11.8 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.5 1.5-1.3 2-2.1Z"
                fill="currentColor"
            />
        </svg>
    );
}
