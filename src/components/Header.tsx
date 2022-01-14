// file
import reloadImg from './../assets/imgs/reload.png'

// module css
import styles from './../styles/styles.module.css'

interface Props {
	reloadFunc: () => Promise<void>
}

const Header = (props: Props) => {
	const { reloadFunc } = props
	return (
		<>
			<header className={styles.header}>
				<div>
					<div className={styles.brand_title}>CTEVT Notice</div>
					<div className={styles.brand_caption}>
						Latest 10 Notices
					</div>
				</div>

				<button
					className={styles.reload_button}
					onClick={() => reloadFunc()}
					title='Reload Notices'>
					<img
						src={reloadImg}
						alt='reload Icon'
						width={14}
						height={14}
					/>
				</button>
			</header>
		</>
	)
}

export default Header
