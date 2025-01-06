document.addEventListener("DOMContentLoaded", function () {
    const loadBtn = document.getElementById("loadBtn");
    if (loadBtn) {
        loadBtn.addEventListener("click", function () {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "data.json", true);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    const posts = JSON.parse(xhr.responseText);
                    let output = "";

                    posts.forEach(post => {
                        output += `
                            <div>
                                <h2>${post.title}</h2>
                                <p>${post.content}</p>
                                <small>Author: ${post.author}</small>
                            </div>
                        `;
                    });

                    document.getElementById("content").innerHTML = output;
                } else {
                    console.error("Failed to load content");
                }
            };

            xhr.onerror = function () {
                console.error("An error occurred during the request");
            };

            xhr.send();
        });
    }
});
