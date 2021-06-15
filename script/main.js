function req(username) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open('GET', url, true);

    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);

        document.getElementById("lastModified").innerHTML = "last modified: " + data[1].updated_at.slice(0, 10) + " at " + data[1].updated_at.slice(11, 19) + " utc";
    }
    xhr.send();
}