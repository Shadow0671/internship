import React from 'react';
<<<<<<< HEAD
import './style.css';
import git from './Images/git.svg';
import telegram from './Images/telegram.png';
import instagram from './Images/instagram.png';
import cop from './Images/cop.png';
=======
import '../../assets/css/Footer.css'
import git from '../../assets/images/git.svg';
import telegram from '../../assets/images/telegram.png';
import instagram from '../../assets/images/instagram.png';
import cop from '../../assets/images/cop.png';
>>>>>>> 5th task

const TelegramName = '@shadow_alexx';
const InstagramName = '@shadow_alexx';
const GitHubLink = 'https://github.com/Shadow0671/internship';
const Author = 'Автор: Александр Гриб';
const OriginalLink = 'https://www.wix.com/website-template/view/html/1676';

function Footer() {
    return (
        <footer>
    		<div class="info">
    			<img class="infLayer1" src={telegram} alt={"telegram"}/>
    			<p class="infLayer2">Telegram:<br/>{TelegramName}</p>
    		</div>
    		<div class="info">
    			<img class="infLayer1" src={instagram} alt={"instagram"}/>
    			<p class="infLayer2">Instagram:<br/>{InstagramName}</p>
    		</div>
    		<div class="info">
    			<img class="infLayer1" src={git} alt={"git"}/>
    			<p class="infLayer2">GitHub:<br/>
    			<a class="gitlink" href="https://github.com/Shadow0671/internship">{GitHubLink}</a></p>
    		</div>
    		<div class="info">
    			<img class="infLayer1" src={cop} alt={"cop"}/>
    			<p class="infLayer2">{Author}<br/>Оригинал: 
    			<a class="original" href="https://www.wix.com/website-template/view/html/1676">{OriginalLink}</a></p>
    		</div>
    	</footer>
    );
};

export default Footer;