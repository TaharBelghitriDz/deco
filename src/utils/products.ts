export default [
  { main: "table", other: ["bed"], src: "/table-01.jpg" },
  { main: "table", other: [], src: "/desk-02.jpg" },
  { main: "table", other: ["chair"], src: "/desk-01.jpg" },
  { main: "chair", other: [], src: "/chair-01.jpg" },
  { main: "sofa", other: ["tabele", "chair", "chair"], src: "/sofa-01.jpg" },
  { main: "light", other: ["tabele", "chair"], src: "/light-02.jpg" },
  { main: "light", other: ["tabele", "bed"], src: "/light-01.jpg" },
  { main: "bed", other: [], src: "/bed-02.jpg" },
  { main: "bed", other: ["light"], src: "/bed-01.jpg" },
  {
    main: "sofa",
    other: ["tabele", "chair", "chair", "light"],
    src: "/sofa-02.jpg",
  },
];
