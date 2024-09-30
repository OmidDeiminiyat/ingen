import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import React from "react";
import { BlogQuery } from "../Query/AllData";
import { useState } from "react";
import style from './Home.module.scss';

export const Home = ({children}) => {

    return(
        <>
            {children}
        </>
    )
}