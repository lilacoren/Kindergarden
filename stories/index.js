import {initialProps} from './stub';
import React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from '@storybook/react';
import MainAdmin from '../src/MainAdmin';

const storyBasicStyles = {
    width: '400px'
};

storiesOf('admin example', module)
    .add('admin', () => (
        <section style={storyBasicStyles}>
            <MainAdmin {...initialProps}/>
        </section>
    ));