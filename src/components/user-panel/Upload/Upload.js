import React, { Component } from 'react';
import './Upload.scss';


class Upload extends Component {


    render() {
    return (
        <div className="row">

            <section className="col-12-12 user_panel__add_document">

                <div className='user_panel__add_document__header'>
                    Dodaj podsumowanie
                </div>
                <div className='user_panel__add_document__header_subheader'>
                    Wybierz plik <span className='highlighted'>.csv</span> lub <span className='highlighted'>.xml</span>.
                </div>
                <div className='user_panel__add_document__tip'>
                    Nie wiesz skad wziasc plik? Pobierz go ze swojego konta bankowego on-line.
                </div>

                <label className="uploader__btn action__btn">

                    <input id="bank_file" type="file" onChange={ (e) => this.readFile(e) }/>

                    Wybierz dokument
                    <i className="fas fa-file"> </i>

                </label>

                <div className='file_name'> { this.props.filePath !== '' ? this.props.filePath : 'no file uploaded' } </div>


                <p className='user_panel__add_document__form'>
                    Jesli nie masz konta w banku, lub nie mozesz uzyskac podsumowania miesiaca w podamym formacie. <br/>Dodaj swoje wydatki za pomoca formularza:
                </p>
                <div className="add_form_btn action__btn">
                    Wypelnij formularz
                </div>

            </section>
        </div>
    );
  }
}

export default Upload;
