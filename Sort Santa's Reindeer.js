function sortReindeer(reindeerNames) {
    let re = /([A-Za-z]+)\s([A-Za-z]+)/
    let result = reindeerNames.map(el => el.replace(re, `$2 $1`)).sort().map(el => el.replace(re, `$2 $1`))
    return result
}
