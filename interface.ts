interface LabelledValue {
  label: string;
}

const printLabel = (labelledObj: LabelledValue) => {
  console.log(labelledObj.label);
};

// const printLabel = (labelledObj: { label: string }) => {
//   console.log(labelledObj.label);
// };

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
