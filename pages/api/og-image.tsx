import { withOGImage } from 'next-api-og-image';

interface QueryParams {
    name: string;
}

const style = `
  @font-face {
    font-family: 'IBM Plex Sans', system-ui;
    font-style:  normal;
    font-weight: normal;
  }
  body {
    font-family: 'Inter', sans-serif;
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default withOGImage<'query', QueryParams>({
    template: {
        react: async ({ testQueryParam }) => {
            const value = await someLongRunningValueGetter()
            return (
                <html>
                    <head>
                        <style dangerouslySetInnerHTML={{ __html: style }} />
            </head>
            <body>
            <div className="container">
                <h1>{testQueryParam}</h1>
                <h2>{value}</h2>
                </div>
                </body>
                </html>
        )
        },
    },
    dev: {
        inspectHtml: false,
    },
})

function someLongRunningValueGetter() {
    return new Promise((resolve: (value: string) => void) => {
        setTimeout(() => {
            resolve("Value in setTimeout's (500ms) callback")
        }, 500)
    })
}
