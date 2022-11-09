import { render as home } from "./home.mjs";
import { render as about } from "./about.mjs";
import { render as blog } from "./blog/index.js";
import { render as curriculum } from "./curriculum.js";
import { render as parser } from "./pratt-parser/index.js";

export default {
    home,
    about,
    blog,
    curriculum,
    "pratt-parser": parser,
};