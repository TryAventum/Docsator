function formatCommentHook(comment) {
  let name = comment.tags.find(t => t.tag === 'name').name
  let type = comment.tags.find(t => t.tag === 'type').name

  let params = comment.tags.filter(t => t.tag === 'param')
  let paramsList = params
    .map(p => `- ${p.name}(${p.type}): ${p.description}\n`)
    .join('')

  let changelog = comment.tags
    .filter(t => t.tag === 'since')
    .sort((a, b) => (a.name < b.name ? 1 : -1)) //Make the like 4.0.1, 3.2.0, 1.0.1

  let changelogTableRows = changelog
    .map(p => `${p.name} | ${p.description || 'Introduced.'}\n`)
    .join('')

  let result = `## ${name}(${type})
${comment.description}

### Parameters
${paramsList}
### Source
File: ${comment.file}

### Changelog
Version | Description
------------ | -------------
${changelogTableRows}`

  return result
}

function formater(comment, tag) {
  var result = ``
  switch (tag) {
    default:
    case 'hook':
      result = formatCommentHook(comment)
      break
  }

  return result
}

module.exports = {
  formatCommentHook,
  formater
}
