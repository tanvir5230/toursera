import React from "react";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { courses } from "../courseData";

function Cart({ totalCourse, totalPrice, emptyCart }) {
  return (
    <div className="d-none d-md-block cart">
      <p className="font-weight-bold">total course: {totalCourse}</p>
      <p className="font-weight-bold">total price: $ {totalPrice}</p>
      <button className="btn btn-danger" onClick={emptyCart}>
        reset
      </button>
    </div>
  );
}
const RenderCourses = (props) => {
  return courses.map((course) => {
    return (
      <div key={course.id} className="col-12 col-md-4 p-4">
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

const Courses = (props) => {
  return (
    <div className="container">
      <h1>COURSES</h1>
      <div className="row">
        <RenderCourses addCourseToCart={props.addCourseToCart} />
        <Cart
          totalCourse={props.totalCourse}
          totalPrice={props.totalPrice}
          emptyCart={props.emptyCart}
          courseName={props.courseName}
        />
      </div>
    </div>
  );
};

export default Courses;
