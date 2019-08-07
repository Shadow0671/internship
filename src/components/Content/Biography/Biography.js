import React from 'react';
import '../../../assets/css/Biography.css';
import YearsItems from './yearsItems'
import years from './year'
import FormAdd from "./formAdd";

export default class Biography extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            errorYear: false,
            text: '',
            year: '',
            id: years.length,
            years: years
        };
    }

    // Add new element in array
    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.year.length || !this.state.text.length){
            return;
        }
        if(isNaN(+this.state.year)){
            this.setState({
                errorYear: true
            });
            return;
        }else{
            this.setState({
                errorYear: false
            });
        }
        const newItem = {
            year: +this.state.year,
            info: this.state.text,
            id: this.state.id
        };

        this.setState({
            years: this.state.years.concat(newItem),
            id: this.state.id + 1,
            text: '',
            year: ''
        });
    };

// Change <input/> writes in state
    handleChangeYear = (e) =>{
        e.preventDefault();
        this.setState({
            year: e.target.value
        })
    };

// Change <textarea/> writes in state
    handleChangeInfo = (e) =>{
        e.preventDefault();
        this.setState({
            text: e.target.value
        })
    };

// Sort array
    handleSort = () => {
        this.setState({
            years: this.state.years.sort((a,b) => a.year - b.year)
        })
    };
// Sorting array with bubble sort
    handleSortBubble = () => {

        let n = this.state.years.length;
        const arr = this.state.years;
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (arr[j+1].year < arr[j].year){
                    let t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
                }
            }
        }
        this.setState({
            years: arr
        })
    };

// Reset form
    handelReset = (e) => {
        e.preventDefault();
        this.setState({
            text: '',
            year: ''
        });

    };

// Sort array and delete element
    handleDelete = (id) => {
        for(let i = 0; i < this.state.years.length; i++){
            if(id === this.state.years[i].id){
                this.state.years.splice(i,1);
            }
        }

        this.setState({
            years: this.state.years
        })
    };


    render() {
        return (
            <div class="content">
                <p class="cp4">БИОГРАФИЯ</p>
                <hr/>
    			<p><br/></p>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="myBiography">
                                <tbody>
                                    <tr>
                                        <th>Год</th>
                                        <th colSpan="2">Описание</th>
                                    </tr>

                                     <YearsItems years={this.state.years}
                                                 handleDeleteClick = {this.handleDelete}
                                     />

                                </tbody>
                            </table>
                            <table className="myBiography">
                                <tbody>
                                    <tr>
                                        <th>
                                            <FormAdd handleSubmit = {this.handleSubmit}
                                            handleChangeYear = {this.handleChangeYear}
                                            year = {this.state.year}
                                            errorYear = {this.state.errorYear}
                                            handleChangeInfo = {this.handleChangeInfo}
                                            text = {this.state.text}
                                            handelReset = {this.handelReset}
                            />
                                        </th>
                                        <th className='left' colSpan="2">
                                            <div className="row">
                                                <button className='bth-sort' onClick={this.handleSort}>Сортировать</button>
                                                <button className='bth-sort' onClick={this.handleSortBubble}>Bubble</button>
                                            </div>
                                        </th>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>



                    
                </div>
    		</div>
        );
    };
};