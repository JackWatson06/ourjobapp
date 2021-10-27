
import './App.css';
import TextInput from '../components/atoms/textInput';
import Radio from './radios_btn/radio';

import SelectInput from './select_input/select_input';
import ToggleInput from './toggle_input/toggle_input';
import { useFormik } from "formik";
import * as yup from "yup";
function App() {


  const schema = yup.object({
    email: yup.string().required("required").matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "invalid email format"),
  });

  const formikProps = useFormik({
    initialValues: {
      email: "",
      options: ["hello", "apple", "mango", "mountain", "holywood", "laptop", "iphone", "sky", "iron", "energy"],
      selectedOptions: [],
      selectInputValue: "",
      multiSelectInputValue: "",
      selectedRadioValue: "",
      toggleLeftLabel: "left label",
      toggleRightLabel: "right label",
      isLeftToggle: true,
      isRightToggle: false

    },
    handleSubmit: (actions, values) => {
      console.log("values====", values)
    },

    validationSchema: schema

  });

  const handleSelection = async (val, multi_select) => {
    if (multi_select === false) {
      formikProps.setFieldValue("selectInputValue", val)


    }
    else if (multi_select === true) {
      await formikProps.setFieldValue("selectedOptions", [...formikProps.values.selectedOptions, val]);
    }
  }
  const deleteSelection = async (val, multi_select) => {
    if (multi_select === true) {
      let arr = await formikProps.values.selectedOptions.filter(el => {
        return el != val
      });

      formikProps.setFieldValue("selectedOptions", arr);
    }
  }


  const handleToggle = () => {
    if (formikProps.values.isLeftToggle === true) {
      formikProps.setFieldValue("isLeftToggle", false);
      formikProps.setFieldValue("isRightToggle", true);
    }
    if (formikProps.values.isRightToggle === true) {
      formikProps.setFieldValue("isLeftToggle", true);
      formikProps.setFieldValue("isRightToggle", false);
    }
  }


  return (
    <div className="App">
      <form>
        <div style={{ margin: "2rem" }}>
          <TextInput
            handleChange={formikProps.handleChange("email")}
            value={formikProps.values.email}
            isTouched={formikProps.touched.email}
            label={"email"}
            error={formikProps.errors.email}
          />
        </div>
        <div style={{ margin: "2rem" }}>
          <SelectInput multi_select={false} options={formikProps.values.options} selectedOptions={formikProps.values.selectedOptions} value={formikProps.values.selectInputValue} handleChange={formikProps.handleChange("selectInputValue")}
            label={"input label:"}
            handleSelection={handleSelection}
          />
        </div>
        <div style={{ margin: "2rem" }}>
          <SelectInput multi_select={true} options={formikProps.values.options} selectedOptions={formikProps.values.selectedOptions} value={formikProps.values.multiSelectInputValue} handleChange={formikProps.handleChange("multiSelectInputValue")}
            label={"input label:"}
            handleSelection={handleSelection}
            deleteSelection={deleteSelection}
          />
        </div>
        <div style={{ margin: "2rem", width: "18rem", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <div style={{ margin: "0.5rem" }}>
            <Radio value={formikProps.values.selectedRadioValue}
              setValue={(val) => { formikProps.setFieldValue("selectedRadioValue", val); }} label={"option A"} />
          </div>
          <div style={{ margin: "0.5rem" }}>
            <Radio value={formikProps.values.selectedRadioValue}
              setValue={(val) => { formikProps.setFieldValue("selectedRadioValue", val); }} label={"option B"} />
          </div>
          <div style={{ margin: "0.5rem" }}>
            <Radio value={formikProps.values.selectedRadioValue}
              setValue={(val) => { formikProps.setFieldValue("selectedRadioValue", val); }} label={"option C"} />
          </div>
        </div>

        <div style={{ margin: "2rem" }}>
          <ToggleInput
            leftLabel={formikProps.values.toggleLeftLabel}
            rightLabel={formikProps.values.toggleRightLabel}
            isLeft={formikProps.values.isLeftToggle}
            isRight={formikProps.values.isRightToggle}
            handleToggle={handleToggle}
          />
        </div>
        <button onClick={(e) => { e.preventDefault(); formikProps.handleSubmit() }}>submit</button>
      </form>


    </div>
  );
}

export default App;
