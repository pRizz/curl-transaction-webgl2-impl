const curl = require('curl.lib.js')

const trytesLength = 2673
const nonceLength = 81
const trytesLessNonce = trytesLength - nonceLength

async function pow({ trytes, minWeightMagnitude }) {
    const processedTrytes = await curl.pow({trytes, minWeight: minWeightMagnitude})
    return processedTrytes.substr(0, trytesLessNonce).concat(nonce)
}

let error = null

try {
    curl.init()
} catch(e) {
    error = 'Cannot initialize curl. WebGL2 is probably unavailable.'
}

module.exports = {
    pow,
    error
}