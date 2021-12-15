const xhr = new XMLHttpRequest();
//I hate semicolons

function req(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        const data = JSON.parse(this.response);
        //For debug:
        console.log(data);

        for (i = 0; i < data.length; i++) {
            if (data[i].name == "ShotgunApe.github.io") {
                document.getElementById("lastModified").innerText = "Last modified: " + data[i].updated_at.slice(0, 10) + " at " + data[i].updated_at.slice(11, 19) + " utc";
            }
        }
    }
    xhr.send();
}

function proj(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        const data = JSON.parse(this.response);
        
        for (i = 0; i < data.length; i++) {
            document.getElementById(`projectsGithub${i}`).innerText = data[i].name;
        }
    }
    xhr.send();
}