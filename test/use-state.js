function useState(initialValue) {
 const infoObject = {
  value: initialValue,
  setValue: (changedValue) => {
   if (changedValue instanceof Function) {
    return (this.value = changedValue(initialValue));
   }
   return (this.value = changedValue);
  },
 };
 return [infoObject.value, infoObject.setValue];
}

const [value, setValue] = useState('random value');
console.log(value);
const testFunction = (value) => {
 return `${value} + "hello world"`;
};
console.log(setValue(testFunction));
