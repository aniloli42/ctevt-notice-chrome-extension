// typescript model
import { Notice } from './models/notice.model'
//
import { useEffect, useState } from 'react'
import styles from './styles/styles.module.css'

// components
import Header from './components/Header'
import Notices from './components/Notices'

// Packages
import axios from 'axios'

const App = () => {
	const [notices, setNotices] = useState<Notice[] | null>(null)

	useEffect(() => {
		getNotices()
	}, [])

	const getNotices = async () => {
		try {
			const res: any = await axios.get(
				'https://ctevtnotice.herokuapp.com/notices'
			)

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
