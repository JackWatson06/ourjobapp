// https://github.com/vercel/next.js/discussions/18739#discussioncomment-1191242
// Thank you man that was fantastic!

import NextImage from 'next/image';

import style from "@styles/atoms/Image.module.css"

export default function Image(props) {
  const { ...rest } = props;
  return (
    <div className={style.ImageContainer}>
      <NextImage className={style.BaseImage} {...rest} layout="fill" priority />
    </div>
  );
};