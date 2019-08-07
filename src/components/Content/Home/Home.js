import React from 'react';
import '../../../assets/css/Home.css';
import me from '../../../assets/images/me.png';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstText: 'Привет,',
            secondText: 'Будем знакомы:',
            btn1: 'РЕЗЮМЕ',
            btn2: 'ПРОЕКТЫ',
            btn3: 'НАВЫКИ',
            thirdText: 'Всем привет. Давайте знакомится. Я Саша, мне 22 года, я web дизайнер - ученик. Вы хотите заказать сайт в Киеве? Легко! Звоните или пишите мне.',
            fourthText: 'Мои услуги - услуги веб дизайнера: разработка сайтов, веб дизайн, графический дизайн, оптимизация сайтов и сопровождение сайтов, компьютерная помощь',
            fifthText: 'Если Вы хотите заказать сайт визитку или сайт компании, предлагаю Вам ознакомится с моими навыками web дизайна.'
        };
    }

    render() {
        return (
            <div class="content">
    			<img class="myphoto" src={me} alt={"me"}/>
    			<div class="content1">
    				<p class="cp1">{this.state.firstText}</p>
    				<p class="cp2">{this.state.secondText}</p>
    				<div class="btnGroup">
    					<button class="button button1">{this.state.btn1}</button>
    					<button class="button button2">{this.state.btn2}</button>
    					<button class="button button3">{this.state.btn3}</button>
    				</div>
    					<p class="cp3">{this.state.thirdText}</p>
    					<p>{this.state.fourthText}</p>
    					<p>{this.state.fifthText}</p>
    			</div>
            </div>
        );
    };
};