import { FC } from 'react'

interface TagListProps {
	list: string[]
}

export const TagList: FC<TagListProps> = ({ list }) => {
	return (
		<ul className="flex">
			{list.map(tag => (
				<li
					className="font-light text-date border border-conduit-gray-600 mb-0.2 mr-1 px-tag rounded-tag text-conduit-gray-600"
					key={tag}
				>
					{tag}
				</li>
			))}
		</ul>
	)
}
