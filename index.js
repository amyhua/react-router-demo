import { Router, Route, Link } from 'react-router';
import React from 'react';
import { render } from 'react-dom';

const Hello = () => <h1>Hello There!!</h1>;

render((<Hello />), document.getElementById('app'))
