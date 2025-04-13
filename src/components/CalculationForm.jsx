import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { evaluate } from 'mathjs';
import { Button } from 'react-bootstrap';
import { InputField } from "./InputField";
import { Section } from "./Section";
import { useNavigate } from 'react-router-dom';

// Схема валидации
const validationSchema = Yup.object({
  g1: Yup.number().required("Обязательное поле").min(1000, "Минимум 1000 м³/ч"),
  t1: Yup.number().max(100, "Слишком высокая температура"),
  t2: Yup.number().max(100, "Слишком высокая температура"),
});

export const CalculationForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      g1: 7500,
      t1: 46,
      t2: 35,
    },
    validationSchema,
    onSubmit: (values) => {
      const results = calculateResults(values);
      navigate('/results-table', { state: { results } });
    },
  });

  // Расчёт всех результатов
  const calculateResults = (values) => {
    const { g1, t1, t2 } = values;
    return {
      "Производительность градирни (G₁)": `${g1} м³/ч`,
      "Температура входящей воды (t₁)": `${t1} °C`,
      "Температура охлаждённой воды (t₂)": `${t2} °C`,
      "Плотность орошения (gₓ)": `${evaluate(`${g1} / 144`).toFixed(2)} м³/м²·ч`,
      "Мощность теплосъема (Q)": `${evaluate(`${g1} * (${t1} - ${t2}) * 4.186 / 3600`).toFixed(2)} МВт`,
    };
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="mb-2 text-light text-center">Теплотехнический расчёт градирни</h2>
        </div>
        <div className="col"></div>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col">
            <Section title="Исходные данные для расчёта">
              <InputField
                label="Производительность градирни (G₁)"
                name="g1"
                formik={formik}
                unit="м³/ч"
              />
              <InputField
                label="Температура входящей воды (t₁)"
                name="t1"
                formik={formik}
                unit="°C"
              />
              <InputField
                label="Температура охлаждённой воды (t₂)"
                name="t2"
                formik={formik}
                unit="°C"
              />
            </Section>
          </div>
          <div className="col"></div>
        </div>

        <Button type="submit" variant="primary" className="mt-3">
          Рассчитать
        </Button>
      </form>
    </div>
  );
};