import React from 'react'
import ArrowFunction from './ArrowFunction';
import NormalFunction from './NormalFnction';
import ClassBasedComponent from './ClassBasedComponent';
import PropsParent from './PropsParent';
import PropsFunction from './PropsFunction';
import StateExaple from './StateExample';
import JsonASProps from './JsonASProps';
import User from './User.json'
import StateExampleConstructor from './StateExampleConstructor';
function App(){
    return (
        <>
        <ClassBasedComponent/>
        <NormalFunction/>
        <ArrowFunction/>
        <PropsParent/>
        <PropsFunction name="Arman"/>
        <StateExaple/>
        <StateExampleConstructor/>
        <JsonASProps name={User.name} age={User.age} gender={User.gender} PhoneNo={User.PhoneNo}/>
        </>
    )
}
export default App;