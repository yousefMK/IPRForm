// Modules
import { useState } from "react"

// Components
import IPRTeethForm from "./forms/IPRTeethForm/IPRTeethForm"
import IPRPlanForm from "./forms/IPRPlanForm/IPRPlanForm"

// Styles
import "./App.css"

// Main app
function App() {
  // TODO: Default value to be filled with data received from api.

  // State
  const [groupsArr, setGroupsArr] = useState([])
  const [formData, setFormData] = useState({
    ipr_deadline_aligner_number: [],
    ipr_amount: [],
    ipr_teeth: [],
  })

  // Render
  return (
    <main>
      <IPRTeethForm
        groupsArr={groupsArr}
        setGroupsArr={setGroupsArr}
        setFormData={setFormData}
      />
      {groupsArr.length && (
        <section className="form-container">
          <IPRPlanForm
            groupsArr={groupsArr}
            setFormData={setFormData}
            formData={formData}
          />
            <button
              className="submit-btn"
              onClick={() => console.log(formData)}
              title='Check console please.'
            >
              Submit & Next
            </button>
        </section>
      )}
    </main>
  )
}

// Export
export default App
