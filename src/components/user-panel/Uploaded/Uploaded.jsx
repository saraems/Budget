import React, { useState } from "react";
import "./Uploaded.scss";
import { connect } from "react-redux";
import { addCategory, removeCategory } from "../../../redux/actions/";
import { ADD_CATEGORY, REMOVE_CATEGORY } from '../../../redux/containers/action-types';

const csv = [
  {
    date: "02.02.3242",
    description: "rwerwer ewr ewr ewr wer ewrewr ewrew",
    costs: 9,
    category: "Zakupy"
  },
  {
    date: "02.02.3242",
    description: "we erjkg irjeirtjijgrtijhirtj hijtrh rtijtjr hoitr",
    costs: 9,
    category: "Uroda"
  }
];

const Categories = ({categories, addCategory, removeCategory}) => {

  const [newCategory, setCategory] = useState('');

  const add = (newCategory) => {
    console.log('new >>', newCategory, '>>')
    addCategory(newCategory)
    setCategory('');
  }  
    return (
      <>
        <div className="row">
          <section className="col-12-12 user_panel__categories_container">
            <p>Twoje kategorie: </p>
            {categories.map(category => {
              return (
                <button 
                className="action__sharp_btn_color_hover category_btn" 
                key={category}>
                  {category}
                  <i
                    className="fas fa-times"
                    onClick={ () => removeCategory(category)}
                  />
                </button>
              );
            })}
          </section>
        </div>
        <div className="row uploaded__add_category_container">
          <section className="col-12-12 uploaded__add_category_subcontainer ">
            Dodaj nowa kategorie:
            <input
              className="uploaded__category_input"
              onChange={(e) => setCategory(e.target.value)}
              value={newCategory}
            />
            <button
              onClick={ () => add(newCategory)}
              className="action__btn_sharp add_category_btn"
            >
              <i className="fas fa-plus" />
            </button>
            {/* <p>{'Error Message'}</p> */}
          </section>
        </div>

        <section className="user_panel__uploaded_file">
          <div className="row uploaded_file__header">
            <div className="col-1-12"> Data </div>
            <div className="col-6-12"> Tytul transakcji</div>
            <div className="col-1-12"> Kwota</div>
            <div className="col-4-12"> Dodaj kategorie</div>
          </div>

          {csv.map(expense => {
            return (
              <div className="row" kay={expense.costs}>
                <div className="col-1-12"> {expense.date} </div>
                <div className="col-6-12">{expense.description}</div>
                <div className="col-1-12">{expense.costs} PLN</div>
                <div className="col-4-12 uploaded_file__select_category">
                  <select>
                    {categories.map(category => {
                      return <option key={category}> {category} </option>;
                    })}
                  </select>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
}

const mapStateToProps = state => {
  return { categories: state.categories}
};

function mapDispatchToProps(dispatch) {
  return {
    addCategory: category => dispatch(addCategory({type: ADD_CATEGORY, payload: category})),
    removeCategory: category => dispatch(removeCategory({type: REMOVE_CATEGORY, payload: category}))
  };
}

const Uploaded = connect(mapStateToProps, mapDispatchToProps)(Categories);
export default Uploaded;
