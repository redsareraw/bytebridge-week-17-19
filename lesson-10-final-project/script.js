$(document).ready(function() {

    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let gitRepo = JSON.parse(this.responseText);
            $("#repoList").empty();
            if (gitRepo.length > 0) {
                gitRepo.forEach(function(repo) {
                    $("#repoList").append(`<li class="list-group-item">${repo.name}</li>`)
                });
            } else {
                $("#repoList").append(`<li class="list-group-item">No repositories found.</li>`);
            }
        } else {
            $("#repoList").append(`<li class="list-group-item text-danger">Error fetching repositories. Status: ${this.status}</li>`);
        }
    };

    gitHubRequest.open("GET", "https://api.github.com/users/redsareraw/repos", true);
    gitHubRequest.send();

    $(".links img").hover(
        function() {
            $(this).css({
                "width": "35px",
                "height": "35px",
            });
        },
        function() {
            $(this).css({
                "width": "30px",
                "height": "30px"
            });
        }
    );
});