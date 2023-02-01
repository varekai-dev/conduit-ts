import { FC } from 'react'

interface TagListProps {}

export const TagList: FC<TagListProps> = () => {
	return (
		<ul className="flex">
			<li className="font-light text-date border border-conduit-gray-600 mb-0.2 mr-1 px-tag rounded-tag text-conduit-gray-600">
				omnis
			</li>
			<li className="font-light text-date border border-conduit-gray-600 mb-0.2 mr-1 px-tag rounded-tag text-conduit-gray-600">
				omnis
			</li>
			<li className="font-light text-date border border-conduit-gray-600 mb-0.2 mr-1 px-tag rounded-tag text-conduit-gray-600">
				omnis
			</li>
			<li className="font-light text-date border border-conduit-gray-600 mb-0.2 mr-1 px-tag rounded-tag text-conduit-gray-600">
				omnis
			</li>
		</ul>
	)
}
