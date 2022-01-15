import React from 'react'

import moment from 'moment'
import { Notice } from '../models/notice.model'
import styles from './../styles/styles.module.css'

interface Props {
	notices: Notice[] | null
}

const Notices = (props: Props) => {
	const { notices } = props

	return (
		<>
			<main className={styles.main}>
				{notices ? (
					notices.map((notice, index) => (
						<div key={index} className={styles.notice}>
							<h2 className={styles.notice_heading}>
								{notice.notice_title}
							</h2>
							<div className={styles.notice_details}>
								<p>{moment(notice.createdAt).fromNow()}</p> |
								<p>{notice.published_by}</p>
							</div>
							<a
								href={notice.notice_link}
								target='_blank'
								className={styles.link_button}
								rel='noopener noreferrer'>
								View Notice
							</a>
						</div>
					))
				) : (
					<div className={styles.loading}>Loading...</div>
				)}
			</main>
		</>
	)
}

export default Notices
