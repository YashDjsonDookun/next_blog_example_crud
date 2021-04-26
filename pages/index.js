import Head from 'next/head'
import Create_Post from '../components/Create_Post';
import Posts from '../components/Posts';
import React from 'react'

export default function Home() {
    const [sharedState, setSharedState] = React.useState([])
    return (
      <div>
        <Head>
          <title>SQL_BLOG: Home</title>
        </Head>
        <Create_Post setSharedState={setSharedState} sharedState={sharedState} />
        <Posts setSharedState={setSharedState} sharedState ={sharedState} />
      </div>
    );
}