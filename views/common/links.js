module.exports = (css) => {
  return css && css.length ? css.map(url => {
    return `<link href="${url + '.css'}" rel="stylesheet" type="text/css" />`;
  }) : '';
}
