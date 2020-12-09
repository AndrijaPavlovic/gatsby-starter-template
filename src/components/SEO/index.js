import React from 'react';
import { Helmet } from 'react-helmet';

import { APP_URL } from '../../settings';
import { generateFacebookMeta, generateTwitterMeta } from '../../utils/metadata';

const SEO = props => {
  const { path, title, keywords, description, lang } = props;
  const robotsContent = process.env.SHOULD_INDEX ? 'index' : 'noindex';

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang }}
      meta={[
        { name: 'keywords', content: keywords },
        { name: 'robots', content: robotsContent },
        { name: 'description', content: description },
        //
        ...generateFacebookMeta(props),
        ...generateTwitterMeta(props),
      ]}
    >
      {path ? <link rel="canonical" href={APP_URL + path} /> : ''}
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = {
  lang: 'EN',
};
