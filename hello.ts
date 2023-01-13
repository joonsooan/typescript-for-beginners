let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
} else if (typeof a === "string") {
  let b = a.toUpperCase();
}

// void: 아무것도 return하지 않는 함수에서 반환 자료형
function voidFunction() {
  console.log("hello");
}
const b = voidFunction();

function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name; // type: never
  }
}
