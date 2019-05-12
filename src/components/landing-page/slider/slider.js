import React, { Component, Fragment } from 'react';
import './Slider.scss'


class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesProjectionCounter: 0
        }
    }


    async componentDidMount() {

        const slides = document.querySelectorAll('ul.slider li');

        this.waitOnSlide = async function wait() {
            return new Promise(function(resolve) {
                setInterval(resolve, 4000);
            });
        };

        this.slidesProjection = async function projection() {


            while (this.state.slidesProjectionCounter < slides.length+1) {

                slides[this.state.slidesProjectionCounter].classList.toggle('active');
                slides[this.state.slidesProjectionCounter].classList.toggle('hidden');

                await this.waitOnSlide();

                slides[this.state.slidesProjectionCounter].classList.toggle('active');
                slides[this.state.slidesProjectionCounter].classList.toggle('hidden');

                this.setState({
                    slidesProjectionCounter: this.state.slidesProjectionCounter + 1
                });

                if (this.state.slidesProjectionCounter === slides.length) {
                    this.setState({
                        slidesProjectionCounter: 0
                    })
                }
            }
        };
        this.slidesProjection();
    }



    render() {
        return (
            <Fragment>
                <ul className='slider'>
                    <li className='hidden plan'><h2>Planuj i kontroluj wydatki</h2></li>
                    <li className='hidden save'><h2>Oszczedzaj</h2></li>
                    <li className='hidden multiple'><h2>Szukaj dodatkowych zrodel przychodu <br/>i pomnazaj oszczednosci</h2></li>
                    <li className='hidden spend'><h2>Wydawaj na to czego na prawde chcesz i potrzebujesz</h2></li>
                </ul>
                {/*<span className='left_arrow'> o </span>*/}
                {/*<span className='right_arrow'> o </span>*/}
            </Fragment>
        );
    }
}

export default Slider;