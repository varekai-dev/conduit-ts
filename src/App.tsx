import { Banner } from './common/components/banner/banner.component'
import { Header } from './common/components/header/header.component'
import { Article } from './modules/feed/components/article/article.component'

export const App = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Article />
		</div>
	)
}
