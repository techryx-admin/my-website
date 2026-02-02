import React from 'react';
import NextLink from 'next/link';

// Next.js Link component wrapper
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
    return (
        <NextLink href={href} onClick={onClick} className={className} {...props}>
            {children}
        </NextLink>
    );
};