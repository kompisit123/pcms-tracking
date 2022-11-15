import React, { useState } from "react";
import Head from "next/head";
import { TableManager, Modalbox, AddForm,EditForm } from "../components";

export default function Home() {

	// useEffect(()=> {
	// 	checkNetwork() 
	//   },[])


    
	const isOpen = false

	return (
		<>
		<Head>
			<title>PCMS Tracking</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="shortcut icon" href="/kap.svg" />
		</Head>
        {/* <AddForm /> */}
		<EditForm />
        <TableManager />
        </>
	);
}



