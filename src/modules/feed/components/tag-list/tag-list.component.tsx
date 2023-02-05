import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export enum TagListStyle {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

interface TagListProps {
	list: string[]
	itemStyle?: keyof typeof TagListStyle
	itemAs?: 'li' | 'a'
}

export const TagList: FC<TagListProps> = ({
	list,
	itemStyle = TagListStyle.LIGHT,
	itemAs = 'li',
}) => {
	const itemClasses = clsx(
		'font-light text-date mb-0.2 mr-1 px-tag rounded-tag border',
		{
			'border-conduit-gray-600 text-conduit-gray-600':
				itemStyle === TagListStyle.LIGHT,
			'bg-conduit-gray-800 text-white border-conduit-gray-800 cursor-pointer hover:bg-conduit-gray-900 hover:text-white hover:no-underline':
				itemStyle === TagListStyle.DARK,
		}
	)

	return (
		<ul className="flex flex-wrap">
			{list.map(tag => {
				return itemAs === 'li' ? (
					<li className={itemClasses} key={tag}>
						{tag}
					</li>
				) : (
					<Link to={`/?tag=${tag}`} className={itemClasses} key={tag}>
						{tag}
					</Link>
				)
			})}
		</ul>
	)
}
