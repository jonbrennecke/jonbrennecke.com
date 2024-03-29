import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Prevents a flash of unstyled content on initial uncached page load
// See:
// - https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
// - https://github.com/vercel/next.js/issues/15642#issuecomment-710747889
class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default CustomDocument;
