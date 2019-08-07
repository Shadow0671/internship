import React from 'react';
import '../../assets/css/Header.css';

const Name = 'Александр Гриб';
const Who = 'Студент / Веб-дизайнер';
const Menu1 = 'ГЛАВНАЯ';
const Menu2 = 'РЕЗЮМЕ';
const Menu3 = 'НАВЫКИ';
const Menu4 = 'КОНТАКТЫ';


function Header() {
    return (
        <header>
            <div class="layer1">
    				<p>{Name}</p>
    				<p class="p2">{Who}</p>
    			</div>
    			<nav class="menu">
                   	<ul>
    					<li><a href="#">{Menu1}</a></li>
    					<li><a href="#">{Menu2}</a></li>  
    					<li><a href="#">{Menu3}</a></li>
   						<li><a href="#">{Menu4}</a></li>
					</ul>
               	</nav>
        </header>
    );
};

export default Header;