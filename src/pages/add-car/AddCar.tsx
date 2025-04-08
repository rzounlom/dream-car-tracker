import { Button, Col, Form, Row } from "react-bootstrap";
import { FC, useState } from "react";

import { NewCar } from "../../types";
import { addCar } from "../../api";
import { useNavigate } from "react-router-dom";

const AddCar: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<Partial<NewCar>>({
    year: "",
    make: "",
    model: "",
    description: "",
    imageUrl: "",
  });

  const resetFormData = () => {
    setFormData({
      year: "",
      make: "",
      model: "",
      description: "",
      imageUrl: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Destructure name and value from event object
    // Update the formData state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Use name attribute to update the correct field
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Validate the form data here if needed

    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Create a new car object with the form data
    const newCar: NewCar = {
      year: formData.year ?? "",
      make: formData.make ?? "",
      model: formData.model ?? "",
      description: formData.description ?? "",
      imageUrl: formData.imageUrl ?? "",
      favorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await addCar(newCar);

      resetFormData();
      navigate("/cars");
    } catch (error) {
      console.error("Error adding car:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ justifySelf: "center" }}>Add Car</h1>
      <Form
        className="mt-4"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              name="year"
              onChange={handleInputChange}
              required
              type="text"
              placeholder="2025"
              value={formData.year}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide year.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationMake">
            <Form.Label>Make</Form.Label>
            <Form.Control
              name="make"
              onChange={handleInputChange}
              required
              type="text"
              placeholder="BMW"
              value={formData.make}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide make.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationModel">
            <Form.Label>Model</Form.Label>
            <Form.Control
              name="model"
              onChange={handleInputChange}
              required
              type="text"
              placeholder="X6"
              value={formData.model}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide model.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationImageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="imageUrl"
              onChange={handleInputChange}
              required
              type="text"
              placeholder="https://example.com/image.jpg"
              value={formData.imageUrl}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide image url.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationDescription">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              onChange={handleInputChange}
              required
              type="text"
              placeholder="The BMW X6 is a luxury SUV that combines sporty performance with practicality. It features a powerful engine, a comfortable interior, and advanced technology."
              value={formData.description}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide description.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb=3 d-flex justify-content-around">
          <Button
            variant="secondary"
            style={{ width: "48%" }}
            disabled={loading}
          >
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "48%" }}
            disabled={loading}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default AddCar;
