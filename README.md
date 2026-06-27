# aes-128-ccm-cipher

```js
import {toAes128Ccm, deAes128Ccm} from "./aes128ccm.js"

toAes128Ccm("Your context")

/* Example result:

Info: 0e0hZSfVoGlgs2jdx4jIsRVK4XlT987yKn9SGmJYhosaCbbme11c7C/zQUwDHryLHgbo3vi8
Key: +5bE4zccos3UGfkWWZTVhQ==
Iv: AcoviaStudio
AuthTag: kHsoVT0ZLDr82X1ICXip3g==
AuthTagLength: 16
Algorithm: aes-128-ccm

*/

var info = "0e0hZSfVoGlgs2jdx4jIsRVK4XlT987yKn9SGmJYhosaCbbme11c7C/zQUwDHryLHgbo3vi8"
var key = "+5bE4zccos3UGfkWWZTVhQ=="
var iv = "AcoviaStudio"
var authTag = "kHsoVT0ZLDr82X1ICXip3g=="
var length = 16

deAes128Ccm(info, key, iv, authTag, length)

/* result:
 改完这个bug就睡觉...
*/
```