import React from 'react';

// @ts-ignore
const UserList = ({users}) => {
    return (
        <div className={"userList"}>
            {users.map((user: { id: number; name: string; age: number; }) => {
                const{id, name, age} = user;
                return (
                    <div key={id} className="user">
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
// @ts-ignore
export default UserList