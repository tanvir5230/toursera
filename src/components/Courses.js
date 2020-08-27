import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
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
            <Card className="">
              <CardHeader>
                <h1>{course.name}</h1>
              </CardHeader>
              <CardBody>
                <p>{course.price}$</p>
              </CardBody>
              <CardFooter>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    props.addCourseToCart(course.name, course.price)
                  }
                >
                  enroll now
                </button>
              </CardFooter>
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
