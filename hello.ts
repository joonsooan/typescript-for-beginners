const player: readonly [string, number, boolean] = ["jason", 23, true];
// readonly: 변경할 수 없고 읽는 것만 가능
// tuple: 정해진 개수와 순서에 따라 배열 선언

const apple: string[] = ["asdf", "sdf"];
const banana: number[] = [1, 2, 3, 4, 5];

let a: undefined = undefined;
let b: null = null;

// any: 아무 타입이나 가능
let c: any = [1, false, "string"];
let d: any = true;
c + d;
