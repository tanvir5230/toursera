import React, { Component } from "react";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { courses } from "../courseData";

function Cart({ totalCourse, totalPrice, emptyCart }) {
  return (
    <div className="cart">
      <p>total course: {totalCourse}</p>
      <p>total price: {totalPrice}</p>
      <button className="btn btn-danger" onClick={emptyCart}>
        reset
      </button>
    </div>
  );
}

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCourse: 0,
      totalPrice: 0,
      courseName: "",
    };
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
    const RenderCourses = (props) => {
      return courses.map((course) => {
        return (
          <div key={course.id} className="col-12 col-md-4 p-3">
            <Card className="text-left">
              <img className="w-100" src={course.image} alt="html" />
              <CardBody>
                <h6 className="">{course.name}</h6>
                <CardSubtitle className="text-black-50">
                  {course.author}
                </CardSubtitle>
                <p className="text-warning font-weight-bolder m-0">
                  ${course.price}
                </p>
                <p className="font-weight-bolder">
                  {course.rating} ({course.enrolled})
                </p>
              </CardBody>
              <button
                className="btn btn-info"
                onClick={() => props.addCourseToCart(course.name, course.price)}
              >
                <span className="font-weight-bold">Enroll now </span>
                <i className="fa fa-cart-plus"></i>
              </button>
            </Card>
          </div>
        );
      });
    };
    return (
      <div className="container">
        <h1>COURSES</h1>
        <div className="row">
          <RenderCourses addCourseToCart={this.addCourseToCart} />
        </div>
        <Cart
          totalCourse={this.state.totalCourse}
          totalPrice={this.state.totalPrice}
          emptyCart={this.emptyCart}
          courseName={this.state.courseName}
        />
      </div>
    );
  }
}

export default Courses;
