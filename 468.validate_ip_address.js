Description: 

Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.
Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. 
For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

1 <= xi.length <= 4
xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
Leading zeros are allowed in xi.
For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, 
while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.


Example 1:
Input: "172.16.254.1"
Output: "IPv4"

Example 2:
Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"

Example 3:
Input: "256.256.256.256"
Output: "Neither"

/**
 * @param {string} queryIP
 * @return {string}
 */

Data structures: 
- dotFound boolean 
- colonFound boolean 
- currentChunk String 
- ip4 chunk regex 
- ip6 chunk regex 
- chunkCounter int 

Algorithm: 
- iterate through string 
  - if end of string 
        - pass chunk to ip4 regex if dotfound, else to ip6 regex  
        - return neither if it doesn't pass
    - if a dot or colon is encountered => pass current chunk to ip4 or ip6 regex 
        - set dotfound to true if dot
        - set colonfound to true if colon 
      - return neither if it doesn't pass
      - else increment chunk counter and reset current chunk 
  - if char 
    - add char to current chunk
- after iteration 
  - if dotFound 
    - inspect if chunk counter is 4 => return ip4 if true or else neither 
  - if colonFound
    - inspect if chunk counter is 8 => return ip6 if true or else neither 
  else return Neither 

====== SOLUTION ======

const isIP4 = (chunk) => /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(chunk)
const isIP6 = (chunk) => /^[A-F0-9]{1,4}$/i.test(chunk)

var validIPAddress = function(queryIP) {
    let dotFound = false;
    let colonFound = false; 
    let chunkCounter = 0;
    let currentChunk = '';

    for (let i = 0; i < queryIP.length; i += 1) {
        const char = queryIP[i];
        if (i === queryIP.length - 1) { // end of string 
            currentChunk += char;
            if (dotFound && !isIP4(currentChunk)) return 'Neither';
            if (colonFound && !isIP6(currentChunk)) return 'Neither';
            chunkCounter += 1
        } else if (char ==='.') {
            if (!isIP4(currentChunk)) return 'Neither';
            dotFound = true; 
            currentChunk = '';
            chunkCounter += 1
        } else if (char === ':') {
            if (!isIP6(currentChunk)) return 'Neither';
            colonFound = true; 
            currentChunk = '';
            chunkCounter += 1;
        } else {
            currentChunk += char;
        }
    }

    if (dotFound) {
        return chunkCounter === 4 ? 'IPv4' : 'Neither';
    } else if (colonFound) {
        return chunkCounter === 8 ? 'IPv6' : 'Neither';
    } else {
        return 'Neither'
    }
};
