import React, { Component } from "react";
import "./Uploaded.scss";

const user = {
  expenses: {
    categories: [
      "Mieszkanie",
      "Żywność i środki czystości",
      "Internet i telefon",
      "Przejazdy",
      "Edukacja",
      "Podróże",
      "Jedzenie poza domem",
      "Zdrowie i Uroda",
      "Ubrania",
      "Rozrywka",
      "Prezenty",
      "Elektronika",
      "Kary",
      "Inne"
    ]
  }
};

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

class Uploaded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: user.expenses.categories,
      newCategory: "",
      errorMessage: ""
    };
  }

  addNewCategory = () => {
    if (this.state.newCategory) {
      this.setState({
        categories: [...this.state.categories, this.state.newCategory]
      });
    }
    console.log(this.state.newCategory);
  };

  saveCategory = e => {
    console.log(e.target.value);
    this.setState({
      newCategory: e.target.value
    });
  };

  removeCategory = category => {
    this.setState({
      categories: this.state.categories.filter(
        oldCategory => oldCategory !== category
      )
    });
    console.log("removed", category);
  };

  render() {
    return (
      <>
        <div className="row">
          <section className="col-12-12 user_panel__categories_container">
            <p>Twoje kategorie: </p>
            {this.state.categories.map(category => {
              return (
                <button className="action__sharp_btn_color_hover category_btn">
                  {category}
                  <i
                    class="fas fa-times"
                    onClick={category => this.removeCategory(category)}
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
              onChange={e => this.saveCategory(e)}
            />
            <button
              onClick={this.addNewCategory}
              className="action__btn_sharp add_category_btn"
            >
              <i class="fas fa-plus" />
            </button>
            <p>{this.state.errorMessage}</p>
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
              <div className="row">
                <div className="col-1-12"> {expense.date} </div>
                <div className="col-6-12">{expense.description}</div>
                <div className="col-1-12">{expense.costs} PLN</div>
                <div className="col-4-12 uploaded_file__select_category">
                  <select>
                    {this.state.categories.map(category => {
                      return <option> {category} </option>;
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
}

export default Uploaded;
