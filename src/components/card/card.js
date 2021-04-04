// import '../App.css';
import { HomePageInfoStripe } from '../homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../../staticData/homePageSections.json'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {CardDiv} from './style'

export default function Card({movie}) {

    return (
        <CardDiv movie={movie}/>
    )
}

