import { withAuthenticator } from 'aws-amplify-react'
 import React, { useEffect } from 'react'
 import { Auth } from 'aws-amplify'

 function App() {
   useEffect(() => {
     Auth.currentAuthenticatedUser()
       .then(user => console.log({ user }))
       .catch(error => console.log({ error }))
   })
   return (
     <div className="App">
       <p>
         Hello! This is an AWS Amplify application.
       </p>
     </div>
   )
 }

 export default withAuthenticator(App, { includeGreetings: true })