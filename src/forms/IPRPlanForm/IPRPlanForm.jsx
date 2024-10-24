// Modules
import React from "react"

// Styles
import "./IPRPlanForm.css"

// Component: IPR Plan Form
function IPRPlanForm({ groupsArr, setFormData, formData,}) {
  // Functions
  const handleChange = (e, teeth) => {
    const index = formData?.ipr_teeth?.indexOf(teeth);
    let newValue = parseFloat(e.target.value);
    if (e.target.id === "amount") {
      if (newValue < 0.1) {
        newValue = 0.1;
      } else if (newValue > 0.9) {
        newValue = 0.9;
      }
    }
    setFormData((prevValue) => {
      return {
        ipr_deadline_aligner_number: prevValue.ipr_deadline_aligner_number.map(
          (item, mapIndex) => {
            return mapIndex === index && e.target.id === "deadline"
              ? parseInt(e.target.value)
              : item
          }
        ),
        ipr_amount: prevValue.ipr_amount.map((item, mapIndex) => {
          return mapIndex === index && e.target.id === "amount"
            ? newValue
            : item
        }),
        ipr_teeth: groupsArr,
      }
    })
  }

  // Render
  return (
    <section>
      <h5 className="form-header">IPR Plan</h5>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>IPR GROUP</th>
              <th>IPR AMOUNT</th>
              <th>IPR DEADLINE</th>
            </tr>
          </thead>
          <tbody>
            {groupsArr.map((teeth) => (
              <tr key={teeth}>
                <td>{teeth}</td>
                <td>
                  <input
                    className="amount-input"
                    type="number"
                    id="amount"
                    min={0.1}
                    max={0.9}
                    step={0.1}
                    defaultValue={0.5}
                    onChange={(e) => handleChange(e, teeth)}
                  />
                </td>
                <td>
                  <select
                    id="deadline"
                    className="deadline-dropdown"
                    onChange={(e) => handleChange(e, teeth)}
                    defaultValue={1}
                  >
                    {Array.from({ length: 18 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

// Export
export default IPRPlanForm
