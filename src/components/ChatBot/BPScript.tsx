import Script from 'next/script';
const src: string = "https://cdn.botpress.cloud/webchat/v2/inject.js";
const style: string = "https://mediafiles.botpress.cloud/fd716950-6cdc-412f-8956-674a6fbe0615/webchat/v2/config.js";

export const BPScript = () => {
  return (
    <div style={{zIndex: 2147483647}}>
      <Script src={src} />
      <Script src={style} />
    </div>
  )
}