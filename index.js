const curl = require('curl.lib.js')
curl.init()

const trytesLength = 2673
const nonceLength = 81
const trytesLessNonce = trytesLength - nonceLength

async function pow({ trytes, minWeightMagnitude }) {
    const processedTrytes = await curl.pow({trytes, minWeight: minWeightMagnitude})
    return processedTrytes.substr(0, trytesLessNonce).concat(nonce)
}

module.exports = {
    pow
}