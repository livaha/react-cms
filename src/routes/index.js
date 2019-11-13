import React from "react";
import { Switch,  Route,} from "react-router-dom";
import Demo from './demo1';
import ListUpdate from '../components/ListUpdate';
import { Demo1} from '../components/Hooktest';


export default function Routes(){
    return (
        <div>
            <Switch>
                <Route path="/list">
                    <ListUpdate/>
                </Route>
                <Route path="/hook">
                    <Demo1/>
                </Route>
                <Route path="/">
                    <Demo/>
                </Route>

            </Switch>
        </div>
    )
}