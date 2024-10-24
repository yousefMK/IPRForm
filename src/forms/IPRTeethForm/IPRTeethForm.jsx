// Modules
import React from "react"
import { Group, Layer, Path, Stage, Text } from "react-konva"

// Data
import { ArrayOfTeeth } from "../../data/teeth"

// Helpers
import { sortGroupArray, stringsArrToNumbersArr } from "../../helpers/utils"

// Styles
import "./IPRTeethForm.css"

// Component: IPR Teeth Form
function IPRTeethForm({ groupsArr, setGroupsArr, setFormData }) {
  // Functions
  function addTeethRow(toothGroupValue) {
    setFormData((prevValue) => {
      if (prevValue.ipr_teeth.includes(toothGroupValue)) return prevValue
      return {
        ipr_deadline_aligner_number: [
          ...prevValue.ipr_deadline_aligner_number,
          1,
        ],
        ipr_amount: [...prevValue.ipr_amount, 0.5],
        ipr_teeth: [...prevValue.ipr_teeth, toothGroupValue],
      }
    })
  }
  function removeTeethRow(id) {
    setFormData((prevState) => {
      const index = prevState.ipr_teeth.indexOf(id)
      if (index === -1) return prevState
      return {
        ipr_deadline_aligner_number:
          prevState.ipr_deadline_aligner_number.filter((_, i) => i !== index),
        ipr_amount: prevState.ipr_amount.filter((_, i) => i !== index),
        ipr_teeth: prevState.ipr_teeth.filter((_, i) => i !== index),
      }
    })
  }
  function handleDividerClick(tooth) {
    if (tooth.type === "t") return
    const isGroupSelected = groupsArr?.includes(tooth.toothGroup)
    setGroupsArr((prevState) => {
      const updatedGroups = isGroupSelected
        ? prevState.filter((item) => item !== tooth.toothGroup)
        : [...prevState, tooth.toothGroup]
      if (!isGroupSelected) {
        addTeethRow(tooth.toothGroup)
      } else {
        removeTeethRow(tooth.toothGroup)
      }
      return sortGroupArray(updatedGroups)
    })
  }

  // Render
  return (
    <section className="canvas-container">
      <Stage width={700} height={730}>
        <Layer>
          {ArrayOfTeeth.map((tooth) => {
            return (
              <Group key={tooth.id}>
                <Path
                  x={tooth?.x}
                  y={tooth?.y}
                  data={tooth?.data}
                  fill={
                    tooth.type === "t"
                      ? stringsArrToNumbersArr(groupsArr)?.includes(
                          tooth.number
                        )
                        ? "#E3524F"
                        : "white"
                      : "black"
                  }
                  rotation={tooth?.rotation}
                  stroke="black"
                  scale={tooth.scale}
                  onClick={() => handleDividerClick(tooth)}
                />
                <Text
                  x={tooth?.numberX}
                  y={tooth?.numberY}
                  rotation={tooth?.numberRot}
                  text={tooth?.number?.toString()}
                  fontSize={12}
                  fill="black"
                  align="center"
                />
              </Group>
            )
          })}
        </Layer>
      </Stage>
    </section>
  )
}

// Export
export default IPRTeethForm
