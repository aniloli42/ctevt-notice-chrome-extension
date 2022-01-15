import React, { useEffect, useState } from 'react'

// typescript model
import { Notice } from './models/notice.model'

// Packages
import styles from './styles/styles.module.css'
import axios from 'axios'

// components
import Header from './components/Header'
import Notices from './components/Notices'

const App = () => {
	const [notices, setNotices] = useState<Notice[] | null>(null)

	useEffect(() => {
		getNotices()
		console.log()
	}, [])

	const getNotices = async () => {
		try {
			const res: any = await axios.get(`${process.env.REACT_APP_API_URL}`)

			const fetchedNotices: Notice[] = await res.data

			setNotices(fetchedNotices)
		} catch (e: any) {
			console.error(e.messsage)
		}
	}

	return (
		<div className={styles.content}>
			<Header reloadFunc={getNotices} />
			<Notices notices={notices} />
		</div>
	)
}

export default App
