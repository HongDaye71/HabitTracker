import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./app";

const root = document.getElementById("root");
render(<App />, root);

/*
[React Dom]
React파일은 BABEL을 통해 순수JS파일로 변환되며, React Dom을 통해 HTML과 연결된다
*사용자에게 궁극적으로 전달되는 것: index.html
*ReactDOM사용 시, index.html의 root와 연결됨(HTML파일과 연결되어 사용자에게 보여짐)

[StrictMode]
JS의 use strict과 동일한 목적으로 사용
*/
