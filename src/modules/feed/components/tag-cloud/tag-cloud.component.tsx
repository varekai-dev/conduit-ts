import { FC } from 'react'
import { Container } from '../../../../common/components/container/container.component'
import { useGetPopularTagsQuery } from '../../api/repository'
import { TagList } from '../tag-list/tag-list.component'

interface TagCloudProps {}

export const TagCloud: FC<TagCloudProps> = () => {
	const { data, isLoading, isFetching, error } = useGetPopularTagsQuery('')

	if (isLoading || isFetching) {
		return <Container>Loading popular tags...</Container>
	}

	if (error) {
		return <Container>Error while loading popular tags</Container>
	}

	return (
		<div className="bg-conduit-gray-100 p-3 pt-1.5">
			<p className="mb-2">Popular Tags</p>
			<TagList itemStyle="DARK" itemAs="a" list={data!.tags} />
		</div>
	)
}
