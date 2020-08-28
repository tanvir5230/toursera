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
      coursesInCart: [],
    };
  }
  addCourseToCart = async (name, price, id) => {
    const courseNumber = this.state.totalCourse;
    const courseObj = { id, name, price };
    const newCourseArr = this.state.coursesInCart.concat(courseObj);
    await this.setState({
      totalCourse: courseNumber + 1,
      courseName: name,
      coursesInCart: newCourseArr,
    });
    this.calculateTotalPrice();
  };
  emptyCart = () => {
    this.setState({
      totalCourse: 0,
      totalPrice: 0,
      coursesInCart: [],
    });
  };
  deleteCourse = async (id) => {
    const filteredCourseArr = this.state.coursesInCart.filter((course) => {
      return !(course.id === id);
    });
    await this.setState({
      totalCourse: this.state.totalCourse - 1,
      coursesInCart: filteredCourseArr,
    });
    this.calculateTotalPrice();
  };

  calculateTotalPrice = () => {
    const total = this.state.coursesInCart.reduce((acc, course) => {
      return acc + course.price;
    }, 0);
    console.log(total, "total");
    this.setState({
      totalPrice: total,
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
          coursesInCart={this.state.coursesInCart}
          deleteCourse={this.deleteCourse}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
