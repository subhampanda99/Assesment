window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const tab = this.document.getElementById("tabs");
            console.log(tabs);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(tab).set(opt).save();
        })
}

