const shapes = {
  shape1: $(".shape-1"),
  shape2: $(".shape-2"),
  shape3: $(".shape-3"),
  shape4: $(".shape-4"),
  shape5: $(".shape-5"),
  shape6: $(".shape-6"),
  shape7: $(".shape-7"),
  shape8: $(".shape-8"),
  shape9: $(".shape-9"),
  shape10: $(".shape-10"),
  shape11: $(".shape-11"),
  shape12: $(".shape-12"),
  shape13: $(".shape-13"),
  shape14: $(".shape-14"),
  shape15: $(".shape-15"),
};
const boxes = {
  box1: $("#shape-1"),
  box2: $("#shape-2"),
  box3: $("#shape-3"),
  box4: $("#shape-4"),
  box5: $("#shape-5"),
  box6: $("#shape-6"),
  box7: $("#shape-7"),
  box8: $("#shape-8"),
  box9: $("#shape-9"),
  box10: $("#shape-10"),
  box11: $("#shape-11"),
  box12: $("#shape-12"),
  box13: $("#shape-13"),
  box14: $("#shape-14"),
  box15: $("#shape-15"),
};

const buttons = {
  btn1: document.querySelector("#btn1"),
  btn2: document.querySelector("#btn2"),
  btn3: document.querySelector("#btn3"),
  btn4: document.querySelector("#btn4"),
  btn5: document.querySelector("#btn5"),
  btn6: document.querySelector("#btn6"),
};

const randomizer1 = [
  "shape-1",
  "alt-theme-1-shape-1",
  "alt-theme-2-shape-1",
  "alt-theme-3-shape-1",
  "alt-theme-4-shape-1",
];
const randomizer2 = [
  "shape-2",
  "alt-theme-1-shape-2",
  "alt-theme-2-shape-2",
  "alt-theme-3-shape-2",
  "alt-theme-4-shape-2",
];
const randomizer3 = [
  "shape-3",
  "alt-theme-1-shape-3",
  "alt-theme-2-shape-3",
  "alt-theme-3-shape-3",
  "alt-theme-4-shape-3",
];
const randomizer4 = [
  "shape-4",
  "alt-theme-1-shape-4",
  "alt-theme-2-shape-4",
  "alt-theme-3-shape-4",
  "alt-theme-4-shape-4",
];
const randomizer5 = [
  "shape-5",
  "alt-theme-1-shape-5",
  "alt-theme-2-shape-5",
  "alt-theme-3-shape-5",
  "alt-theme-4-shape-5",
];
const randomizer6 = [
  "shape-6",
  "alt-theme-1-shape-6",
  "alt-theme-2-shape-6",
  "alt-theme-3-shape-6",
  "alt-theme-4-shape-6",
];
const randomizer7 = [
  "shape-7",
  "alt-theme-1-shape-7",
  "alt-theme-2-shape-7",
  "alt-theme-3-shape-7",
  "alt-theme-4-shape-7",
];
const randomizer8 = [
  "shape-8",
  "alt-theme-1-shape-8",
  "alt-theme-2-shape-8",
  "alt-theme-3-shape-8",
  "alt-theme-4-shape-8",
];
const randomizer9 = [
  "shape-9",
  "alt-theme-1-shape-9",
  "alt-theme-2-shape-9",
  "alt-theme-3-shape-9",
  "alt-theme-4-shape-9",
];
const randomizer10 = [
  "shape-10",
  "alt-theme-1-shape-10",
  "alt-theme-2-shape-10",
  "alt-theme-3-shape-10",
  "alt-theme-4-shape-10",
];
const randomizer11 = [
  "shape-11",
  "alt-theme-1-shape-11",
  "alt-theme-2-shape-11",
  "alt-theme-3-shape-11",
  "alt-theme-4-shape-11",
];
const randomizer12 = [
  "shape-12",
  "alt-theme-1-shape-12",
  "alt-theme-2-shape-12",
  "alt-theme-3-shape-12",
  "alt-theme-4-shape-12",
];
const randomizer13 = [
  "shape-13",
  "alt-theme-1-shape-13",
  "alt-theme-2-shape-13",
  "alt-theme-3-shape-13",
  "alt-theme-4-shape-13",
];
const randomizer14 = [
  "shape-14",
  "alt-theme-1-shape-14",
  "alt-theme-2-shape-14",
  "alt-theme-3-shape-14",
  "alt-theme-4-shape-14",
];
const randomizer15 = [
  "shape-15",
  "alt-theme-1-shape-15",
  "alt-theme-2-shape-15",
  "alt-theme-3-shape-15",
  "alt-theme-4-shape-15",
];

