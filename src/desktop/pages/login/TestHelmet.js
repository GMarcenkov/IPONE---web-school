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
            
                <meta property="description" content="description" />
                {/* OpenGraph tags */}
                <meta property="og:url" content="URL" />
                <meta property="og:title" content="title" />
                <meta property="og:description" content="og:description" />
                <meta property="og:image" content={Nikola} />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="facebook" />
                {/* Twitter Card tags */}
                <meta property="twitter:title" content="twitter title" />
                <meta property="twitter:description" content="twiter desc" />
                <meta property="twitter:image" content={Nikola} />
                <meta property="twitter:card" content="summary" />
                <meta
                    property="twitter:creator"
                    content="Twitter creater"
                />
            </Helmet>
       
    
    );
  }