function req(username) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        const data = JSON.parse(this.response);
        console.log(data);

        for (i = 0; i < data.length; i++) {
            if (data[i].name = "osutools") {
                document.getElementById("lastModified").innerHTML = "Last modified: " + data[i].updated_at.slice(0, 10) + " at " + data[i].updated_at.slice(11, 19) + " utc";
            }
        }
    }
    xhr.send();
}