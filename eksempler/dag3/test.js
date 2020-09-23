// let a = {
//   navn: "Mikkel",
//   fødselsår: 2003,
// };
// //a["navn"] = "Mikkel";
// // a.navn = "Mikkel";
// // a.fødselsår = 2003;

// console.log(a);
// let o = {
//   el: "#app",
//   methods: [],
// };

// //let v = new Vue();

// console.log(o);

let r = [5, 1, 5, 7, 8, 10, 3];

// r.forEach(function (v, i) {
//   console.log(i + " : " + v);
// });

//console.log(r);
// r.sort(function (a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// });

r.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
//console.log(r);

// let rr = r.filter(function (v, i, a) {
//   return v <= 5;
// });

let rr = r.filter((v) => v <= 5);

console.log(rr);
// let that = this;
// let self = this;
// let _this = this;

// function minVærdi(a) {
//   a.sort();
//   return a[0];
// }

// test(
//   "a",
//   function (a, b) {
//     console.log("Færdig " + a);
//   },
//   function (medd) {
//     console.log("Fejl " + medd);
//   }
// );

// function test(o, done, err) {
//   if (true) {
//     done("dlffdjk", 1);
//   }
//   if (false) err("Fejl");
// }
