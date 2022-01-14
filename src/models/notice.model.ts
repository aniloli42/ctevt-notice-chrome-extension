export interface Notice {
	_id: ID
	published_date: string
	notice_title: string
	notice_link: string
	file_links: FileLink[]
	published_by: string
	createdAt: string
	updatedAt: string
	__v: number
}

export interface ID {
	$oid: string
}

export interface FileLink {
	file_link: string
	file_title: string
}
