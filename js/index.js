// On importe les fonctions pour les boutons
import Episode2Action from './episode-2.js';
import Episode3Action from './episode-3.js';
import Episode5Action from './episode-5.js';
import Episode6Action from './episode-6.js';
import Episode7Action from './episode-7.js';
import Episode8Action from './episode-8.js';
import Episode9Action from './episode-9.js';
import Episode10Action from './episode-10.js';
import Episode11Action from './episode-11.js';
import Episode13Action from './episode-13.js';
import './episode-1.js';
import './episode-4.js';
import './episode-12.js';

// On stocke ses actions dans un tableau, 
// NB: attention l'ordre est important!!
const tabAction = [
    Episode2Action,
    Episode3Action,
    Episode5Action,
    Episode6Action,
    Episode7Action,
    Episode8Action,
    Episode9Action,
    Episode10Action,
    Episode11Action,
    Episode13Action
]

document.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
        tabAction[index]()
    })
})