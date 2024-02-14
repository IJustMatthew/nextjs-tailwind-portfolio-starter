// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          {/* Your primary color here */}
          <link
            rel='mask-icon'
            href='/favicon/safari-pinned-tab.svg'
            color='#009d4b'
          />
          <meta name='msapplication-TileColor' content='#009d4b' />
          <meta name='theme-color' content='#009d4b' />

          {/* https://fonts.google.com/icons */}
          {/* Light mode - light_mode */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* Dark mode - dark_mode */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* Back icon - arrow_back_ios */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* To top button - vertical_align_top */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* Work - work */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* School - school */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* Arrow down - keyboard_arrow_down */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />

          {/* Clock - timer */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display="optional"'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
