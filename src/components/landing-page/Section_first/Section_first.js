import React, {Component } from 'react';
import './Section_first.scss'
import Slider from "../Slider/Slider";

class SectionFirst extends Component {

  render() {
    return (
        <section className='app_desc'>
            <div className='page_container'>
                <div className="app_desc_wrapper">
                    <div className="app_desc__left">
                        <h3>Jezeli Twoim celem jest osiagniecie finansowej niezaleznosci. Zacznij sledzic i planowac swoj budzet, a zamiast arkusza kalkulacyjnego uzyj naszej aplikacji!</h3>

                        <p>
                            Niezależność fianansowa dla wielu nie kojarzy się z niczym konkretnym, albo wydaje się być niemożliwa do osiągnięcia bez ponadprzeciętnego talentu do zarządznia pieniędzmi. Każda nadwyżka w budżecie domowym często rozchodzi się tak szybko jak szybko się pojawia. Pierwszym krokiem do oszczedzania jest robienie comiesiecznego przegladu wydatkow. Gdy uswiadomisz sobie na co wwydajesz pieniadze latwiej bedzie Ci zarzadzac swoim budzetem.
                        </p>

                        <button className='try_demo_btn'> Wypróbuj aplikację przed rejestracja</button>
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
