import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana','Bruce']
    // const nameList =   names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill : 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill : 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 27,
            skill : 'Vue'
        }
    ]

const nameList =   names.map((name,index) => <h2 key = {index}>{index} {name}</h2>) // add keyprop, key id can be any value as long as it unique
    return <div>{nameList}</div>
}

export default NameList

// key la 1 string attribut can phai them vao khi tao lists cac phan tu
// no cho cac phan tu 1 stable identity, giup React nhan dien cac phan nao dc thay doi, them vao hoac bo di
//Giup tao efficient update cho user interface