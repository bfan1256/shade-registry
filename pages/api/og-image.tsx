import {withOGImage} from 'next-api-og-image';
import {EyeIcon, DownloadIcon} from '@heroicons/react/solid';
import IBMPlexSansRegular from 'fonts/IBMPlexSansRegular';
import IBMPlexSansBold from "fonts/IBMPlexSansBold";

const IMAGE_URL = process.env.VERCEL_URL ?? 'https://shade-registry.vercel.app'

interface QueryParams {
    title: string;
}

const style = `
@font-face {
    font-family: 'IBMPlexSans';
    font-style:  normal;
    font-weight: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${IBMPlexSansRegular}) format('truetype');
}

@font-face {
    font-family: 'IBMPlexSans';
    font-style:  normal;
    font-weight: bold;
    src: url(data:font/truetype;charset=utf-8;base64,${IBMPlexSansBold}) format('truetype');
}

@keyframes spin {
  from { transform: rotate(-30deg); }
  to { transform: rotate(330deg); }
}

  
* {
    margin: 0;
    padding: 0;
    font-family: 'IBMPlexSans', serif;
}

.drone {
    position: absolute;
}

.drone.left {
    right: 270px;
    top: 35px;
    transform: rotate(-30deg);
    animation: spin 2s linear 4s infinite;
}

.drone.right {
    right: 60px;
    top: 90px;
}

.og-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    
    padding: 45px 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background: linear-gradient(90deg, rgba(252, 248, 255) 0%, rgba(254, 244, 245) 100%);
}

.title {
    font-size: 70px;
    font-weight: bold;
    
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
}


.logo {
    display: flex;
    align-items: center;
}

.logo .text {
    margin-left: 20px;
    font-size: 28px;
    font-weight: bold;
}

.construction {
    position: absolute;
    right: 0px;
    bottom: 0px;
}

.views, .downloads {
    color: #855cf8;
}

.icon {
    margin-top: 13px;
    float: left;
    
    width: 35px;
    height: 35px;
}

.count, .label {
    margin-left: 50px;
}

.count {
    font-size: 48px;
    font-weight: bold;
}

.label {
    font-size: 32px;
}

.info {
    display: flex;
    gap: 100px;
    margin-bottom: 70px;
}
`

export default withOGImage<'query', QueryParams>({
    template: {
        react: async ({title}) => {
            return (
                <html>
                <head>
                    <style dangerouslySetInnerHTML={{__html: style}}/>
                </head>
                <body>
                <div className="og-container">
                    <div className="logo">
                        <img
                            className="img"
                            width={55}
                            src={`${IMAGE_URL}/logo.svg`}
                        />
                        <p className="text">SHADE</p>
                    </div>
                    <img
                        className="drone img left"
                        width={170}
                        src={`${IMAGE_URL}/Calque_1.svg`}
                    />
                    <img
                        className="drone img right"
                        width={170}
                        src={`${IMAGE_URL}/Calque_1.svg`}
                    />
                    <img
                        className="construction img"
                        width={400}
                        src={`${IMAGE_URL}/construction_2.svg`}
                    />
                    <h1 className="title">{title}</h1>
                    <div className="info">
                        <div className="views">
                            <EyeIcon className="icon"/>
                            <p className="count">232</p>
                            <p className="label">Views</p>
                        </div>
                        <div className="downloads">
                            <DownloadIcon className="icon"/>
                            <p className="count">6</p>
                            <p className="label">Downloads</p>
                        </div>
                    </div>
                </div>
                </body>
                </html>
            )
        },
    },
    dev: {
        inspectHtml: false,
        errorsInResponse: process.env.NODE_ENV === 'development',
    },
})
