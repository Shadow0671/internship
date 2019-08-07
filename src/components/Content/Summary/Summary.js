import React from 'react';
import '../../../assets/css/Summary.css'
import znakfirst from '../../../assets/images/znakfirst.png';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstText: 'РЕЗЮМЕ',
			ringText1: 'Обо мне',
			secondcontent: 'Открыл в себе усидчивость, граничащую со способностью прирасти рабочему месту, пока задача не выполнена (Как-то раз я просидел 8 часов вообще не отлипая от монитора, без еды и воды)',
			arr1: 'Мои хобби:',
			arr1Text1: 'Музыка',
            arr1Text2: 'Программирование',
			arr1Text3: 'Игры',
			arr2: 'Личные качества и черты характера:',
			arr2Text1: 'Усидчивость',
			arr2Text2: 'Исполнительность',
			arr2Text3: 'Ответственность',
			arr2Text4: 'Коммуникабельность',
			arr2Text4: 'Обучаемость',
			ringText2: 'Образование',
            thirdText: 'Центральноукраинский национальный технический университет',
			fourthText1: 'Высшее техническое, 2015-2019',
			fourthText2: 'Cпециальность: компьютерная инженерия',
            arr4: 'Навыки',
			arr4Text1: 'Adobe Photoshop',
            arr4Text2: 'Adobe Illustrator',
			arr4Text3: 'Adobe XD',
			arr4Text4: 'Adobe Lightroom',
			arr4Text5: 'WordPress',
			arr5: 'Языки',
			arr5Text1: 'C/C++',
            arr5Text2: 'Java',
			arr5Text3: 'JavaScript',
			arr5Text4: 'HTML/CSS',
        };
    }

    render() {
        return (
            <div class="secondcontent">
    			<div class="content2">
    				<p class="cp4">{this.state.firstText}</p>
    				<hr/>
    				<p><br/></p>
    				<div class="ring"><p class="ringtext">{this.state.ringText1}</p></div>
    				<div class="contenttext">
    					<p>{this.state.secondcontent}</p>
    					<p>{this.state.arr1}</p>
    					<ul class="about">
    						<li>{this.state.arr1Text1}</li>
    						<li>{this.state.arr1Text2}</li>
    						<li>{this.state.arr1Text3}</li>
    					</ul>
    					<p>{this.state.arr2}</p>
    					<ul class="about">
    						<li>{this.state.arr2Text1}</li>
    						<li>{this.state.arr2Text2}</li>
    						<li>{this.state.arr2Text3}</li>
    						<li>{this.state.arr2Text4}</li>
    					</ul>

    				</div>
    				<p><br/></p>
    				
    				<hr/>

    				<p><br/></p>
    				<div class="ring"><p class="ringtext">{this.state.ringText2}</p></div>
    				<div class="contenttext">
    					<h4>{this.state.thirdText}</h4>
    					<p>{this.state.fourthText1}<br/>{this.state.fourthText2}</p>
    				</div>
    				<p><br/></p>

    			</div>
    			<div class="content3">
    				<img class="znakfirst" src={znakfirst} alt={"znakfirst"}/>
    				<p class="cp5">{this.state.arr4}</p>
    				<hr/>
    				<p>
    					{this.state.arr4Text1}<br/>
    					{this.state.arr4Text2}<br/>
    					{this.state.arr4Text3}<br/>
    					{this.state.arr4Text4}<br/>
    					{this.state.arr4Text5}
    				</p>
    				<p><br/></p>
    				<img class="znakfirst" src={znakfirst} alt={"znakfirst"}/>
    				<p class="cp5">{this.state.arr5}</p>
    				<hr/>
    				<p>
						{this.state.arr5Text1}<br/>
    					{this.state.arr5Text2}<br/>
    					{this.state.arr5Text3}<br/>
    					{this.state.arr5Text4}
    				</p>
    			</div>
    		</div>
        );
    };
};