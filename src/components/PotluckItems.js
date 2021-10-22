import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { Link } from "react-router-dom";

// Styling
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

import bin from "../assets/Images/bin.png";

const initialFormFields = {
  food_name: "",
  food_description: "",
};

export default function PotluckItems() {
  const [itemFields, setItemFields] = useState(initialFormFields);
  const [foodItems, setFoodItems] = useState([]);

  const [itemExists, setItemsExists] = useState(false);

  const handleChange = (e) => {
    setItemsExists(false);

    setItemFields({
      ...itemFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/foods`, itemFields)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setItemsExists(true))
      .finally(() => setItemFields(initialFormFields));
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/foods`)
      .then((res) => {
        setFoodItems(res.data);
      });
  },[]);

  const deleteFood = (id) => {
    setFoodItems(foodItems.filter((item) => item.food_id !== +id));
  };

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/foods/${id}`)
      .then((res) => {
        deleteFood(id);
      })
      .catch((err) => console.log({ err }));
  };

  
  return (
    <>
      <h2>Add an Item</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="food_name">Item</Label>
          <Input
            id="food_name"
            name="food_name"
            value={itemFields.food_name}
            onChange={(e) => handleChange(e)}
          />
          <FormFeedback>You must provide an item</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="food_description">Description</Label>
          <Input
            id="food_description"
            name="food_description"
            value={itemFields.food_description}
            onChange={(e) => handleChange(e)}
          />
          <FormFeedback>You must provide a description</FormFeedback>
        </FormGroup>

        <p>{itemExists ? "Item already exists" : ""} </p>

        <Button>Add items</Button>
      </Form>
      <h4>Food Items:</h4>
      <div className="foodsContainer">
        {foodItems.map((food, ind) => {
          return (
            <div className="foodItem" key={ind}>
              <p>
                {food.food_name}: {food.food_description}
              </p>

              <div
                className="delete-item-container"
                onClick={() => {
                  handleDelete(food.food_id);
                }}
              >
                <img src={bin} alt="delete item" />
              </div>
            </div>
          );
        })}

        <Link to="/upcomingevents">
          <Button color="success">Confirm Items</Button>
        </Link>
      </div>
    </>
  );
}
