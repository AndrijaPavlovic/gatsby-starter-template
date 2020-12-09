// import Img from '../../src/images/default_og_image.jpg'; // todo: default img

import { APP_URL } from '../settings';

export const generateTwitterMeta = (metadata = null) => {
  if (!metadata) return [];
  //
  const { description, image, title } = metadata;

  return [
    {
      name: 'twitter:image',
      content: image,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];
};

export const generateFacebookMeta = (metadata = null) => {
  if (!metadata) return [];
  //
  const { description, image, path, title } = metadata;

  return [
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:url',
      content: APP_URL + path,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ];
};

// TODO:
export const mapMetaHOC = () => {};