const alt1Shapes = {
  alt1Shape1: $(".alt-theme-1-shape-1"),
  alt1Shape2: $(".alt-theme-1-shape-2"),
  alt1Shape3: $(".alt-theme-1-shape-3"),
  alt1Shape4: $(".alt-theme-1-shape-4"),
  alt1Shape5: $(".alt-theme-1-shape-5"),
  alt1Shape6: $(".alt-theme-1-shape-6"),
  alt1Shape7: $(".alt-theme-1-shape-7"),
  alt1Shape8: $(".alt-theme-1-shape-8"),
  alt1Shape9: $(".alt-theme-1-shape-9"),
  alt1Shape10: $(".alt-theme-1-shape-10"),
  alt1Shape11: $(".alt-theme-1-shape-11"),
  alt1Shape12: $(".alt-theme-1-shape-12"),
  alt1Shape13: $(".alt-theme-1-shape-13"),
  alt1Shape14: $(".alt-theme-1-shape-14"),
  alt1Shape15: $(".alt-theme-1-shape-15"),
};
const alt2Shapes = {
  alt2Shape1: $(".alt-theme-2-shape-1"),
  alt2Shape2: $(".alt-theme-2-shape-2"),
  alt2Shape3: $(".alt-theme-2-shape-3"),
  alt2Shape4: $(".alt-theme-2-shape-4"),
  alt2Shape5: $(".alt-theme-2-shape-5"),
  alt2Shape6: $(".alt-theme-2-shape-6"),
  alt2Shape7: $(".alt-theme-2-shape-7"),
  alt2Shape8: $(".alt-theme-2-shape-8"),
  alt2Shape9: $(".alt-theme-2-shape-9"),
  alt2Shape10: $(".alt-theme-2-shape-10"),
  alt2Shape11: $(".alt-theme-2-shape-11"),
  alt2Shape12: $(".alt-theme-2-shape-12"),
  alt2Shape13: $(".alt-theme-2-shape-13"),
  alt2Shape14: $(".alt-theme-2-shape-14"),
  alt2Shape15: $(".alt-theme-2-shape-15"),
};
const alt3Shapes = {
  alt3Shape1: $(".alt-theme-3-shape-1"),
  alt3Shape2: $(".alt-theme-3-shape-2"),
  alt3Shape3: $(".alt-theme-3-shape-3"),
  alt3Shape4: $(".alt-theme-3-shape-4"),
  alt3Shape5: $(".alt-theme-3-shape-5"),
  alt3Shape6: $(".alt-theme-3-shape-6"),
  alt3Shape7: $(".alt-theme-3-shape-7"),
  alt3Shape8: $(".alt-theme-3-shape-8"),
  alt3Shape9: $(".alt-theme-3-shape-9"),
  alt3Shape10: $(".alt-theme-3-shape-10"),
  alt3Shape11: $(".alt-theme-3-shape-11"),
  alt3Shape12: $(".alt-theme-3-shape-12"),
  alt3Shape13: $(".alt-theme-3-shape-13"),
  alt3Shape14: $(".alt-theme-3-shape-14"),
  alt3Shape15: $(".alt-theme-3-shape-15"),
};
const alt4Shapes = {
  alt4Shape1: $(".alt-theme-4-shape-1"),
  alt4Shape2: $(".alt-theme-4-shape-2"),
  alt4Shape3: $(".alt-theme-4-shape-3"),
  alt4Shape4: $(".alt-theme-4-shape-4"),
  alt4Shape5: $(".alt-theme-4-shape-5"),
  alt4Shape6: $(".alt-theme-4-shape-6"),
  alt1Shape7: $(".alt-theme-4-shape-7"),
  alt4Shape8: $(".alt-theme-4-shape-8"),
  alt4Shape9: $(".alt-theme-4-shape-9"),
  alt4Shape10: $(".alt-theme-4-shape-10"),
  alt4Shape11: $(".alt-theme-4-shape-11"),
  alt4Shape12: $(".alt-theme-4-shape-12"),
  alt4Shape13: $(".alt-theme-4-shape-13"),
  alt4Shape14: $(".alt-theme-4-shape-14"),
  alt4Shape15: $(".alt-theme-4-shape-15"),
};
