import React from "react";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { courses } from "../courseData";

function Cart({
  totalCourse,
  totalPrice,
  emptyCart,
  coursesInCart,
  deleteCourse,
}) {
  const displayCourseInCart = () => {
    return coursesInCart.map((course) => {
      return (
        <li key={course.id} className="border-bottom">
          <span>{course.name}: </span>
          <span>${course.price}</span>
          <span
            className="ml-1 text-danger btn font-weight-bolder"
            onClick={() => deleteCourse(course.id)}
          >
            &times;
          </span>
        </li>
      );
    });
  };
  return (
    <div className="d-none d-md-block cart">
      <ul className="list-unstyled">{displayCourseInCart()}</ul>
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
        <Card className="text-left shadow">
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
            onClick={() =>
              props.addCourseToCart(course.name, course.price, course.id)
            }
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
          coursesInCart={props.coursesInCart}
          deleteCourse={props.deleteCourse}
        />
      </div>
    </div>
  );
};

export default Courses;
