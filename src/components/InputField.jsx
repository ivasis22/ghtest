import React from 'react';
import { Form } from 'react-bootstrap';

export const InputField = ({
  label,
  name,
  formik,
  unit,
  type = "number",
  placeholder = "",
}) => (
    <Form.Group as="div" className="mb-2 row g-3 align-items-center">
        <div className="col-6">
            <Form.Label>{label}</Form.Label>
        </div>
        <div className="col-4">
            <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched[name] && !!formik.errors[name]}
                className="form-control-sm"
            />
            <Form.Control.Feedback type="invalid">
                {formik.errors[name]}
            </Form.Control.Feedback>
        </div>
        {unit && (
        <div className="col-2">
            <Form.Text className="text-muted">{unit}</Form.Text>
        </div>
        )}
    </Form.Group>
);