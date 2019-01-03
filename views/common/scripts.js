module.exports = (scripts) => {
  return scripts && scripts.length ? scripts.map(script => {
    return `<script src="${script + '.js'}"></script>`;
  }) : '';
}
