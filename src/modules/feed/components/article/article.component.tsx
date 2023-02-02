import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteButton } from '../favorite-button/favorite-button.component'
import { TagList } from '../tag-list/tag-list.component'

interface ArticleProps {}

export const Article: FC<ArticleProps> = () => {
	return (
		<article>
			<div className="border-t border-black/10 py-6">
				<div className="mb-4 font-light flex justify-between">
					<div>
						<Link to="/@serhijsav">
							<img
								src="https://api.realworld.io/images/demo-avatar.png"
								alt="avatar"
								className="inline-block h-8 w-8 rounded-full"
							/>
						</Link>
						<div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
							<Link to="/@serhijsav" className="font-medium">
								John Doe
							</Link>
							<span className="text-conduit-gray-500 text-date">
								December 9, 2022
							</span>
						</div>
					</div>
					<FavoriteButton />
				</div>
				<Link to="/article/qwerty" className="hover:no-underline">
					<h1 className="mb-1 font-semibold text-2xl text-conduit-black">
						If we quantify the alarm, we can get to the FTP pixel through the
						online SSL interface!
					</h1>
					<p className="text-conduit-gray-700 font-light mb-1">
						Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
						cupiditate est facere omnis possimus. Tenetur similique nemo illo
						soluta molestias facere quo. Ipsam totam facilis delectus nihil
						quidem soluta vel est omnis.
					</p>
					<div className="flex justify-between">
						<span className="text-conduit-gray-500 text-date font-light">
							Read more...
						</span>
						<TagList />
					</div>
				</Link>
			</div>
		</article>
	)
}
