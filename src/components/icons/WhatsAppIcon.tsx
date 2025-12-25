import {SVGProps} from 'react';

export default function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M4.3 20.2 5.3 16a7.6 7.6 0 1 1 3 2.9l-4 1.3Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path
                d="M9.7 8.3c-.2-.5-.4-.4-.6-.4h-.4c-.2 0-.5.1-.7.3-.2.3-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.8 2.8 4.3 3.8 2.1.9 2.5.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1 .1-1.2 0-.2-.2-.3-.5-.4-.2-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.5.1l-.7.8c-.1.1-.3.2-.5.1-.2 0-.9-.3-1.8-1.1-.7-.6-1.1-1.4-1.2-1.7-.1-.2 0-.3.1-.4.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.3 0-.4-.1-.2-.5-1.3-.8-1.9Z"
                fill="currentColor"
            />
        </svg>
    );
}
