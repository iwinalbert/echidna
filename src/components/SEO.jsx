import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | Echidna.in` : 'Echidna.in | Custom Sublimation Printing'}</title>
            {description && <meta name="description" content={description} />}
            {title && <meta property="og:title" content={`${title} | Echidna.in`} />}
            {description && <meta property="og:description" content={description} />}
            {title && <meta property="twitter:title" content={`${title} | Echidna.in`} />}
            {description && <meta property="twitter:description" content={description} />}
        </Helmet>
    );
};

export default SEO;
