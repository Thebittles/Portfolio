
// default export
export default function add(...args) {
 return args.reduce((acc, cur) => cur + acc);
}

export function multiply(...args) {
 return args.reduce((acc, cur) => cur * acc);
}


export function subtract(...args) {
 return args.reduce((acc, cur) => cur - acc);
}