let media_container = document.querySelector(".media-container");
let videos = [
    "https://www.instagram.com/p/BxP24haIEBY/embed/captioned",
    "https://www.instagram.com/p/B1qrSxCI-4E/embed/captioned",
    "https://www.youtube.com/embed/tELm5Qa7ZjU",
    "https://www.youtube.com/embed/km2l8Eirpes",
    "https://www.youtube.com/embed/km2l8Eirpes",
    "https://www.instagram.com/p/CFFwb33DTPt/embed/captioned",
];

let width = 640;

for (let i = 0; i < videos.length; i++) {
    let media_video = document.createElement("div");
    media_video.classList.toggle("media-video");

    let iframe = document.createElement("iframe");
    iframe.src = videos[i];
    iframe.width = width;
    iframe.height = 650;

    media_video.appendChild(iframe);
    media_container.appendChild(media_video);
}

/*

<div class="media-video">
                    <iframe
                        src="https://www.instagram.com/p/BxP24haIEBY/embed/captioned"
                        width="640"
                        height="650"
                    ></iframe>
                </div>

                <div class="media-video">
                    <iframe
                        src="https://www.instagram.com/p/B1qrSxCI-4E/embed/captioned"
                        width="640"
                        height="650"
                    ></iframe>
                </div>

                <div class="media-video">
                    <iframe
                        width="640"
                        height="385"
                        src="https://www.youtube.com/embed/tELm5Qa7ZjU"
                        allowfullscreen
                        class="video"
                    >
                    </iframe>
                </div>

                <div class="media-video">
                    <iframe
                        width="640"
                        height="385"
                        src="https://www.youtube.com/embed/km2l8Eirpes"
                        allowfullscreen
                        class="video"
                    >
                    </iframe>
                </div>

                <div class="media-video">
                    <iframe
                        src="https://www.instagram.com/p/CFFwb33DTPt/embed/captioned"
                        width="640"
                        height="725"
                    ></iframe>*/