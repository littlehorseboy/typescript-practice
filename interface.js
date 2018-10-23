var printLabel = function (labelledObj) {
    console.log(labelledObj.label);
};
// const printLabel = (labelledObj: { label: string }) => {
//   console.log(labelledObj.label);
// };
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
