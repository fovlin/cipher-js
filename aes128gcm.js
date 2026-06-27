import crypto from "node:crypto"

export function toAes128Gcm(string) {
    const iv = "acovia"
    const algorithm = "aes-128-gcm"
    crypto.generateKey("aes", {length:128}, (err,key) => {
        if (err) throw err;
        var result = crypto.createCipheriv(algorithm,key,iv)
        console.log("Code: base64")
        console.log("Key: " + key.export().toString("base64"))
        console.log("Iv: " + iv)
        console.log("Algorithm: " + algorithm)
        console.log("Info: " + result.update(string,"utf-8","base64").toString())
    })
}

export function deAes128Gcm(info, key, iv) {
    const algorithm = "aes-128-gcm"
    const deKey = Buffer.from(key,"base64")
    const deInfo = Buffer.from(info,"base64").toString("base64")
    var result = crypto.createDecipheriv(algorithm, deKey, iv)
    console.log(result.update(deInfo,"base64","utf-8"))
}