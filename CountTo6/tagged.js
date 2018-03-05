console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(arr, username, adjective) {
        let adj = adjective.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        return arr[0] + username + arr[1] + adj + arr[2];
    }