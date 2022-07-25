import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const timeToUpdate = function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds)
};


player.on('timeupdate', throttle(timeToUpdate, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
