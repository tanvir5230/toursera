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
  addCourseToCart = (name, price, id) => {
    const courseNumber = this.state.totalCourse;
    const courseObj = { id, name, price };
    const newCourseArr = this.state.coursesInCart.concat(courseObj);
    this.setState({
      totalCourse: courseNumber + 1,
      totalPrice: this.state.totalPrice + price,
      courseName: name,
      coursesInCart: newCourseArr,
    });
  };
  emptyCart = () => {
    this.setState({
      totalCourse: 0,
      totalPrice: 0,
      coursesInCart: [],
    });
  };
  deleteCourse = (id) => {
    const filteredCourseArr = this.state.coursesInCart.filter((course) => {
      return !(course.id === id);
    });
    console.log(filteredCourseArr);
    this.setState({
      coursesInCart: filteredCourseArr,
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
