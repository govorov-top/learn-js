/*
 Формат JSON и работа с ним
 JSON - JavaScript Object Notation
 */const configJSON = `{
  "name": "Roman",
  "age": 26,
  "skills": [
    "CSS","HTML"
  ],
  "language": {
    "english": "B2"
  }
}`;
const obj = {
    a:1,
    print (){
        console.log('Hi!');
    }
};
console.log(JSON.stringify(obj));

const json = JSON.parse(configJSON);
console.log(json.name);