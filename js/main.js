document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        // ვკრძალავთ გვერდის სქროლს გახსნილი მენიუს დროს
        document.body.classList.toggle('no-scroll');
    });

    // ვხურავთ მენიუს ნებისმიერ ბმულზე დაწკაპებისას
    const navLinks = document.querySelectorAll('.navigation__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("promo-video");
    const playBtn = document.getElementById("video-control-btn");
    const mediaContainer = document.querySelector(".video-section__media");

    const iconPlay = playBtn.querySelector(".icon-play");
    const iconPause = playBtn.querySelector(".icon-pause");
    const iconReplay = playBtn.querySelector(".icon-replay");

    // Функция переключения состояния Play / Pause / Replay
    function togglePlay() {
        // Если видео закончилось — запускаем сначала
        if (video.ended) {
            video.currentTime = 0;
            video.play();
            showPauseIcon();
        }
        // Если видео стоит на паузе — запускаем
        else if (video.paused) {
            video.play();
            showPauseIcon();
        }
        // Если видео играет — ставим на паузу
        else {
            video.pause();
            showPlayIcon();
        }
    }

    function showPauseIcon() {
        mediaContainer.classList.add("is-playing");
        iconPlay.style.display = "none";
        iconReplay.style.display = "none";
        iconPause.style.display = "block";
    }

    function showPlayIcon() {
        mediaContainer.classList.remove("is-playing");
        iconPause.style.display = "none";
        iconReplay.style.display = "none";
        iconPlay.style.display = "block";
    }

    function showReplayIcon() {
        mediaContainer.classList.remove("is-playing"); // Кнопка должна всегда гореть в центре
        iconPlay.style.display = "none";
        iconPause.style.display = "none";
        iconReplay.style.display = "block";
    }

    // Слушатель окончания видео
    video.addEventListener("ended", () => {
        showReplayIcon();
    });

    // Клики на кнопку и само видео
    playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        togglePlay();
    });

    video.addEventListener("click", togglePlay);
});