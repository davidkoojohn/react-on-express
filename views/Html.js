var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Content = require('./Html/Content');

class Html extends React.Component {
  render() {
    var data = this.props.data;

    var contentHtml = ReactDOMServer.renderToString(<Content {...data} />);

    var initScript =
      'main(' + JSON.stringify(data).replace(/script/g, 'scr"+"ipt') + ')';

    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
          />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: contentHtml}} />

          <script src="/main.js" />
          <script dangerouslySetInnerHTML={{__html: initScript}} />
        </body>
      </html>
    );
  }
}

module.exports = Html;
