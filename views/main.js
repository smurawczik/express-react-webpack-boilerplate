const utilities = require('./common/');

module.exports = ({container, title, bundle, styles, scripts, data}) => {
  return (`
    <!DOCTYPE html>
      <html>
      <head>
        ${utilities.metaTags()}
        <title>${title || 'Default title'}</title>
        ${utilities.linkTags(bundle)}
        ${utilities.linkTags(styles)}
        ${utilities.initialData(data)}
      </head>
      <body>
        <div id="root">${container}</div>
        ${utilities.scriptTags(bundle)}
        ${utilities.scriptTags(scripts)}
        </body>
    </html>
  `)
}
