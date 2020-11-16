import React from 'react';
import Nikola from '../../../images/nikola.jpg';
import {Helmet} from "react-helmet";

export default function TestHelmet(props) {
    return (
      
        <Helmet>
            {console.log('1')}
                <meta charSet="utf-8" />
                <title>За Основателите</title>
                <link rel="canonical" href="http://mysite.com/example" />
        
                 {/* General tags */}
            
                <meta name="description" content="description" />
                {/* OpenGraph tags */}
                <meta name="og:url" content="URL" />
                <meta name="og:title" content="title" />
                <meta name="og:description" content="og:description" />
                <meta name="og:image" content={Nikola} />
                <meta name="og:type" content="website" />
                <meta name="fb:app_id" content="facebook" />
                {/* Twitter Card tags */}
                <meta name="twitter:title" content="twitter title" />
                <meta name="twitter:description" content="twiter desc" />
                <meta name="twitter:image" content={Nikola} />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:creator"
                    content="Twitter creater"
                />
            </Helmet>
       
    
    );
  }