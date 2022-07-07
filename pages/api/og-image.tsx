import {withOGImage} from 'next-api-og-image';
import {EyeIcon, DownloadIcon} from '@heroicons/react/solid';
import IBMPlexSansRegular from 'fonts/IBMPlexSansRegular';
import IBMPlexSansBold from "fonts/IBMPlexSansBold";

const IMAGE_URL = process.env.VERCEL_URL ?? 'https://shaderobotics.com'

interface QueryParams {
    name: string;
}

const style = `
@font-face {
    font-family: 'IBM Plex Sans';
    font-style:  normal;
    font-weight: normal;
    src: url(data:font/ttf;charset=utf-8;base64,${IBMPlexSansRegular}) format('ttf');
}

@font-face {
    font-family: 'IBM Plex Sans';
    font-style:  normal;
    font-weight: bold;
    src: url(data:font/ttf;charset=utf-8;base64,${IBMPlexSansBold}) format('ttf');
}
  
* {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
}

.drone .img {
    position: absolute;
}

.drone .img .left {
    right: 200px;
    top: 100px;
}

.drone .img .right {
    right: 200px;
    top: 100px;
}

.og-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    
    padding: 50px 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    font-size: 64px;
    font-weight: bold;
    
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}


.logo {
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo .text {
    font-size: 24px;
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
    gap: 150px;
    margin-bottom: 70px;
}
`

export default withOGImage<'query', QueryParams>({
    template: {
        react: async ({name}) => {
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
                            height={50}
                            width={50}
                            src={`${IMAGE_URL}/logo.svg`}
                        />
                        <p className="text">SHADE</p>
                    </div>
                    <img
                        className="drone img left"
                        height={100}
                        width={100}
                        src={`${IMAGE_URL}/Calque_1.svg`}
                    />
                    <img
                        className="drone img right"
                        width={100}
                        src={`${IMAGE_URL}/Calque_1.svg`}
                    />
                    <img
                        className="construction img"
                        width={250}
                        src={`${IMAGE_URL}/construction_2.svg`}
                    />
                    <h1 className="title">{name}</h1>
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
