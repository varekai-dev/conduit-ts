import { FC } from 'react'

interface FavoriteButtonProps {}

export const FavoriteButton: FC<FavoriteButtonProps> = () => {
	return (
		<button className="text-conduit-green border border-conduit-green text-center align-middle cursor-pointer select-none py-1 px-2 text-sm rounded-buttonSm group hover:bg-conduit-green hover:text-white focus:text-white focus:bg-conduit-darkGreen">
			<i className="ion-heart"></i>
			<span className="ml-1 font-normal">70</span>
		</button>
	)
}
