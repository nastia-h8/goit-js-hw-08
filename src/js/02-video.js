import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

timeToSet()

function timeToUpdate({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

function timeToSet() {
    const currentTime = localStorage.getItem('videoplayer-current-time');

    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
}

player.on('timeupdate', throttle(timeToUpdate, 1000));