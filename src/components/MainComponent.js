import React, { Component } from "react";
import Header from "./Header";
import Category from "./CategoryComponent";
import Courses from "./Courses";
import Footer from "./Footer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCourse: 0,
      totalPrice: 0,
      courseName: "",
    };
    console.log(this.state.totalPrice, this.state.totalCourse);
  }
  addCourseToCart = (name, price) => {
    const courseNumber = this.state.totalCourse;
    this.setState({
      totalCourse: courseNumber + 1,
      totalPrice: this.state.totalPrice + price,
      courseName: name,
    });
  };
  emptyCart = () => {
    this.setState({
      totalCourse: 0,
      totalPrice: 0,
    });
  };

  render() {
    return (
      <div>
        <Header totalCourse={this.state.totalCourse} />
        <Category />
        <Courses
          totalCourse={this.state.totalCourse}
          totalPrice={this.state.totalPrice}
          addCourseToCart={this.addCourseToCart}
          emptyCart={this.emptyCart}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
