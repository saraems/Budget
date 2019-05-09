import React, { Component, Fragment } from 'react';
import './slider.scss'


class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }


    // componentDidMount() {
    //     const slides = document.querySelectorAll('ul.slider li');
    //
    //     slides.forEach(() => setInterval(), )
    //     setInterval(() => console.log('sexy'), 500)
    // }
    //
    // slidePhoto = () => {
    //
    // };

    render() {
        return (
            <Fragment>
                <ul className='slider'>
                    <li className='active plan'><p>Planuj i kontroluj wydatki</p></li>
                    <li className='hidden save'><p>Oszczedzaj</p></li>
                    <li className='hidden multiple'><p>Szukaj dodatkowych zrodel przychodu i pomnazaj oszczednosci</p></li>
                    <li className='hidden spend'><p>Wydawaj na to czego na prawde chcesz i potrzebujesz</p></li>
                </ul>
                {/*<span className='left_arrow'> o </span>*/}
                {/*<span className='right_arrow'> o </span>*/}
            </Fragment>
        );
    }
}

export default Slider;