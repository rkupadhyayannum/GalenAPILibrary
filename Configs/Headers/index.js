export default function getHeader(withToken=false) {
    var myHeaders = new Headers();
    myHeaders.append("X-APP-TYPE", "DEVICE");
    myHeaders.append("X-TENANT-DOMAIN", "ats-dev2.galencloud.com");
    myHeaders.append("X-API-VERSION", "3");  
    if (withToken) {
        myHeaders.append("Bearer token")
    }
}