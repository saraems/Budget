import React, { Component, Fragment } from 'react';
import './UserPanel.scss';


class UserPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filePath: '',
        }
    }


    readFile = (e) => {

        const files = e.target.files;

        this.setState({
           filePath: files[0].name
        });

        let reader = new FileReader();

        reader.readAsDataURL(files[0]);
        reader.onload=(e)=> {

            // console.warn("loaded", e.target.result)
            // url, fetch to the backend - end the file, POST
            // .then => {}
        }
    };

    render() {
    return (
        <Fragment>
            <header className='user_panel__header'>
                <div className="page_container user_panel__header_container">
                    <div className='user_panel_nav__logo'> Twoje Finanse </div>
                    <ul className="user_panel__nav">
                        <li>Podsumowania</li>
                        <li>Wydatki</li>
                        <li>Porownaj</li>
                        <li>Oszczednosci</li>
                    </ul>
                </div>
            </header>

            <main>
                <div className="user_panel___main_panel page_container">
                    <div className="row">

                        <section className="col-12-12 user_panel__add_document">

                            <div className='user_panel__add_document__header'>
                                Dodaj podsumowanie
                            </div>
                            <div className='user_panel__add_document__header_subheader'>
                                Wybierz plik <span className='highlighted'>.csv</span> lub <span className='highlighted'>.xml</span>.
                            </div>
                            <div className='user_panel__add_document__tip'>
                                Nie wiesz gdzie je znalezc? Pobierz je ze swojego konta bankowego on-line.
                            </div>

                            <label className="uploader__btn action__btn">

                                <input id="bank_file" type="file" onChange={ (e) => this.readFile(e) }/>

                                Wybierz dokument

                            </label>

                            <div className='file_name'> { this.state !== '' ? this.state.filePath : 'no file uploaded' } </div>


                            <p className='user_panel__add_document__form'>
                                Jesli nie masz konta w banku, lub nie mozesz uzyskac podsumowania miesiaca w podamym formacie. <br/>Dodaj swoje wydatki za pomoca formularza:
                            </p>
                            <div className="add_form_btn action__btn">
                                Wypelnij formularz
                            </div>

                        </section>

                    </div>
                </div>
            </main>
        </Fragment>
    );
  }
}

export default UserPanel;

