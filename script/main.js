const xhr = new XMLHttpRequest();

function req(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        const data = JSON.parse(this.response);

        last_updated(data)

        if (document.getElementById(`projectsGithub0`) != null) {
            proj(data)
        }
        
    }
    xhr.send();
}

function proj(data) {
    for (i = 0; i < data.length; i++) {
        document.getElementById(`projectsGithub${i}`).innerHTML = `<a href='${data[i].html_url}' target='_blank' style='color:grey; text-decoration:none;'>${data[i].name}</a>`;
    }
}

function last_updated(data) {
    for (i = 0; i < data.length; i++) {
        if (data[i].name == "ShotgunApe.github.io") {
            document.getElementById("lastModified").innerText = "Last modified: " + data[i].updated_at.slice(0, 10) + " at " + data[i].updated_at.slice(11, 19) + " utc";
        }
    }
}