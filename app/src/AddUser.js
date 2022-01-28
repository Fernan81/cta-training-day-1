import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const ADD_USER = gql`
    mutation addUser (
      $name: String!
    ) {
        insert_users(objects: {name: $name}) {
        returning {
            name
        }
      }
    }
`

export default function UserInsert() {
  
    const [addUser, { loading, error }] = useMutation(ADD_USER)
  
    const initialState = {
      name: ''
    }
  
    const [formState, setFormState] = useState(initialState)
  
    if (loading) return 'Submitting...';
    if (error) return "Error! " + error.message;
  
    const handleSubmit = event => {
  
      event.preventDefault();
  
      addUser({
        variables: formState,
      });
  
      setFormState(initialState)
  
    }

    return (

        <div>
            <h2>New user</h2>
            <form onSubmit={handleSubmit} >
                <label>Name</label>
                <input onChange={(e) => setFormState({ ...formState, name: e.target.value })} value={formState.name} />
                <button type="submit">Save</button>
            </form>
        </div>

    )
}