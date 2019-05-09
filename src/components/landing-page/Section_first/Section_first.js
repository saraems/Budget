import React, {Component } from 'react';
import './Section_first.scss'
import Slider from "../slider/slider";

class SectionFirst extends Component {

  render() {
    return (
        <section className='app_desc'>
            <div className='page_container'>
                <div className="app_desc_wrapper">
                    <div className="app_desc__left">
                        <h3>
                            Uporządkuj finanse i przejmij kontrolę nad swoim budżetem używając tylko jednej aplikacji
                        </h3><br/>
                        <p>
                            Niezależność fianansowa dla wielu nie kojarzy się z niczym konkretnym, albo wydaje się być niemożliwa do osiągnięcia bez ponadprzeciętnego talentu do zarządznia pieniędzmi. Każda nadwyżka w budżecie domowym często rozchodzi się tak szybko jak szybko się pojawia. Nowy sprzęt elektorniczny, prezenty, sprzęt domowy, ubrania, coraz lepsze jedznie, smaochód, wakacje, drugi samochów, kredyt hipoteczny, trzeci samochów, wakacje… Staropolskie porzekadło „postaw się, a zastwa się” wydaje się dotyczyć ponad połowy Polaków, chyba po prostu z natury lubimy wydawać pieniądze.
                            <br/>
                            <h4>Zacznij sledzic i planowac swoj budzet z aplikacja <e>Twoje Finanse</e>.</h4>
                        </p><br/>
                        <button className='square'> Wypróbuj aplikację przed rejestracja</button>
                    </div>
                    <div className="app_desc__right">
                        {/*<ul>*/}
                        {/*    <li><p>Planuj i kontroluj wydatki</p></li>*/}
                        {/*    <li className='hidden'></li>*/}
                        {/*    <li className='hidden'></li>*/}
                        {/*    <li className='hidden'></li>*/}
                        {/*</ul>*/}
                        {/*/!*<span className='left_arrow'> &lt; </span>*!/*/}
                        {/*/!*<span className='right_arrow'> ➤ </span>*!/*/}
                        <Slider/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default SectionFirst;
